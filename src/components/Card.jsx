import React from "react";
import { FaUserDoctor,FaRegCalendarCheck,FaPersonCirclePlus  } from "react-icons/fa6";
import '../styles/content.css'

const anotherNav = [
    {
        title:'Appointments',
        icon:<FaRegCalendarCheck />
    },
    {
        title:'New patients',
        icon: <FaPersonCirclePlus />
    },
    {
        title:'Available Treatments',
        icon:<FaUserDoctor />
    },
]
const Card = ()=>{
    return(
        <div className="card-container">
            {anotherNav.map((item)=> ( 
                <div className="card">
                    <div className="card-cover">{item.icon}</div>
                    <div className="card-title">
                        <h2>{item.title}</h2>
                    </div>
                </div>))}
        </div>
    );
}
export default Card;