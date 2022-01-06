import axios from 'axios';
const BASEUrl = process.env.baseUrl;

class Shortlist {
  static shortlist(data){
    let api = '/site/resumes/shortlist';
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
    let api = '/site/resumes/removeshortlist';
    return new Promise(async (resolve, reject) => {
      try {
        let response = await axios.delete(BASEUrl + api, {
        headers: {},
        data: data
      });
        resolve(response.data);
      } catch (error) {
        reject(error.response)
      }
    })
  }

  static select(data){
    let api = '/site/resumes/select';
    return new Promise(async (resolve, reject) => {
      try {
        let response = await axios.post(BASEUrl + api, {user: data.email, candidates: data.candidates})
        resolve(response.data);
      } catch (error) {
        reject(error.response)
      }
    })
  }

  static viewCount(email){
    let api = '/site/resumes/updateviewcount';
    return new Promise(async (resolve, reject) => {
      try {
        let response = await axios.put(BASEUrl + api, {candidateEmail: email});
        resolve(response.data);
      } catch (error) {
        reject(error.response)
      }
    })
  }
}

export default Shortlist;