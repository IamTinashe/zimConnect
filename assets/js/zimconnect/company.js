import axios from 'axios'
const BASEUrl = 'http://127.0.0.1:8080';

class Company {
    static getCompanies(token){
        let api = '/api/company/all';
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
            reject(error)
          }
        })
      }
}

export default Company;