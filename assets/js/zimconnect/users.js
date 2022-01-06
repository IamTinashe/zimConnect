import axios from 'axios'
const BASEUrl = process.env.baseUrl;

class Users {
  static getUserByEmail(email){
    return new Promise(async (resolve, reject) => {
      try {
        let api = '/site/users/email/' + email;
        let response = await axios.get(BASEUrl + api);
        resolve(response.data);
      } catch (error) {
        reject(error.response);
      }
    })
  }

  static addUser(user){
    let api = '/site/users/create';
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