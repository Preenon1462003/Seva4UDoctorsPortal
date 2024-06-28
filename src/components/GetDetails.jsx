import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Custom component for time slot picker
const TimeSlotPicker = ({ selectedTime, onSelectTime }) => {
  // Mock time slots for demonstration
  const timeSlots = [
    '09:00 AM', '12:00 PM', '03:00 PM', '06:00 PM', '09:00 PM'
  ];

  return (
    <div className="space-y-3">
      <label
        className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
        htmlFor="availableTime"
      >
        Available Time
      </label>
      <div className="flex flex-wrap gap-2">
        {timeSlots.map((time, index) => (
          <button
            key={index}
            type="button" // Prevent form submission
            className={`rounded-md px-4 py-2 text-base ring-offset-background file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
              selectedTime === time ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-200'
            }`}
            onClick={() => onSelectTime(time)}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};

function GetDetails() {
  const [registration, setRegistration] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [qualification, setQualification] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation
    if (registration && specialization && qualification && selectedTime) {
      // Redirect or perform other actions upon successful form submission
      window.location.href = '/login'; // Redirect to login page
    } else {
      alert('Please fill in all the details.'); // Or show an error message
    }
  };

  return (
    <div className="dark:bg-gradient-to-br from-black via-black to-purple-900 flex min-h-screen w-full font-linux relative">
      <style>
        {`
          /* Custom styles for input fields */
          .input-white {
            background-color: white; /* White background */
            color: black; /* Black text */
          }
          
          /* Background doodle */
          .doodle-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('/Premium Vector _ Medicine doodle set.jpeg') center/cover no-repeat;
            opacity: 0.2; /* Adjusted opacity */
            filter: invert(1) contrast(150%); /* Invert colors and increase contrast */
            z-index: 0;
          }

          /* Dark overlay */
          .dark-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7); /* Adjust the darkness */
            z-index: 1;
          }

          .video-container {
            width: 100%;
            height: 100%;
            max-height: 77%; /* Default height */
            max-width: 65%; /* Default width */
          }

          @media (min-width: 768px) {
            .split-screen .video-container {
              max-height: 20%; /* Adjusted height for split-screen mode */
              max-width: 85%; /* Adjusted width for split-screen mode */
            }
          }

          /* Button hover animation */
          .hover-scale {
            transition: transform 0.2s ease-in-out;
          }
          .hover-scale:hover {
            transform: scale(0.95);
          }
        `}
      </style>
      <div className="doodle-background"></div>
      <div className="dark-overlay"></div>
      <div className="hidden lg:flex lg:w-1/2 justify-center items-center relative z-10">
        <div className="relative w-full h-full video-container">
          <video
            src="https://v1.pinimg.com/videos/mc/720p/5b/a2/7b/5ba27b247dd8e411aa1924122bb7e7e0.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover rounded-[2%] shadow-lg"
            style={{ aspectRatio: '15/16' }}
          ></video>
        </div>
      </div>
      <div className="flex w-full items-center justify-center lg:w-1/2 relative z-10">
        <div className="w-full max-w-md space-y-6 p-8 lg:p-12">
          <div className="space-y-4 text-center">
            <h1 className="text-5xl font-bold text-white">Sign Up</h1>
            <p className="text-lg text-white">Enter your details to access your account.</p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-3">
              <label
                className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
                htmlFor="registration"
              >
                Registration Number
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input input-white px-4 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="registration"
                required
                placeholder="Enter your registration number"
                value={registration}
                onChange={(e) => setRegistration(e.target.value)}
              />
            </div>
            <div className="space-y-3">
              <label
                className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
                htmlFor="specialization"
              >
                Specialization
              </label>
              <select
                className="flex h-10 w-full rounded-md border border-input input-white px-4 py-2 text-base ring-offset-background placeholder:text-gray-400 text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="specialization"
                required
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
              >
                <option value="" className="text-gray-400">Select specialization</option>
                <option value="cardiology" className="text-black">Cardiology</option>
                <option value="pediatrics" className="text-black">Pediatrics</option>
                <option value="oncology" className="text-black">Oncology</option>
                <option value="neurology" className="text-black">Neurology</option>
                <option value="dermatology" className="text-black">Dermatology</option>
              </select>
            </div>
            <div className="space-y-3">
              <label
                className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
                htmlFor="qualification"
              >
                Qualification
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input input-white px-4 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="qualification"
                required
                placeholder="Enter your qualification"
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
              />
            </div>
            <TimeSlotPicker selectedTime={selectedTime} onSelectTime={setSelectedTime} />
            <div className="space-y-3">
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black hover:bg-gray-200 hover-scale h-10 px-4 w-full mt-4"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="text-center">
            <p className="text-white">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-white hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetDetails;
