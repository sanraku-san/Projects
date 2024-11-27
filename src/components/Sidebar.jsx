import React from "react";
import { BiHome,BiTask,BiPlusMedical,BiDollar } from "react-icons/bi";
import { FaTooth} from "react-icons/fa6";
import { FcAbout } from "react-icons/fc";
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
                    <Link to={'/Available-services'} className="item">
                    <BiPlusMedical className="icon" />
                    Available Services
                    </Link>
                    <Link to={'/About'}className="item">
                    <FcAbout  className="icon"/>
                   About
                    </Link>
                </div>
        </div>
    );
}  
export default Sidebar; 
