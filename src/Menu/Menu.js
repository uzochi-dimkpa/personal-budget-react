import React from 'react';
import { Link } from 'react-router-dom';
// import '../index.css';

import yt_logo from '../images/yt-logo.gif';

function Menu() {
  return (
    // <div>
    //   Menu
    // </div>
    <div className="menu">
        <ul>
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="https://google.com">Google</Link></li>
            {/* <!-- This is an SEO Change --> */}
            <li><Link to="https://youtube.com" rel="nofollow">YouTube</Link></li>
            {/* <!-- This is an SEO Change --> */}
            {/* <li><img src="images/yt-logo.gif" alt="YouTube logo" style="width:40px; height:40px"></img></li> */}
            <img src={yt_logo} alt="YouTube logo" style={{width: "40px", height: "40px"}}/>
        </ul>
    </div>
  );
}

export default Menu;
