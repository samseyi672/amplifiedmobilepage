import React from 'react';
import voca from  'voca' ;
import Popup from 'reactjs-popup';
import {Link} from 'react-router-dom' ;
import 'reactjs-popup/dist/index.css';
class ImageCard extends React.Component {

     POSITION_TYPES = [
        'center center',
      ];
    // display image details
    DisplayImageDetails  = (props) =>{
       return(<div className="example-warper" style={{zIndex:10}}>
        {this.POSITION_TYPES.map((position, i) => (
          <Popup
            trigger={
              <button type="button" className="btn btn-primary">
               More ....
              </button>
            }
            position={position}
            on={['hover', 'focus']}
            arrow={position !== 'center center'}
          >
            {props.title!==undefined?<h5 className="card-title">{props.title}</h5>:""}
            {props.content!==undefined?<p className="card-text">{props.content}</p>:""}
          </Popup>
        ))}
      </div>
       ) ;
    }
    renderImage = ()=>{
        //destructuring the json
     const {url,pubDate,content,title,id}  =  this.props.imagecard ;
       console.log(url) ;
        const itemList = (
             <div className="col-sm-4">
                <div className="card" style={{width:"10rem"}}>
                     {/* display either image or video */}
               {(voca.endsWith(url,'jpg')||voca.endsWith(url,'jpeg'))?
            <img className="card-img-top" src={url} alt="Card image cap" onMouseOver={this.displayImageDetails} />:
                     <youtube-video width="40" height="40" src={url} autoplay controls />
                }
                    <div className="card-body">
                    {/* display either title, pubDate,content if theyare not null  */}
                      {pubDate!==undefined?<p className="card-text">{pubDate}</p>:""}
                    {/* <this.DisplayImageDetails content={content} title={title} /> */}
             <Link target={"_"}  to={`./details/${id}`} className='btn btn-primary'>More...</Link>
                    </div>
                </div>
            </div>
             );
        return itemList
    }
    render() {
       return this.renderImage();
    }
}
export default ImageCard;















































































































































