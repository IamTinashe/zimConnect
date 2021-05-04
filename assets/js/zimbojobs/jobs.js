  
import axios from 'axios'
const BASEUrl = 'https://www.zimbojobs.com';

class Jobs{
  static getJobs(){
    let api = '/wp-json/custom/v1/all-posts';
    return new Promise(async (resolve, reject) => {
      try {
        let response = await axios.get(BASEUrl + api)
        resolve(response.data);
      } catch (error) {
        reject(error)
      }
    })
  }

  static correctsData(jobs, count){
    let index, returnJobs = [];
    for(index in jobs){
      returnJobs.push({
        'date_published': jobs[index].date_published,
        'description': this.removesChars(jobs[index]),
        'featured_img_src': this.addsImage(jobs[index].featured_img_src),
        'id': jobs[index].id,
        'slug': jobs[index].slug,
        'title': jobs[index].title,
        'type': jobs[index].type
      })
    }
    return this.sortArrayByDate(returnJobs).slice(0, count);
  }

  static addsImage(imageUrl){
    let images = [
      '/images/young-writer-taking-notes.jpg',
      '/images/lady-typing.jpg',
      '/images/man-hand-typing-keyboard-input-code-register-system.jpg',
      '/images/smiling-woman-potrait.jpg'
    ];
    return (imageUrl == null) ? images[Math.floor(Math.random() * 4)] : imageUrl;
  }

  static removesChars(job){
    let description = job.description.replace(/\r\n\r\n/g,"\r\n");
    description = description.replace(/<li>/g,"");
    description = description.replace(/<li>/g,"\r\n");
    while(description.includes('<'))
      description = this.removesHTML(description);
    
    return this.sliceString(description);
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

  static sliceString(value){
    if(value.length > 280){
      if((value.match(/\n/g) || []).length >= 7){
        let str = value , delimiter = '\n', start = 7, tokens = str.split(delimiter).slice(start), result = tokens.join(delimiter);
        return value.replace(result, '');
      } else return value.slice(0 , 280);
    }else return value;
  }
}

export default Jobs;