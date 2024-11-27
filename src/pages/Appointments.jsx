import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/appointmentpage.css';
import PatientsList from "../components/PatientsList";
import AppointmentModal from "../Modals/Appointmentmodal";

const Appointments = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [patients, setPatients] = useState([]);
  const [currentAppointment, setCurrentAppointment] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setCurrentAppointment(null);
    setIsEditMode(false);
  };

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

  const handleAddAppointment = async (appointmentData) => {
    try {
      const response = await axios.post('http://localhost:8000/api/appointments/', appointmentData);
      setPatients((prevPatients) => [...prevPatients, response.data]);
      handleCloseModal();
    } catch (error) {
      console.error('Error adding appointment:', error.response ? error.response.data : error.message);
    }
  };

  const handleEditAppointment = (appointment) => {
    setCurrentAppointment(appointment);
    setIsEditMode(true);
    handleOpenModal();
  };

  const handleUpdateAppointment = async (updatedAppointment) => {
    try {
      const response = await axios.put(`http://localhost:8000/api/appointments/${updatedAppointment.id}/`, updatedAppointment);
      setPatients((prevPatients) =>
        prevPatients.map((appointment) =>
          appointment.id === updatedAppointment.id ? response.data : appointment
        )
      );
      handleCloseModal();
    } catch (error) {
      console.error('Error updating appointment:', error.response ? error.response.data : error.message);
    }
  };

  const handleDeleteAppointment = async (appointmentId) => {
    try {
      await axios.delete(`http://localhost:8000/api/appointments/${appointmentId}/`);
      setPatients((prevPatients) => prevPatients.filter((appointment) => appointment.id !== appointmentId));
    } catch (error) {
      console.error('Error deleting appointment:', error);
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
              onAddAppointment={handleAddAppointment}
              onUpdateAppointment={handleUpdateAppointment}
              currentAppointment={currentAppointment}
              isEditMode={isEditMode}
            />
          )}
        </div>
      </div>
      <div className="list">
        <PatientsList patients={patients} onEdit={handleEditAppointment} onDelete={handleDeleteAppointment} />
      </div>
    </div>
  );
};

export default Appointments;

