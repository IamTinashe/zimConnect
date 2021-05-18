
import axios from 'axios'
const BASEUrl = 'https://www.zimbojobs.com';

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
        let educationAcademy = this.removeDups(cvs[index].education_academy);
        for (i in educationAcademy) {
          if (educationAcademy[i].toLowerCase().includes('polytech') || educationAcademy[i].toLowerCase().includes('training')) {
            educationAcademy.splice(i, 1);
            weight = weight + 1;
          } else if (educationAcademy[i].toLowerCase().includes('university') || educationAcademy[i].toLowerCase().includes('institute')) {
            if (cvs[index].education.length > 0) {
              let education = this.removeDups(cvs[index].education);
              let j = 0;
              for (j in education) {
                if (education[j].toLowerCase().includes('bachelor') || education[j].toLowerCase().includes('b.sc') || education[j].toLowerCase().includes('b.a') || education[j].toLowerCase().includes('ba')) {
                  weight = weight + 2;
                } else if (education[j].toLowerCase().includes('master')) {
                  weight = weight + 2.5;
                } else if (education[j].toLowerCase().includes('phd')) {
                  weight = weight + 3;
                } else {
                  weight = weight + 1;
                }
                education.splice(j, 1);
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
        let weight = experience*0.3;
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
    let index = 0, i = 0;
    for (index in cvs)
      if (!cvs[index].fullname.includes(' ') || cvs[index].fullname.includes('@')) {
        cvs.splice(index, 1);
        index--;
      }

    for (i in cvs)
      while (!cvs[index].fullname.includes(' '))
        this.filterByGoodName(cvs)
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
              weight = 2 + weight;
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
        cvs[filteredCVs[index].index]
      rankedCVs.push({
        fullname: cvs[filteredCVs[index].index].fullname,
        skills: this.removeDups(cvs[filteredCVs[index].index].skills),
        description: '',
        image: cvs[filteredCVs[index].index].userimage,
        gender: cvs[filteredCVs[index].index].gender,
        sector: cvs[filteredCVs[index].index].sector,
        dob: cvs[filteredCVs[index].index].dob,
        yoe: filteredCVs[index].experience,
        attendedSchools: this.removeDups(cvs[filteredCVs[index].index].education_academy),
        qualifications: this.removeDups(cvs[filteredCVs[index].index].education),
        cvUrl: cvs[filteredCVs[index].index].cv_url.file_url,
        weight: filteredCVs[index].weight
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
    return filterArr.sort((a, b) => (a.weight < b.weight) ? 1 : -1);
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
}

export default CVmatching;