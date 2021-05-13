  
import axios from 'axios'
const BASEUrl = 'https://www.zimbojobs.com';

class CVmatching{
  static getCVs(){
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

  static filterByEducation(cvs){
    let index = 0, i = 0;
    for(index in cvs)
      if(cvs[index].education_academy.length === 0 || cvs[index].education_academy === "" || cvs[index].education_academy[0] === ""){
        cvs.splice(index, 1);
        index--;
      }

    for(i in cvs)
      while(cvs[i].education_academy.length === 0 || cvs[i].education_academy === "" || cvs[i].education_academy[0] === "")
        this.filterByEducation(cvs)
    return cvs;
  }

  static filterByGoodName(cvs){
    let index = 0, i = 0;
    for(index in cvs)
      if(!cvs[index].fullname.includes(' ')){
        cvs.splice(index, 1);
        index--;
      }

    for(i in cvs)
      while(!cvs[index].fullname.includes(' '))
        this.filterByGoodName(cvs)
    return cvs;
  }
}

export default CVmatching;