import React from 'react';
import ImageList from './components/ImageList';
import ajaxconfig from './components/AjaxConfig';
import Header from './components/Header';

class App extends React.Component {
  state  = {images:[]}
  callPulseNews = async () => {
    var response = await ajaxconfig.get(`/api/rssnews`).then(res=>{
    this.setState({images:res.data})
    // console.log(res.data) ;
    response = res.data ;
    localStorage.setItem('key', JSON.stringify(response));
     return res.data
    });
}
componentDidMount() {
   //data loading
    const data = this.callPulseNews();
}
render(){
  return (
    <div className="App">
      <div className="container">
      <ImageList imageresponse={this.state.images}/>
      </div>
    </div>
  );
}

}
export default App;





































