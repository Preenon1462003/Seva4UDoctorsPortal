import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UserProfile from './UserProfile'; // Adjust the import path as needed
import axios from 'axios';
const DashBoard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  // console.log(data);
  const [user, setUser] = useState(null);

  const [showProfile, setShowProfile] = useState(false);
  const [booking, setBooking] = useState([]);
  const timeSlots = [
    { start: '9:00', end: '11:00' },
    { start: '11:00', end: '13:00' },

    { start: '15:00', end: '17:00' },
    { start: '17:00', end: '19:00' },

  ];

  useEffect(() => {
    // Fetch user details from local storage or state management system
    const storedUser = JSON.parse(localStorage.getItem('userDetails')) || null;
    setUser(storedUser);

    // Perform any other necessary initialization or side effects
    fetchBooking();
  }, []);

  const handleLogout = () => {
    // Perform logout actions (e.g., clearing user state, removing from local storage)
    setUser(null);
    localStorage.removeItem('userDetails');
  };

  const handleVideoClick = (meetingLink) => {
    window.open(meetingLink, '_blank');
  };

  const fetchBooking = async () => {
    try {
      // alert("Fetching Booking");
      const doctorEmail = data.email; // Extract the email directly
      console.log('Fetching bookings', doctorEmail);
      const response = await axios.post('https://lionfish-app-qvjag.ondigitalocean.app/api/v1/doctor/viewbookings', { doctorEmail });
      // console.log(response.data);
      if (response.data.message === "Booking Not Found") {
        console.log(response.data.doctor);
        alert("No Booking Found");
      } else {
        // Handle the bookings data as needed
        console.log(response.data.doctor);
        setBooking(response.data.doctor);
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-black via-black to-purple-900 text-white">
      <header className="flex items-center justify-between h-16 px-6 border-b border-muted/20 dark:border-muted-foreground/20 relative">
        <a className="flex items-center gap-2 text-lg font-semibold" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"></path>
          </svg>
          <span>Seva4You</span>
        </a>
        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 12c2.485 0 4.5-2.015 4.5-4.5S14.485 3 12 3 7.5 5.015 7.5 7.5 9.515 12 12 12z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 18c0-2.622 2.128-4.75 4.75-4.75h1a4.75 4.75 0 014.75 4.75v.75H6.75v-.75z"
                />
              </svg>
            </button>
            {showProfile && <UserProfile user={user} onLogout={handleLogout} />}
          </div>
        </div>
      </header>
      <main className="flex-1 p-6 grid gap-6 relative">
        <style>
          {`
            .doodle-background {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: url('/Premium Vector _ Medicine doodle set.jpeg') center/cover no-repeat;
              opacity: 0.2;
              filter: invert(1) contrast(150%);
              z-index: 0;
            }

            .dark-overlay {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: rgba(0, 0, 0, 0.5);
              z-index: 1;
            }
          `}
        </style>
        <div className="doodle-background"></div>
        <div className="dark-overlay"></div>
        <div className="relative z-10 grid gap-4">
          <h2 className="text-2xl font-semibold">Hi,  Dr. {data.name}</h2>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Upcomming Appointments</h2>
            <div className="flex items-center gap-2 text-muted-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              <span>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}</span>
            </div>
          </div>
          <div className="grid gap-6">
            {booking.map((booking, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 shadow-sm bg-white dark:bg-gray-800 p-4 h-32 flex flex-col justify-between"
              >
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-700 dark:text-gray-300"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    {booking.patientEmail}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    {booking.time}
                  </span>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => handleVideoClick(booking.meetingLink)}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
                  >
                    Join Meet
                  </button>
                </div>
              </div>
            ))}

          </div>

        </div>
      </main>
    </div>
  );
};

export default DashBoard;
