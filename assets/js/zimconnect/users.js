import axios from 'axios'
const BASEUrl = process.env.baseUrl;

class Users {
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
    let api = '/users/create';
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