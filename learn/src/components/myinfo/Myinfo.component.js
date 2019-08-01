import React,{ Component} from 'react';
import './Myinfo.style.scss'

class MyInfoComponent extends Component{
    render(){
        return(
            <div>
                <input type="checkbox" />
                <p>hampi</p>
                <input type="checkbox" />
                <p>shimoga</p>
                <input type="checkbox" />
                <p>ballari</p>
            </div>
        )
    }
}
export default MyInfoComponent;