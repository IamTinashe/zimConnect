  
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
        reject(error)
      }
    })
  }

  static matchCVs(profile, cvs){
    console.log(cvs)
  }
}

export default CVmatching;