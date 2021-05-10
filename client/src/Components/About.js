import React from 'react';
import './About.css';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
//import {Link, Redirect} from 'react-router-dom';

const About=() => {
    return(
        <>
                        



        <section className="bg-about bg-section" id="about">
                        <h3 className="text-center"> What we are</h3>
                        <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-5">
                                    <div className="hov-img">
                                        <img src={img1} alt=" " className="hov-img-bottom img-fluid" />
                                        <div className="hov-img-top hov-img-slideup">
                                            <div className="hov-img-text">
                                                <h5>Warm welcome</h5>
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>            

                            

                        </div>

                        <div className="col-sm-7">
                        <div className="row">
                                <div className="restaurant-history slideanim text-center">
                                    <h3 className="section-heading">LS Dairy Products</h3>
                                    <p className="about-history first"> <h4>
                                    we are one of the leading Private Dairy Players in India with a chilling Capacity of 1lakh liters per day.
                                    We process the capacity of 1 lakh liters per day and packaging capacity of 50 liters 
                                    per day,by deeply commiting ourselves to innovation and to providing authentic high quality milk products we have grown a multifold
                                    to occupy a sizeable1 share in India's Dairy Market. We process and market a fullline of dairy products including fresh Milk,Curd,Buttermilk,flavouredmilk,ghee,lassi. <br></br>
                                                  We are providing our services in different locations <br></br>Our main HeadQuarters is IN HYDERABAD<br></br>
                                                  Our Branches are in Andhra Pradesh ,Telengana ,Karnataka, and TamilNadu</h4>
                                    </p>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                   
                                 </div>
                            </div>
                 </div>
                 
             </div>
             </div>
             </section>
        </>
    );
};

export default About;