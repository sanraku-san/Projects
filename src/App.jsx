import React from "react";
import Sidebar from './components/Sidebar';
import Content from "./components/Content";
import Profile from "./components/Profile";
import './App.css';
import Appointments from "./pages/Appointments";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AvailableServices from "./pages/AvailableServices";

const App = () => {
  return (
    <BrowserRouter>
      <div className="dashboard">
        <Sidebar />
        <div className="dashboard-content">
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/Appointments" element={<Appointments />} />
            <Route path="/Available-services" element={<AvailableServices />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;