import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';

import './Feature.css';
const Feature = () => {
    const [features, SetFeatures] = useState([]);
    // console.log(features)
    useEffect(() => {
        fetch('./feature.JSON')
            .then(res => res.json())
            .then(data => SetFeatures(data))
    }, [])
    return (
        <>
            <div className="feature my-5">
                <h1 className="text-center">Our Core Features</h1>
                <p className="text-center">We Provide Impressive Freatures For your Website. You can easily manage </p>
                <p className="text-center">Your website. You will love it.</p>
            </div>
            <CardGroup className="feature-grid container">
                
                {
                    features.map(feature => <Card key={feature.key} className=" card-c">
                        <img className="mx-auto img-m d-block" src={feature.img} alt="" />
                        <div className="card-body">
                            
                            <h4 className="text-center"> {feature.title} </h4>
                        </div>
                    </Card>)
                }
                </CardGroup>
                   
                
        </>
                    );
};

                    export default Feature;