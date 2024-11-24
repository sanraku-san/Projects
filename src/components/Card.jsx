// src/components/Card.js
import React from "react";
import { Link } from "react-router-dom";
import { FaUserDoctor, FaRegCalendarCheck, FaPersonCirclePlus } from "react-icons/fa6";
import '../styles/content.css';

const anotherNav = [
    {
        title: 'Appointments',
        icon: <FaRegCalendarCheck />,
        path: '/Appointments'
    },
    {
        title: 'New patients',
        icon: <FaPersonCirclePlus />,
        path: '/new-patients'
    },
    {
        title: 'Available Services',
        icon: <FaUserDoctor />,
        path: '/available-services'
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