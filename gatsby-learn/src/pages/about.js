import React from 'react';
import {Link} from 'gatsby'
import Header from '../components/header'

export default() =>(
    <div className="container">
        {/* <Header headerText="About Gallery" arbitaryPhase="is arbitary" />
        <Header headerText="It's a pretty cool" /> */}
        <Link to="/">home</Link>
        <h1>About Gatsby</h1>
        <p>Such wow. Very React</p>
    </div>
)