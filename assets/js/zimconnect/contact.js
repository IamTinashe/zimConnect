import axios from 'axios'
const BASEUrl = process.env.baseUrl;

class Contact {
  static sendMessage(data){
    let api = '/contact';
    return new Promise(async (resolve, reject) => {
      try {
        let response = await axios.post(BASEUrl + api, data)
        resolve(response.data);
      } catch (error) {
        reject(error.response)
      }
    })
  }
}

export default Contact;