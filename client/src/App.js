import React from 'react';
import { Switch ,Route ,Redirect } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Products from './Components/Products';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';

const App=()=> {
  return (
    <>
      <Navbar />
      <Switch>
      <Route exact path="/" component ={Home} />
      <Route exact path="/about" component ={About} />
      <Route exact path="/products" component ={Products} />
      <Route exact path="/contact" component ={Contact} />
      <Route exact path="/gallery" component ={Gallery} />
      <Redirect to='/' />
      <Home />
      </Switch>
      <Footer />
    </>

  );
}

export default App;
