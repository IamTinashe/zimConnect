import axios from 'axios'
const BASEUrl = process.env.baseUrl;

class Workdays {
    static getWorkdays(token){
        let api = '/api/workdays/all';
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
            reject(error.response)
          }
        })
      }
}

export default Workdays;