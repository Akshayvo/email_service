import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
<nav className="navbar">
<div className="container">
    <div className="navbar-brand">
      <h1>Catskill</h1>
    </div>
    <div className="navbar-toggler">
      {/* <nav style={{padding:10,float:"right"}}> */}
        <Link style={{padding:10}} to="/">Home</Link>
        <Link style={{padding:10}} to="/">View Rates</Link>
        <Link style={{padding:10}} to="/">PayRent</Link>
        <Link style={{padding:10}} to="/">StorageTips</Link>
        <Link style={{padding:10}} to="/about">About</Link>
      {/* </nav> */}
    </div>
  
</div> 
</nav>  
    
)

export default IndexPage
