import React from 'react';
import Header from '../components/header/header.component';
import Footer from './footer';
// import '../styles/index.scss'
import './layout.style.scss';

const Layout = (props) => {
    return(
      <div className="container">  
        <div className="content">
            <Header />
                {props.children}
        </div> 
        <div>       
            <Footer />
        </div>
      </div>  
    )
}

export default Layout