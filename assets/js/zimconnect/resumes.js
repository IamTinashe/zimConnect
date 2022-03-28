import axios from 'axios'
const BASEUrl = process.env.baseUrl;

class Resumes {
  static getBySkillset(profile){
    let api = '/resumes/skillset';
    return new Promise(async (resolve, reject) => {
      try {
        let response = await axios.post(BASEUrl + api, profile);
        resolve(response.data);
      } catch (error) {
        reject(error.response);
      }
    })
  }

  static advancedSearch(profile){
    let api = '/resumes/advancedsearch';
    return new Promise(async (resolve, reject) => {
      try {
        let response = await axios.post(BASEUrl + api, profile);
        resolve(response.data);
      } catch (error) {
        reject(error.response);
      }
    })
  }

  static getBySearchValue(object){
    let api = '/resumes/search';
    return new Promise(async (resolve, reject) => {
      try {
        let response = await axios.post(BASEUrl + api, object);
        resolve(response.data);
      } catch (error) {
        reject(error.response);
      }
    })
  }
  
}

export default Resumes;