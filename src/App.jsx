import React from "react";
import Sidebar from './components/Sidebar';
import Content from "./components/Content";
import Profile from "./components/Profile";
import './App.css';
import AppointmentModal from "./Modals/Appointmentmodal";
import Appointments from "./pages/Appointments";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="dashboard">
        <Sidebar />
        <div className="dashboard-content">
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/Appointments" element={<Appointments />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;