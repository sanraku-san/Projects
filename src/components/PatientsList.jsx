import React from "react";
import '../styles/patientlist.css'
const patients = [
    {
        name:'MCDonalds',
        date:'june 34, 2030',
        time:'11:96 pm - 1:00 am',
    },
    {
        name:'MCDonalds',
        date:'june 34, 2030',
        time:'11:96 pm - 1:00 am',
    },
    {
        name:'MCDonalds',
        date:'june 34, 2030',
        time:'11:96 pm - 1:00 am',
    }, {
        name:'MCDonalds',
        date:'june 34, 2030',
        time:'11:96 pm - 1:00 am',
    },
    {
        name:'MCDonalds',
        date:'june 34, 2030',
        time:'11:96 pm - 1:00 am',
    },
];
const PatientsList = () => {
    return (
        <div className="patient-list">
            <div className="list-header">
                <h2>Patients</h2>
            </div>
            <div className="list-container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient) => (
                            <tr key={patient.id}> 
                                <td>{patient.name}</td>
                                <td>{patient.date}</td>
                                <td>{patient.time}</td>
                                <td className="patient-treatment">{patient.treatment}</td> 
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PatientsList;    