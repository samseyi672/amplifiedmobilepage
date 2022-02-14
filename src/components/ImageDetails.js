import { useParams } from "react-router-dom" ;
import voca from 'voca' ;

 const ImageDetails  = () => {
    const { id } = useParams();
    console.log(id) ;
    const data =   JSON.parse(localStorage.getItem('key')) ;
    var searchObj  = null;
   data.forEach(element=>{
      if(parseInt(element.id)===parseInt(id)){
          searchObj  = element ;
          return searchObj ;
      }
       }) ;
   let parser = new DOMParser();
   //parse the content since it iis an xml and  get it converted to html
    let xmlDoc = parser.parseFromString(searchObj.content,"text/html");
   let values  = Array.from(xmlDoc.getElementsByTagName("p"));
   let htmlparagraph= values.map(p=>{
    // console.log(p.innerHTML) ;
     return p.innerHTML ;
       });
    console.log("content ",htmlparagraph) ;
    // console.log(" links  ",links) ;
    return (
        <div className="container">
        <div className="card" style={{width:'18rem'}}>
        <img className="card-img-top" src={searchObj.url} alt="Card image cap"/>
        <div className="card-body">
         <h5 className="card-title">{searchObj.title!==undefined?searchObj.title:""}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{searchObj.pubDate!==undefined?searchObj.pubDate:""}</h6>
          <p className="card-text">{searchObj.content!==undefined?voca.stripTags(htmlparagraph[0]):""}</p>
        </div>
      </div>
      </div>
    );
    }

export default ImageDetails ;


















































































