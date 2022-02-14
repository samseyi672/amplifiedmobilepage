import axios from 'axios';

const baseURL  = `http://localhost:5000`; 

const ajaxconfig  =axios.create({
   baseURL:baseURL
   });

export default ajaxconfig ;