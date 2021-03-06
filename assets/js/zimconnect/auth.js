import axios from 'axios'
const BASEUrl = process.env.baseUrl;

class Auth {
  static confirm(data){
    let api = '/auth/confirm';
    return new Promise(async (resolve, reject) => {
      try {
        let response = await axios.put(BASEUrl + api, data)
        resolve(response.data);
      } catch (error) {
        reject(error.response)
      }
    })
  }

  static submitEmail(data){
    let api = '/auth/forgot';
    return new Promise(async (resolve, reject) => {
      try {
        let response = await axios.put(BASEUrl + api, data)
        resolve(response.data);
      } catch (error) {
        reject(error.response)
      }
    })
  }

  static resetPassword(data){
    let api = '/auth/reset';
    return new Promise(async (resolve, reject) => {
      try {
        let response = await axios.put(BASEUrl + api, data)
        resolve(response.data);
      } catch (error) {
        reject(error.response)
      }
    })
  }
}

export default Auth;