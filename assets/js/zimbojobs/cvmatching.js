
import axios from 'axios'
const BASEUrl = 'https://www.zimbojobs.com';
import pattern from '../../json/weights/pattern.json';

class CVmatching {
  static getCVs() {
    let api = '/wp-json/custom/v1/candidates';
    return new Promise(async (resolve, reject) => {
      try {
        let response = await axios.get(BASEUrl + api)
        resolve(response.data);
      } catch (error) {
        reject(error.response)
      }
    })
  }

  static eliminateUnwanted(cvs, pool){
    let patternPool = this.getPool(pool);
    let i, j;
    for(i in cvs){
      let patternMatch = false;
      for(j in patternPool){
        if(
          !(this.testPattern(cvs[i].skills, patternPool[j]) ||
            this.testPattern(cvs[i].description, patternPool[j]) ||
            this.testPattern(cvs[i].qualifications, patternPool[j]))){
          patternMatch = true;
        }
      }
      if(patternMatch == true){
        cvs[i].weight = cvs[i].weight * 0.2
      }
    }

    return cvs;
  }

  static findPattern(cvs, pool, filter){
    let patternPool = this.getPool(pool);
    let i, j;
    for(i in cvs){
      let patternMatch = false;
      for(j in patternPool){
        if(
            this.testPattern(cvs[i].skills, patternPool[j]) ||
            this.testPattern(cvs[i].description, patternPool[j]) ||
            this.testPattern(cvs[i].qualifications, patternPool[j]) ||
            this.testPattern(cvs[i].sector, patternPool[j])){
          patternMatch = true;
        }
      }
      if(patternMatch == true){
        if(cvs[i].email == filter[i].email){
          filter[i].weight = filter[i].weight + 20;
        }else{
          let k = 0;
          for(k in filter){
            if(filter[k].email == cvs[i].email){
              filter[k].weight = filter[k].weight + 20;
            }
          }
        }
      } 
    }

    return filter;
  }

  static testPattern(a, key){
    let pattern = false;
    if(Array.isArray(a))a.filter(s => { if(s.includes(key)) pattern = true});
    else if (Object.prototype.toString.call(a) === '[object String]')
      if(a.includes(key)) pattern = true;

      return pattern;
  }

  static getPool(pool){
    if(pool == 'dental') return pattern.dental
    else if(pool == 'sales') return pattern.sales
    else if(pool == 'accounting') return pattern.accounting
    else if(pool == 'hr') return pattern.hr
    else return pattern.it.concat(pattern.hr).concat(pattern.accounting).concat(pattern.sales).concat(pattern.dental)
  }

  static filterByEducation2(cvs) {
    let index = 0, i = 0;
    for (index in cvs)
      if (cvs[index].education_academy.length === 0 || cvs[index].education_academy === "" || cvs[index].education_academy[0] === "") {
        cvs.splice(index, 1);
        index--;
      }

    for (i in cvs)
      while (cvs[i].education_academy.length === 0 || cvs[i].education_academy === "" || cvs[i].education_academy[0] === "")
        this.filterByEducation2(cvs)
    return cvs;
  }

  static filterByEducation(cvs, filterArr) {
    let index = 0, i = 0;
    for (index in cvs) {
      let weight = 0;
      if (!(cvs[index].education_academy.length === 0 || cvs[index].education_academy === "" || cvs[index].education_academy[0] === "")) {
        let educationAcademy = this.reFormatArray(cvs[index].education_academy);
        for (i in educationAcademy) {
          if (educationAcademy[i].includes('polytech') || educationAcademy[i].includes('training')) {
            educationAcademy.splice(i, 1);
            weight = weight + 2;
          } else if (educationAcademy[i].includes('university') || educationAcademy[i].includes('institute')) {
            if (cvs[index].education.length > 0) {
              let education_title = this.reFormatArray(cvs[index].education_title);
              let j = 0;
              for (j in education_title) {
                if (this.educationTitle(education_title[j])) {
                  weight = weight + 4;
                } else if (education_title[j].toLowerCase().includes('master') || education_title[j].toLowerCase().includes('msc')) {
                  weight = weight + 5;
                } else if (education_title[j].toLowerCase().includes('phd')) {
                  weight = weight + 6;
                } else {
                  weight = weight + 2;
                }
                education_title.splice(j, 1);
              }
              educationAcademy.splice(i, 1);
            }
          }
        }
      }
      if (filterArr[index].email == cvs[index].email) {
        filterArr[index].weight = filterArr[index].weight + weight;
      } else {
        let k = 0;
        for (k in filterArr) {
          if (filterArr[k].email == cvs[index].email) {
            filterArr[index].weight = filterArr[index].weight + weight;
          }
        }
      }
    }
    return filterArr;
  }

  static filterByField(cvs, filterArr, profile){

  }

  static filterByExperience(cvs, filterArr){
    let index = 0;
    for (index in cvs) {
      let i = 0, j = 0;
      let lowerDate = 0, upperDate = 0;
      if(cvs[index].experience_start.length > 0){
        lowerDate = cvs[index].experience_start[0]
        upperDate = cvs[index].experience_start[0]
        while (i < cvs[index].experience_start.length){
          if(new Date(lowerDate) > new Date(cvs[index].experience_start[i])){
            lowerDate = cvs[index].experience_start[i];
          }

          if(new Date(upperDate) < new Date(cvs[index].experience_start[i])){
            upperDate = new Date(cvs[index].experience_start[i]);
          }
          i++;
        }

        while (j < cvs[index].experience_end.length - 1 && cvs[index].experience_end.length > 0){
          if(cvs[index].experience_end.includes("")){
            let date = new Date();
            let year =  date.getFullYear();
            let month =  date.getMonth()
            month = month < 10 ? '0' + month : '' + month;
            let today = year +"-"+ month +"-01";
            cvs[index].experience_end[cvs[index].experience_end.indexOf("")] = today
          }
          if(lowerDate > new Date(cvs[index].experience_end[j])){
            lowerDate = new Date(cvs[index].experience_end[j]);
          }
          
          if(upperDate < new Date(cvs[index].experience_end[j])){
            upperDate = new Date(cvs[index].experience_end[j]);
          }
          j++;
        }
      }

      if(lowerDate != 0 && upperDate != 0 && lowerDate != 'Invalid Date' && upperDate != 'Invalid Date'){
        let experience = this.dateDifference(new Date(lowerDate), new Date(upperDate));
        let weight = experience*0.2;
        if(cvs[index].email == filterArr[index].email){
          filterArr[index].weight = filterArr[index].weight + weight;
          filterArr[index].experience = experience;
        }else{
          let k = 0;
          for(k in filterArr){
            if(filterArr[k].email == cvs[index].email){
              filterArr[index].weight = filterArr[index].weight + weight;
              filterArr[index].experience = experience;
            }
          }
        }
      }
    }
    return filterArr;
  }

  static filterByGoodName(cvs) {
    let index = 0;
    for (index in cvs){
      if (!cvs[index].fullname.includes(' ') || cvs[index].fullname.includes('@')) {
        cvs.splice(index, 1);
        index--;
      }
    }
    return cvs;
  }

  static filterBySkills(cvs, profile) {
    let i = 0, j = 0, filteredCVs = [];
    for (j in cvs) {
      let weight = 0;
      for (i in profile.skill) {
        let k = 0;
        for (k in cvs[j].skills) {
          if (cvs[j].skills[k].toLowerCase().includes(profile.skill[i].toLowerCase()) || profile.skill[i].toLowerCase().includes(cvs[j].skills[k].toLowerCase())) {
            if (!(
              (profile.skill[i].toLowerCase() == 'javascript' && cvs[j].skills[k].toLowerCase() == 'java')
              || (profile.skill[i].toLowerCase() == 'java' && cvs[j].skills[k].toLowerCase().includes('javascript'))
              || (profile.skill[i].toLowerCase() == 'java' && cvs[j].skills[k].toLowerCase() == 'javascript')
              || (profile.skill[i].toLowerCase() == 'word' && cvs[j].skills[k].toLowerCase().includes('wordpress'))
              || (cvs[j].skills[k].toLowerCase() == 'r'))) {
              weight = 3 + weight;
            }
          }
        }
      }
      filteredCVs.push({
        "index": j,
        "email": cvs[j].email,
        "weight": weight
      })
    }
    return filteredCVs;
  }

  static getRankedCVs(cvs, filteredCVs){
    let index = 0, rankedCVs = [];
    for(index in filteredCVs){
      let img = this.genderBasedPlaceholderImages(cvs[filteredCVs[index].index]);
      let description;
      if(cvs[filteredCVs[index].index].education.length == 0 || cvs[filteredCVs[index].index].education[0].length == 0){
        description = this.reFormatArray(cvs[filteredCVs[index].index].education_title);
      }else{
        description = this.reFormatArray(cvs[filteredCVs[index].index].education);
      }
      rankedCVs.push({
        fullname: cvs[filteredCVs[index].index].fullname,
        skills: this.reFormatArray(cvs[filteredCVs[index].index].skills),
        description: description,
        image: img,
        gender: cvs[filteredCVs[index].index].gender,
        sector: cvs[filteredCVs[index].index].sector,
        dob: cvs[filteredCVs[index].index].dob,
        yoe: filteredCVs[index].experience,
        attendedSchools: this.reFormatArray(cvs[filteredCVs[index].index].education_academy),
        qualifications: this.reFormatArray(cvs[filteredCVs[index].index].education_title),
        cvUrl: cvs[filteredCVs[index].index].cv_url.file_url,
        weight: filteredCVs[index].weight,
        email: filteredCVs[index].email
      })
    }
    return rankedCVs;
  }

  static dateDifference(date1, date2){
    let diff = new Date(date2.getTime() - date1.getTime());
    let years = diff.getUTCFullYear() - 1970;
    if(diff.getUTCMonth() > 7)
      years = years + 1
    return years
  }

  static sortFilters(filterArr) {
    filterArr = filterArr.sort((a, b) => (a.weight > b.weight) ? 1 : -1);
    return filterArr.reverse();
  }

  static removeDups(a) {
    if(Array.isArray(a)){
      return a.sort().filter(function (item, pos, ary) {
        return !pos || item != ary[pos - 1];
      });
    }else{
      return a;
    }
  }

  static arrayToLowerCase(a){
    if(Array.isArray(a)){
      return a.map(name => name.toLowerCase());
    }else{
      return a;
    }
  }

  static removeUselessValues(a){
    if(Array.isArray(a)){
      let index = 0;
      for(index in a){
        if(!isNaN(a[index]) || a[index].includes('high')){
          a.splice(a.indexOf(a[index]), 1)
          index--;
        }
      }
    }

    return a;
  }

  static educationTitle(value){
    if(
          value.includes('bachelor')
      ||  value.includes('b.sc')
      ||  value.includes('b.a')
      ||  value.includes('ba')
      ||  value.includes('honours')
      ||  value.includes('honors')){
      return true;
    }else{
      return false;
    }
  }

  static reFormatArray(a){
    a = this.arrayToLowerCase(a);
    a = this.removeDups(a);
    a = this.removeUselessValues(a);
    return a;
  }

  static genderBasedPlaceholderImages(cv){
    if(cv.gender == 'female')
      return '/images/placeholder-female.png'
    else
      return '/images/placeholder-male.png'
  }
}

export default CVmatching;