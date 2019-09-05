import React from "react"
import  Link from "gatsby-link"
import { Main } from '../components/header/header.componennt'

// import Layout from "../components/layout"



const IndexPage = () => (
  // <Layout>
  //   <SEO title="Home" />
  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     <Image />
  //   </div>
  //   <Link to="/page-2/">Go to page 2</Link>
  // </Layout>
  // <nav className=" navbar ">
  //   <div className=" container">
  //     <div className="row">
  //       <div className="col-3">
  //         <h1>Hi Gatsby</h1>
  //       </div>
  //       <div className="col-9">
  //         <Link to="/page-2">Home</Link>
  //         <Link to="/page-2">Home</Link>
  //       </div>
  //     </div>     
  //   </div>    
  // </nav>
      <Main/>
      );
{/* <nav className="navbar navbar-expand-lg navbar-default bg-navbg py-0 bg-dark">
  <div className="container">
    <div className="navbar-header">
      <a className="navbar-brand" href="/">
        <img src="https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Catskill_Images/logo.png"width="160" height="61"/>
          </a>
    </div>
    <ul class="nav navbar-nav">
          <li><Link to="/header">Home</Link></li>
          <Link to="/page-2">Home</Link>
    </ul>
  </div>
</nav>
  ) */}


export default IndexPage
