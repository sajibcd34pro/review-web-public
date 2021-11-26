import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    const {img,courseTitle, author} = props.service;
    
    return (
        <>
            <div className="card shadow">
               
                <img height="200px" className="card-image-top" src={img} alt="" />
                <h5 className="card-title"> {courseTitle} </h5>
                <p className="card-text"> by {author} </p>
                <NavLink to="/service" className="btn btn-outline-danger">Go to Course</NavLink>
            </div>
        </>
    );
};

export default Card;