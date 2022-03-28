import axios from 'axios'
const BASEUrl = process.env.basaJava;

class Company {
    static getCompanies(){
        let api = '/api/company/all';
        return new Promise(async (resolve, reject) => {
          try {
            let response = await axios.get(BASEUrl + api)
            resolve(response.data);
          } catch (error) {
            reject(error.response)
          }
        })
      }
}

export default Company;