import React from 'react'
import './Gallery.css';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import milk from '../images/milk.jpg';
import curd2 from '../images/curd2.jpg';
import flavouredmilk from '../images/flavouredmilk.jpg';
import lassi from '../images/lassi.jpg';
import img3 from '../images/img3.jpeg';
import img4 from '../images/img4.jpeg';
import img5 from '../images/img5.jpeg';
import img6 from '../images/img6.jpeg';


 const Gallery = () => {
    return (
        <>
             <section id="gallery" className="bg-gallery no-padding">
        <div className="container-fluid">
            <h3 className="text-center">Gallery</h3>
            
            <div className="row no-gutter gallery slideanim"> 
                
                <div className="col-sm-4 portfolio-item">
                    <a href="" className="portfolio-link">
                        <div className="caption">
                            <div className="caption-content">
                                <i className="fa fa-instagram fa-3x"></i>
                            </div>
                        </div>
                        <img src={img1} className="img-fluid " alt="" />     
                    </a>
                </div>
                <div className="col-sm-4 portfolio-item">
                    <a href="" className="portfolio-link">
                        <div className="caption">
                            <div className="caption-content">
                                <i className="fa fa-instagram fa-3x"></i>
                            </div>
                        </div>
                        <img src={img2} className="img-fluid" alt="" />
                    </a>
                </div>
                <div className="col-sm-4 portfolio-item">
                    <a href="" className="portfolio-link">
                        <div className="caption">
                            <div className="caption-content">
                                <i className="fa fa-instagram fa-3x"></i>
                            </div>
                        </div>
                        <img src={milk} className="img-fluid" alt="" />
                    </a>
                </div>
                <div className="col-sm-4 portfolio-item">
                    <a href="" className="portfolio-link">
                        <div className="caption">
                            <div className="caption-content">
                                <i className="fa fa-instagram fa-3x"></i>
                            </div>
                        </div>
                        <img src={curd2} className="img-fluid" alt="" />
                    </a>
                </div>
                <div className="col-sm-4 portfolio-item">
                    <a href="" className="portfolio-link">
                        <div className="caption">
                            <div className="caption-content">
                                <i className="fa fa-instagram fa-3x"></i>
                            </div>
                        </div>
                        <img src={lassi} className="img-fluid" alt="" />
                    </a>
                </div>
                <div className="col-sm-4 portfolio-item">
                    <a href="" className="portfolio-link">
                        <div className="caption">
                            <div className="caption-content">
                                <i className="fa fa-instagram fa-3x"></i>
                            </div>
                        </div>
                        <img src={flavouredmilk} className="img-fluid" alt="" />
                    </a>
                </div>
                <div className="col-sm-4 portfolio-item">
                    <a href="" className="portfolio-link">
                        <div className="caption">
                            <div className="caption-content">
                                <i className="fa fa-instagram fa-3x"></i>
                            </div>
                        </div>
                        <img src={img3} className="img-fluid" alt="" />
                    </a>
                </div>
                <div className="col-sm-4 portfolio-item">
                    <a href="" className="portfolio-link">
                        <div className="caption">
                            <div className="caption-content">
                                <i className="fa fa-instagram fa-3x"></i>
                            </div>
                        </div>
                        <img src={img4} className="img-fluid" alt="" />
                    </a>
                </div>
                <div className="col-sm-4 portfolio-item">
                    <a href="" className="portfolio-link">
                        <div className="caption">
                            <div className="caption-content">
                                <i className="fa fa-instagram fa-3x"></i>
                            </div>
                        </div>
                        <img src={img5} className="img-fluid" alt="" />
                    </a>
                </div>
                <div className="col-sm-4 portfolio-item">
                    <a href="" className="portfolio-link">
                        <div className="caption">
                            <div className="caption-content">
                                <i className="fa fa-instagram fa-3x"></i>
                            </div>
                        </div>
                        <img src={img6} className="img-fluid" alt="" />
                    </a>
                </div>
            </div>
        
            <div className="row more-img">
                 <div className="to-gallery">
                        <h4>For more info follow us on</h4>
                        <div className="social-networks">
                            <a href="https://www.instagram.com" target="_blank" className="instagram"><i className="fa fa-instagram"></i></a>
                            <a href="https://www.facebook.com" target="_blank" className="facebook"><i className="fa fa-facebook"></i></a>
                        </div>
                    </div>
                
            </div>

        </div>
    </section>
        </>
    );
};


export default Gallery;

