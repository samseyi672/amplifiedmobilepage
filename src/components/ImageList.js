import React from 'react';
import ImageCard from './ImageCard';
class ImageList extends React.Component{

 processImagesList=()=>{
  const images = this.props.imageresponse.map(image=>{
          // console.log(image.id) ;
        return  <ImageCard key={image.id} imagecard={image}/>
           });
            return images ;
  };
  render(){
      return(  
        <div className="row">
          {this.processImagesList()}
          </div> 
      );
  }
}

export default ImageList ;











































