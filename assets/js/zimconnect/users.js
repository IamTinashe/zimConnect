import axios from 'axios'
const BASEUrl = process.env.baseUrl;

class Users {
  static getUsers(token){
    let api = '/api/user/all';
    let config = {
      headers: {
        Authorization: `${token}`
      }
    };
    return new Promise(async (resolve, reject) => {
      try {
        let response = await axios.get(BASEUrl + api, config)
        resolve(response.data);
      } catch (error) {
        reject(error.response);
      }
    })
  }

  static getUserByEmail(email){
    return new Promise(async (resolve, reject) => {
      try {
        let api = '/users/email/' + email;
        let response = await axios.get(BASEUrl + api);
        resolve(response.data);
      } catch (error) {
        reject(error.response);
      }
    })
  }

  static addUser(user){
    let api = '/api/auth/signup';
    return new Promise(async (resolve, reject) => {
      try {
        let response = await axios.post(BASEUrl + api, user);
        resolve(response.data);
      } catch (error) {
        reject(error.response);
      }
    })
  }
}

export default Users;