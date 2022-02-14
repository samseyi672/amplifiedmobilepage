import { Link } from "react-router-dom";

const Header = ()=>{
   return (
    <div style={{height:2,backgroundColor:"red"}} className="jumbotron">
     <nav class="navbar navbar-light bg-white">
    <span title="subscriube to news" class="navbar-brand mb-0 h1"><Link target="_" to="/subscribe">Subscribe</Link></span>
      </nav>
      </div>
   );
} ;

export  default Header ;


































