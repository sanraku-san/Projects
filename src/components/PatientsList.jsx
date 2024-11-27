import React from "react";
import '../styles/patientlist.css';

const PatientsList = ({ patients = [], onEdit, onDelete }) => { 
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this appointment?");
    if (confirmDelete) {
      onDelete(id);
    }
  };

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
              <th>Purpose</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.length > 0 ? (
              patients.map((patient) => (
                <tr key={patient.id}>
                  <td>{patient.name}</td>
                  <td>{patient.date}</td>
                  <td>{patient.time}</td>
                  <td>{patient.description}</td>
                  <td>
                    <button onClick={() => onEdit(patient)}>Edit</button>
                    <button onClick={() => handleDelete(patient.id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No appointments scheduled.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PatientsList;
