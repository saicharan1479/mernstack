import React from 'react';
import milk from '../images/milk.jpg';
import curd2 from '../images/curd2.jpg';
import ghee from '../images/ghee.jpg';
import flavouredmilk from '../images/flavouredmilk.jpg';
import lassi from '../images/lassi.jpg';
import buttermilk from '../images/buttermilk.jpg';

const Products=() => {
    return(
        <>
           <div className="my-5">
        <h3 className="text-center"><strong>Our Products</strong></h3>
        </div>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                    <div className="col-md-4 col-10 mx-auto">
                    <div className="card">
                    <img src={milk} className="card-img-top" alt="" />
                    <div className="card-body">
                    <h5 className="card-title">Milk</h5>
                    <p className="card-text">We promise EVER Fresh Best Quality Milk to supply right from Farm to your Home.</p>
                   
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                    <div className="card">
                    <img src={curd2} className="card-img-top" alt="" />
                    <div className="card-body">
                    <h5 className="card-title">Curd</h5>
                    <p className="card-text">We promise EVER Fresh Best Quality Milk to supply right from Farm to your Home.</p>
                   
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                    <div className="card">
                    <img src={ghee} className="card-img-top" alt="" />
                    <div className="card-body">
                    <h5 className="card-title">Ghee</h5>
                    <p className="card-text">We promise EVER Fresh Best Quality Milk to supply right from Farm to your Home.</p>
                   
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                    <div className="card">
                    <img src={flavouredmilk}className="card-img-top" alt="" />
                    <div className="card-body">
                    <h5 className="card-title">Flavoured Milk</h5>
                    <p className="card-text">We promise EVER Fresh Best Quality Milk to supply right from Farm to your Home.</p>
                   
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                    <div className="card">
                    <img src={lassi}className="card-img-top" alt="" />
                    <div className="card-body">
                    <h5 className="card-title">Lassi</h5>
                    <p className="card-text">We promise EVER Fresh Best Quality Milk to supply right from Farm to your Home.</p>
                   
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                    <div className="card">
                    <img src={buttermilk}className="card-img-top" alt="" />
                    <div className="card-body">
                    <h5 className="card-title">Butter Milk</h5>
                    <p className="card-text">We promise EVER Fresh Best Quality Milk to supply right from Farm to your Home.</p>
                   
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
   

        </>
    );
};

export default Products;