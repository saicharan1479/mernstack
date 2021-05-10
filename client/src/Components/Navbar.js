import React from 'react';
import './Navbar.css';
import logo from '../logo.jpeg';
import {Link } from 'react-router-dom';


const Navbar=() => {
    return(
        <>
        
		       <div className="container-fluid nav_bg">
            <div className='row'>
                <div className="col-10 mx-auto">
        <nav className="navbar navbar-expand-lg navbar-light  ">
            <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img src={logo} className="navbar-logo" alt=" "/><strong>lsdairy products</strong></Link>
        <button className="navbar-toggler" 
        type="button"
          data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item ">
                <Link  activeClassName='menu_active' exact
                className="nav-link active" aria-current='page'
                to="/">Home</Link>
            </li>
           <li className="nav-item">
                <Link activeClassName='menu_active'
                className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
                <Link activeClassName='menu_active'
                className="nav-link" to="About">About</Link>
            </li>
            <li className="nav-item">
                <Link activeClassName='menu_active'
                className="nav-link" to="/gallery">Gallery</Link>
            </li>
          
            <li className="nav-item">
                <Link activeClassName='menu_active'
                className="nav-link" to="/contact">Contact </Link>
            </li>
           
          
             </ul>
           </div>
            </div>
            </nav>
        </div>
    </div>
  </div>

        </>
    );
};

export default Navbar;