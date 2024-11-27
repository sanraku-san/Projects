import React from "react";
import image1 from '../media/image1.png';
import image2 from '../media/image2.png';
import image3 from '../media/image3.png';
import '../styles/servicespage.css';

const AvailableServices = () => {
    return (
        <>
            <div className="services-container">
                <div className="services-header">
                    <h1>Available Services</h1>
                </div>
                <div className="container">
                    <div className="service-item">
                        <div className="service-text">Teeth Whitening</div>
                        <img src={image1} alt="Service 1" className="service-image" />
                    </div>
                    <div className="service-item">
                        <div className="service-text">Braces</div>
                        <img src={image2} alt="Service 2" className="service-image" />
                    </div>
                    <div className="service-item">
                        <div className="service-text">Check Up</div>
                        <img src={image3} alt="Service 3" className="service-image" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AvailableServices;