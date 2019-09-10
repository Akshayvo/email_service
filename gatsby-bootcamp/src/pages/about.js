import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const AboutPage = () =>{
    return(
        <Layout>
            <h1>About Us</h1>
            <p>This is our about us page</p>
            <Link to="/contact">Contact Us</Link>
        </Layout>
        
    )
}

export default AboutPage