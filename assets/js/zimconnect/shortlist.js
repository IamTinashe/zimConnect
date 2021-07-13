import axios from 'axios'
const BASEUrl = process.env.baseUrl;

class Shortlist {
  static getAllShortlisted(){
    let api = '/api/shortlisted/all';
    return new Promise(async (resolve, reject) => {
      try {
        let response = await axios.get(BASEUrl + api)
        resolve(response.data);
      } catch (error) {
        reject(error.response)
      }
    })
  }

  static shortlist(candidate){
    let api = '/api/shortlisted/';
    return new Promise(async (resolve, reject) => {
      try {
        let response = await axios.post(BASEUrl + api, candidate)
        resolve(response.data);
      } catch (error) {
        reject(error.response)
      }
    })
  }

  static removeShortlist(id){
    let api = '/api/shortlisted/' + id;
    return new Promise(async (resolve, reject) => {
      try {
        let response = await axios.delete(BASEUrl + api)
        resolve(response.data);
      } catch (error) {
        reject(error.response)
      }
    })
  }

  static sendCVs(cvs, id){
    console.log(cvs)
    let api = '/api/shortlisted/submit/' + id;
    return new Promise(async (resolve, reject) => {
      try {
        let response = await axios.post(BASEUrl + api, cvs)
        resolve(response.data);
      } catch (error) {
        reject(error.response)
      }
    })
  }
}

export default Shortlist;