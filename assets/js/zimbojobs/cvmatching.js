
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
    for (index in cvs){
      let weight = 0;
      if (!(cvs[index].education_academy.length === 0 || cvs[index].education_academy === "" || cvs[index].education_academy[0] === "")) {
        cvs[index].education_academy = this.removeDups(cvs[index].education_academy);
        for (i in cvs[index].education_academy) {
          if (cvs[index].education_academy[i].toLowerCase().includes('polytech')) {
            weight = weight + 0.5;
          } else if (cvs[index].education_academy[i].toLowerCase().includes('university') || cvs[index].education_academy[i].toLowerCase().includes('institute')) {
            if (cvs[index].education.length > 0) {
              cvs[index].education = this.removeDups(cvs[index].education);
              let j = 0;
              for (j in cvs[index].education) {
                if (cvs[index].education[j].toLowerCase().includes('bachelor') || cvs[index].education[j].toLowerCase().includes('b.sc')) {
                  weight = weight + 1;
                } else if (cvs[index].education[j].toLowerCase().includes('master')) {
                  weight = weight + 1.5;
                } else if (cvs[index].education[j].toLowerCase().includes('phd')) {
                  weight = weight + 2;
                } else{
                  weight = weight + 0.5;
                }
              }
            }else{
              weight = weight + 0.5;
            }
          }
        }
      }

      if(filterArr[index].email == cvs[index].email){
        filterArr[index].weight = filterArr[index].weight + weight;
      }else{
        let k = 0;
        for(k in filterArr){
          if(filterArr[k].email == cvs[index].email){
            if(filterArr[k].email == 'sirfmt@gmail.com')
            console.log(weight)
            filterArr[index].weight = filterArr[index].weight + weight;
          }
        }
      }
    }
    return filterArr;
  }

  static filterByGoodName(cvs) {
    let index = 0, i = 0;
    for (index in cvs)
      if (!cvs[index].fullname.includes(' ')) {
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
              //console.log(cvs[j].fullname + ' ' + cvs[j].skills[k] + ' ' + profile.skill[i]);
              weight = 0.5 + weight;
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

  static sortFilters(filterArr){
    return filterArr.sort((a, b) => (a.weight < b.weight) ? 1 : -1);
  }

  static removeDups(a) {
    return a.sort().filter(function(item, pos, ary) {
      return !pos || item != ary[pos - 1];
    });
  }
}

export default CVmatching;