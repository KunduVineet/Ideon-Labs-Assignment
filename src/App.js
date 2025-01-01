import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Appointment from './components/Appointment';
import DateSelection from './components/DateSelection';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Appointment />} />
        <Route path="/date-selection" element={<DateSelection />} />
      </Routes>
    </Router>
  );
};

export default App;
