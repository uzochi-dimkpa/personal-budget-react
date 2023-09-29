import React from 'react';

function Footer() {
  return (
    // <div>
    //   Footer
    // </div>
    <footer className="bottom">
        <div className="center">
            All rights reserved &copy; Fabio Nolasco
        </div>
        <br></br>
        {/* <!-- This is an A11y Change --> */}
        <div className="center">
            {/* <button class="button button1" style="color:white; height:88px;" onclick="window.location.href='#top'">
                <h2>
                    Go to top of page
                </h2>
            </button> */}
        </div>
    </footer>
  );
}

export default Footer;
