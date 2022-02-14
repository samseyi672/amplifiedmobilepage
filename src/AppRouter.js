import React from 'react';
import {BrowserRouter,Route,Link, Routes} from 'react-router-dom' ;
import App from  './App'
import Header from './components/Header';
import ImageDetails from './components/ImageDetails';
import FormSubscription from  './components/FormSubscription' ;

class  AppRouter extends React.Component{
  render(){ 
  return (
    <BrowserRouter>
    {/* always vislble */}
    <Header/>
    <Routes>
    <Route path="/" exact element={<App/>} /> 
    <Route path="/details/:id" element={<ImageDetails/>} /> 
     <Route path="/subscribe" element={<FormSubscription/>} />  
    </Routes>
   </BrowserRouter>
    ) ;
}

}
export default AppRouter ;
























