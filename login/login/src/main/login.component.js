import React,{Component} from "react";
import './login.style.scss';
import { withRouter } from 'react-router-dom';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            items:[],
            // isLoaded: false,
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => {
            this.setState({
                // isLoaded: true,
                items: json,
            })
        })
    }
handle = () => {
var { isLoaded,items } = this.state;
  this.props.history.push('/domain');
    {items.map(item =>(
    <li key={item.id}>
        {item.name}
    </li>
))}
{/* <Redirect to="/domain" /> */}
};


render(){
    var { isLoaded,items } = this.state;
    // if (!isLoaded) {
    //     return <div> Loading...</div>
    // }
    // else {
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
                        <ul>
                            {items.map(item =>(
                                <li key={item.id}>
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </form>
                </div>
            </div>     
        </div>
    )
    // }
}
}

export default Login;