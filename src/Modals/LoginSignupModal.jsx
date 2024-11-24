import React, { useState } from 'react';
import './Logpopupmodal.css'; // Import your CSS file for styling

const LoginSignupModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
          <form>
            <input type="text" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            {!isLogin && <input type="password" placeholder="Confirm Password" required />}
            <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
          </form>
          <p onClick={toggleForm}>
            {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
          </p>
        </div>
      </div>
    )
  );
};

const LogModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Login</button>
      <LoginSignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default LogModal;