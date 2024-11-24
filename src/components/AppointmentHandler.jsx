// import React, { useState } from 'react';
// import AppointmentModal from './AppointmentModal'; 
// import PatientsList from './PatientsList';
// const App = () => {
//   const [patients, setPatients] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleAddAppointment = (appointmentData) => {
//     setPatients([...patients, appointmentData]);
//   };

//   return (
//     <div>
//       {isModalOpen && (
//         <AppointmentModal 
//           onClose={() => setIsModalOpen(false)} 
//           onAddAppointment={handleAddAppointment} 
//         />
//       )}
//       <PatientsList patients={patients} />
//     </div>
//   );
// };

// export default App;