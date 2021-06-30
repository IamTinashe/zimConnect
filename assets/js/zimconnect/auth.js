import axios from 'axios'
const BASEUrl = process.env.baseUrl;

class Auth {
  static confirm(data){
    let api = '/api/auth/confirm';
    return new Promise(async (resolve, reject) => {
      try {
        let response = await axios.put(BASEUrl + api, data)
        resolve(response.data);
      } catch (error) {
        reject(error.response)
      }
    })
  }

  static verify(data){
    let api = '/api/auth/verify';
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
    let api = '/api/auth/forgot';
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
    let api = '/api/auth/resetpassword';
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