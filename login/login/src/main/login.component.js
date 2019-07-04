import React,{Component} from "react";
import './login.style.scss';
import { withRouter } from 'react-router-dom';

class Login extends Component{
handle = () => {
  this.props.history.push('/domain');
{/* <Redirect to="/domain" /> */}
};


render(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <form>
                        <h1>Login Form</h1>
                        <div className="form-group">
                            <label >User Name</label><br></br>
                            
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="user name"/>
                        </div>
                        <div className="form-group">
                            <label >Password</label><br></br>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>  
                        <button  onClick={this.handle}>Submit</button>
                    </form>
                </div>
            </div>     
        </div>
    )
}
}

export default Login;