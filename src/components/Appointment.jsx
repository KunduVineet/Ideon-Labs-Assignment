import React from 'react';
import { useNavigate } from 'react-router-dom';

const Appointment = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    // Navigate to the DateSelection page
    navigate('/date-selection');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="text-black text-2xl font-bold mb-4">Appointment Booking</div>
      <div className="text-gray-700 mb-6 text-center">
        Book your 30-min Appointment Schedule
      </div>
      <div className="text-blue-500 underline cursor-pointer mb-8">
        View all Appointments →
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your Name"
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:ring focus:ring-blue-200 focus:outline-none"
        />
        <button
          onClick={handleNext}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Appointment;
