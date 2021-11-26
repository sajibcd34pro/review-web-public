import React from 'react';

import web from '../../images/hero.png';

import Feature from '../Feature/Feature';
import Footer from '../Footer/Footer';
// import Footer from '../Footer/Footer';

import Service from '../Services/Service';
import './Home.css';

const Home = () => {
    return (
        <>
            <div className="my-5">
                <div className="contianer-fluid d-flex align-items-center ">
                   
                        <div className="container">
                        <div className="row  ">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                                <h1>
                                    <strong>FreeCourseBD</strong>
                                    - Learn without Limits
                                </h1>
                                <h5 className="my3">
                                    Thinking about a new career?
                                </h5>
                                <p>Build entry-level career skills with Professional Certificates from top companies.
                                </p>
                                <div className="mt-3">
                                    <a href="#service" className="btn btn-outline-dark button-f "> Explore Courses</a>
                                </div>
                            </div>
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <img src={web} className="img-fluid" alt="" />
                                </div>
                            </div>
                        
                        </div>
                   
                </div>
                <Service></Service>
                <Feature></Feature>
                <Footer></Footer>
                
            </div>
        </>
    );
};

export default Home;