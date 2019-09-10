import React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/layout';


const Indexpage = () => {
    return(
       <Layout>
           <h1>Hello Gatsby</h1> 
            <p> Neeed a Developer?<Link to="/contact">contact me</Link></p>
       </Layout>
    )
}

export default Indexpage