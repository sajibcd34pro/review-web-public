import React from 'react';
import error from '../../images/error.png';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className="text-center">
            <img src={error} alt="" />
            <h1 className="text-danger">Page Not Found!</h1>
            <p>Please try searching for some other page.</p>
        </div>
    );
};

export default NotFound;