// UserProfile.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';

const UserProfile = ({ onLogout }) => {
  const { user } = useUser();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignUp = () => {
    navigate('/');
  };

  return (
    <div className="absolute top-16 right-6 bg-white text-black rounded-lg shadow-lg p-4 z-50">
      {user ? (
        <div className="space-y-2">
          <p className="text-lg font-medium">Profile</p>
          <p>Full Name: {user.fullName}</p>
          <p>Email: {user.email}</p>
          {user.registrationNumber && <p>Registration Number: {user.registrationNumber}</p>}
          {user.specialization && <p>Specialization: {user.specialization}</p>}

          <button
            onClick={onLogout}
            className="mt-4 w-full bg-red-500 text-white py-2 rounded-md"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          {/* <p className="text-lg font-medium">Not Logged In</p> */}
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Logout
          </button>
          {/* <button
            onClick={handleSignUp}
            className="w-full bg-green-500 text-white py-2 rounded-md"
          >
            Sign Up
          </button> */}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
