  
import axios from 'axios'
import jwt from 'jsonwebtoken'
const BASEUrl = 'https://www.zimbojobs.com';

class Jobs{
  static getUsers(){
    let api = '/wp-json/custom/v1/all-posts';
    return new Promise(async (resolve, reject) => {
      try {
        var response = await axios.get(BASEUrl + api)
        resolve(response.data);
      } catch (error) {
        reject(error)
      }
    })
  }

  static correctsData(jobs){
    let index;
    let returnJobs = []
    for(index in jobs){
      let description = jobs[index].description.replace(/\r\n\r\n/g,"\r\n");
      description = description.replace(/<li>/g,"");
      description = description.replace(/<li>/g,"\r\n");
      while(description.includes('<'))
      description = this.removesHTML(description);
      returnJobs.push({
        'date_published': jobs[index].date_published,
        'description': description,
        'featured_img_src': jobs[index].featured_img_src,
        'id': jobs[index].id,
        'slug': jobs[index].slug,
        'title': jobs[index].title,
        'type': jobs[index].type
      })
    }

    returnJobs.sort(function(a,b){
      return new Date(b.date_published) - new Date(a.date_published);
    });
    return returnJobs.slice(0, 3);
  }

  static removesHTML(value){
    let substring = value.slice(value.indexOf('<') , value.indexOf('>') + 1);
    return value.replace(substring, '');
  }
}

export default Jobs;