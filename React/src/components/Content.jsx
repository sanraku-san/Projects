import React from "react";
import ContentHeader from "./ContentHeader";
import Card from "./Card";
// import PatientsList from "./Patientslist";
const Content = ()=>{
    return(
        <div className="content">
            <ContentHeader />
            <Card />
            {/* <PatientsList/> */}
            </div>
    );
}
export default Content;