  
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
    let index, returnJobs = [];
    for(index in jobs){
      returnJobs.push({
        'date_published': jobs[index].date_published,
        'description': this.removesChars(jobs[index]),
        'featured_img_src': jobs[index].featured_img_src,
        'id': jobs[index].id,
        'slug': jobs[index].slug,
        'title': jobs[index].title,
        'type': jobs[index].type
      })
    }
    return this.sortArrayByDate(returnJobs).slice(0, 3);
  }

  static removesChars(job){
    let description = job.description.replace(/\r\n\r\n/g,"\r\n");
    description = description.replace(/<li>/g,"");
    description = description.replace(/<li>/g,"\r\n");
    while(description.includes('<'))
      description = this.removesHTML(description);
    
    return description;
  }

  static removesHTML(value){
    let substring = value.slice(value.indexOf('<') , value.indexOf('>') + 1);
    return value.replace(substring, '');
  }

  static sortArrayByDate(Array){
    return Array.sort( function (a,b) {
      return new Date(b.date_published) - new Date(a.date_published);
    });
  }
}

export default Jobs;