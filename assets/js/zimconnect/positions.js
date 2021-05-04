import axios from 'axios'
const BASEUrl = 'http://127.0.0.1:8080';

class Positions {
  static getPositions(token){
    let api = '/api/position/all';
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

export default Positions;