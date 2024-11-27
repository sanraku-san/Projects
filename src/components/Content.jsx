import React from "react";
import ContentHeader from "./ContentHeader";
import Card from "./Card";
import PatientsList from "./PatientsList";
import Profile from "./Profile";
const Content = ()=>{
    return(
        <>
        <div className="content">
            <ContentHeader /> 
            <Card />
            {/* <PatientsList/> */}

            </div>
            <Profile/>
</>
    );
}
export default Content;