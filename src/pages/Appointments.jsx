import React, { useState } from "react";
import '../styles/appointmentpage.css';
import PatientsList from "../components/PatientsList";
import AppointmentModal from "../Modals/Appointmentmodal";

const Appointments = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [patients, setPatients] = useState([]); // State to hold patient data

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Function to add a new appointment
  const handleAddAppointment = (appointmentData) => {
    setPatients([...patients, { ...appointmentData, id: Date.now() }]); // Add appointment data with a unique id
    handleCloseModal(); // Close the modal after adding the appointment
  };

  return (
    <div className="A_page-content">
      <div className="A_page-header">
        <h2>Patient's Schedules</h2>
        <div>
          <button onClick={handleOpenModal}>Set an Appointment</button>
          {isModalOpen && (
            <AppointmentModal 
              onClose={handleCloseModal} 
              onAddAppointment={handleAddAppointment} // Pass the function to the modal
            />
          )}
        </div>
      </div>
      <div className="list">
        <PatientsList patients={patients} /> {/* Pass the patients data to the list */}
      </div>
    </div>
  );
}

export default Appointments;