// src/components/Card.js
import React from "react";
import { Link } from "react-router-dom";
import { FaUserDoctor, FaRegCalendarCheck } from "react-icons/fa6";
import { FcAbout } from "react-icons/fc";
import '../styles/content.css';

const anotherNav = [
    {
        title: 'Appointments',
        icon: <FaRegCalendarCheck />,
        path: '/Appointments'
    },
    {
        title: 'Available Services',
        icon: <FaUserDoctor />,
        path: '/Available-services'
    },
    {
        title: 'About',
        icon: <FcAbout/>,
        path: '/About'
    },
    
];

const Card = () => {
    return (
        <div className="card-container">
            {anotherNav.map((item) => (
                <Link to={item.path} key={item.title} className="card">
                    <div className="card-cover">{item.icon}</div>
                    <div className="card-title">
                        <h2>{item.title}</h2>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Card;