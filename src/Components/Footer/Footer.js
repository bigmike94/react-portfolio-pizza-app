import React from 'react';
import './footer.css';

function Footer () {
        return (
            <footer className="container-fluid">
               <div className="row text-center">
                    <div className="col-md-2">
                        <span className="footer-nav-element">&copy;BEST PIZZA</span>
                    </div>
                    <div className="col-md-7 d-flex justify-content-center">
                        <a href="/" className="soc-link">
                            <i className="fa fa-facebook-official"></i>
                        </a>
                        <a href="/" className="soc-link">
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a href="/" className="soc-link">
                            <i className="fa fa-youtube-square"></i>
                        </a>
                    </div>
                    <div className="col-md-3">
                        <span className="footer-nav-element">SITE BY MISHA KIRICHENKO</span>
                    </div>
               </div>
            </footer>
        )
}
export default Footer;