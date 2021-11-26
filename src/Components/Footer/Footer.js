import React from "react";
import "./Footer.css";
import footerLogo from '../../images/thumb.png';

const Footer = () => {
    
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <div className="left-container text-center">
                               
                                <div className="icons-container d-flex text-center ">
                                    <div className="icon">
                                        <i class="fa fa-instagram" aria-hidden="true"></i>
                                    </div>
                                    <div className="icon">
                                        <i class="fa fa-twitter" aria-hidden="true"></i>
                                    </div>
                                    <div className="icon">
                                        <i class="fa fa-youtube" aria-hidden="true"></i>
                                    </div>
                                    <div className="icon">
                                        <i class="fa fa-facebook" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="container">
                                    <img style={{ margin: '0 auto' }} className="d-block" src={footerLogo} alt="" />
                                    <h1 className="mt-5">
                                        Feeling in love? Purchase Our Course !

                                    </h1>
                                    <p className="text-center">Impressive design, powerful features, and easy customization</p>
                                    <p className="mt-5">
                                        <small>© . All rights reserved.</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default Footer;
