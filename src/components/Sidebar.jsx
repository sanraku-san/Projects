import React from "react";
import { BiHome,BiTask,BiPlusMedical,BiDollar } from "react-icons/bi";
import { FaTooth } from "react-icons/fa6";
import "../styles/sidebar.css"
import { Link } from "react-router-dom";

const Sidebar = ()=>{
    return(
        <div className="menu">
            <div className="logo">
                <FaTooth className="logo-icon"/>
                <h2>DAVE'S DENTAL</h2>
                </div>
                <div className="menu-list">
                    <Link to={'/'} className="item">
                        <BiHome className="icon"/>
                        Dashboard
                    </Link>
                    <Link to={'/Appointments'} className="item">
                        <BiTask className="icon"/>
                        Appointments
                    </Link>
                    <a href="#"className="item">
                    <BiPlusMedical className="icon" />
                    Patients
                    </a>
                    <a href="#"className="item">
                    <BiDollar className="icon"/>
                    Payments
                    </a>
                </div>
        </div>
    );
}  
export default Sidebar; 
