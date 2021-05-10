import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <>
        <footer className="-bg-footer" id="footer">
                <div className="container-fluid">
                    <div className="row footer-align">
                        <div className="col-md-4 col-sm-4">
                            <h5  className="text-center">Location</h5>
                            <hr className="hr-foot"></hr>
                            <div className="footer-items">
                                <p className="footer">
                                   Our LS Dairy Products is located in 5 different places and out of it Hyderbad is the main place where every operation is done. 
                                </p>
                                <ul className="social-networks">
                                    <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                                    <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <h5  className="text-center">Our contact</h5>
                            <hr className="hr-foot"></hr>
                            <div className="footer-items">
                                <address>
                                        #S1 Siddhartha Castle New Nallakunta
                                        <br></br>
                                        Hyderabad 500-045
                                        <br></br>
                                        <i className="fa fa-phone address"></i> 7799291899 
                                        <br></br>
                                        <i className="fa fa-phone address"></i> 7799137899
                                        <br></br>
                                        <i className="fa fa-envelope address"></i> <a to="lsdairyproductspvtltd@gmail.com">lsdairyproductspvtltd@gmail.com</a>
                                </address>
                            </div>
                        </div>
                            <div className="col-md-4 col-sm-4">
                                 <h5 className="text-center" >Open hours</h5>
                                <hr className="hr-foot"></hr>
                                <div className="footer-items">
                                    <ul>
                                        <li>Mon-Fri: 08:00-22:00</li>
                                        <li>Sat    : 09:00-22:00</li>
                                        <li>Sun    : 09:00-16:00</li> 
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <a className="to-top" href="#myPage" title="toTop">
                        <i className="fa fa-chevron-up"></i>
                    </a>
                </footer>

                <div className="footer-copyright">
                <p>@ All rights reserved | Devoloped by Jack n Jill Solutions Pvt Ltd.</p>
  
                </div>



        </>
    );
};

export default Footer;
