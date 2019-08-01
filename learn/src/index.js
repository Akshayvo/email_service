import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function MyInfo() {
    return(
        <div>
            <h1>sagar</h1>
            <p>learning React</p>
            <ul>
                <li>Hampi</li>
                <li>shimoga</li>
                <li>ballari</li>
            </ul>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));
var myNewP = document.createElement("p")
myNewP.innerHTML = "new paragraph"

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
