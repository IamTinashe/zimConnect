import axios from 'axios';
const BASEUrl = process.env.baseUrl;

class Shortlist {
  static shortlist(data){
    let api = '/resumes/select';
    return new Promise(async (resolve, reject) => {
      try {
        let response = await axios.post(BASEUrl + api, data)
        resolve(response.data);
      } catch (error) {
        reject(error.response)
      }
    })
  }

  static removeShortlist(data){
    let api = '/resumes/removeselected';
    return new Promise(async (resolve, reject) => {
      try {
        let response = await axios.post(BASEUrl + api, data)
        resolve(response.data);
      } catch (error) {
        reject(error.response)
      }
    })
  }

  //update this
  static viewCount(email){
    let api = '/resumes/removeselected';
    return new Promise(async (resolve, reject) => {
      try {
        let response = await axios.post(BASEUrl + api, data)
        resolve(response.data);
      } catch (error) {
        reject(error.response)
      }
    })
  }
}

export default Shortlist;