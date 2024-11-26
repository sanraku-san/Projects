import React, { useState } from 'react';
import './appointmentmodal.css';

const AppointmentModal = ({ onClose, onAddAppointment }) => {
  const [appointmentData, setAppointmentData] = useState({
    name: '',
    date: '',
    time: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const normalizedValue = name === 'description' ? value.toLowerCase() : value;
    setAppointmentData({ ...appointmentData, [name]: normalizedValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting Appointment Data:', appointmentData);
    onAddAppointment(appointmentData);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Set Appointment</h2>
        <form onSubmit={handleSubmit} className='form'>
          <label>
            Name:
            <input type="text" name="name" value={appointmentData.name} onChange={handleChange} required />
          </label>
          <label>
            Date:
            <input type="date" name="date" value={appointmentData.date} onChange={handleChange} required />
          </label>
          <label>
            Time:
            <input type="time" name="time" value={appointmentData.time} onChange={handleChange} required />
          </label>
          <label>
            Purpose:
            <select name="description" value={appointmentData.description} onChange={handleChange} required>
              <option value="">Select a description</option>
              <option value="consultation">Consultation</option>
              <option value="follow_up">Follow-up</option>
              <option value="check_up">Check-up</option>
              <option value="other">Other</option>
            </select>
          </label>
          <button type="submit">Submit</button>
          <button type="button" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;
