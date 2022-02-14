import React from 'react';
import Swal from 'sweetalert2' ;
class FormSubscription extends React.Component{
   
   state  = {email:"",password:""}
   doFormsubmit = (event)=>{
     event.preventDefault() ;
     Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
        ); 
       }
    render(){
    return (
        <div className="container"> 
        <form onSubmit={this.doFormsubmit}>
        <div className="form-group">
          <label>Email address</label>
          <input required type="email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} className="form-control col-sm-7" id="email" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input required value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})} type="password" className="form-control col-sm-7" id="password" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary">Click Me</button>
        </form>
      </div>
    );
}
}
export default FormSubscription;