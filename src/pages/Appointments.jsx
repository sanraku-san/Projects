import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios for API calls
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

  // Fetch existing appointments from the backend
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/appointments/'); 
        setPatients(response.data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  // Function to add a new appointment
  const handleAddAppointment = async (appointmentData) => {
    try {
      const response = await axios.post('http://localhost:8000/api/appointments/', appointmentData); 
      setPatients((prevPatients) => [...prevPatients, response.data]); // Add the new appointment to the state
      handleCloseModal(); // Close the modal after adding the appointment
    } catch (error) {
      console.error('Error adding appointment:', error.response ? error.response.data : error.message);
    }
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