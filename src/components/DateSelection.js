import React, { useState } from 'react';

const DateSelection = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [timeSlots, setTimeSlots] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);
    generateTimeSlots(date);
  };

  const handleTimeChange = (e) => {
    const time = e.target.value;
    setSelectedTime(time);
  };

  // Function to generate time slots
  const generateTimeSlots = (date) => {
    const slots = [];
    let currentTime = new Date(date);
    currentTime.setHours(9, 0, 0, 0); // Start from 9 AM

    // Generate time slots from 9 AM to 6 PM with 30-minute intervals
    while (currentTime.getHours() < 18) {
      const timeSlot = new Date(currentTime);
      const hours = timeSlot.getHours().toString().padStart(2, '0');
      const minutes = timeSlot.getMinutes().toString().padStart(2, '0');
      slots.push(`${hours}:${minutes}`);
      currentTime.setMinutes(currentTime.getMinutes() + 30); // Increment by 30 minutes
    }

    setTimeSlots(slots);
  };

  // Function to handle the form submission or custom toast when both date and time are selected
  const handleSubmit = () => {
    if (selectedDate && selectedTime) {
      setToastMessage(`Your appointment is scheduled for ${selectedDate} at ${selectedTime}`);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
    } else {
      setToastMessage('Please select both date and time for your appointment.');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="text-black text-2xl font-bold mb-4">Select a Date and Time</div>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
          Appointment Date
        </label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:ring focus:ring-blue-200 focus:outline-none"
        />

        {selectedDate && (
          <>
            <label htmlFor="time" className="block text-gray-700 font-medium mb-2">
              Select a Time Slot
            </label>
            <select
              id="time"
              value={selectedTime}
              onChange={handleTimeChange}
              className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:ring focus:ring-blue-200 focus:outline-none"
            >
              <option value="">--Select Time--</option>
              {timeSlots.map((timeSlot, index) => (
                <option key={index} value={timeSlot}>
                  {timeSlot}
                </option>
              ))}
            </select>
          </>
        )}

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Confirm Appointment
        </button>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white py-2 px-6 rounded-lg shadow-lg">
          <div>{toastMessage}</div>
        </div>
      )}
    </div>
  );
};

export default DateSelection;
