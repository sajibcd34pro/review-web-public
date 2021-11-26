import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './service.css';
const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    },[])
    return (
        <>
            <div id="service">
                <div className="my-5">
                    <h1 className="text-center">Our service & Courses</h1>
                </div>
                <div className="service ">
                    <div>
                        <div className="container">
                            <div className="">
                                <div className="card-grid">

                                    {
                                        services.map(service =>

                                            <Card service={service}
                                                key={service.key}
                                            ></Card>

                                        )
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;