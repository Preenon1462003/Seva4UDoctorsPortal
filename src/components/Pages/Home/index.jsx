import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    if (value.trim()) {
      navigate(`/room/${value}`);
    } else {
      alert('Please enter a room code.');
    }
  }, [navigate, value]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-black via-black to-purple-900">
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
            background: rgba(0, 0, 0, 0.1);
            z-index: 1;
          }

          .join-container {
            z-index: 10;
            padding: 2rem;
            background: rgba(0, 0, 0, 0.7);
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
            text-align: center;
          }

          .title {
            font-size: 2.5rem;
            font-weight: bold;
            color: white;
            margin-bottom: 1rem;
          }

          .description {
            font-size: 1.2rem;
            color: white;
            margin-bottom: 2rem;
          }

          .join-input {
            width: 100%;
            padding: 0.5rem;
            margin-bottom: 1rem;
            border: 1px solid #ccc;
            border-radius: 4px;
            background: rgba(255, 255, 255, 0.8);
            color: black;
          }

          .join-button {
            width: 100%;
            padding: 0.5rem;
            border: none;
            border-radius: 4px;
            background: white;
            color: black;
            font-weight: bold;
            cursor: pointer;
            transition: background 0.3s ease;
          }

          .join-button:hover {
            background: gray;
          }
        `}
      </style>
      <div className="doodle-background"></div>
      <div className="dark-overlay"></div>
      <div className="join-container">
        <div className="title">Join the Meet</div>
        <div className="description">
          Enter the room code below to join your meeting.
        </div>
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          type="text"
          placeholder="Enter Room Code"
          className="join-input"
        />
        <button onClick={handleJoinRoom} className="join-button">
          JOIN
        </button>
      </div>
    </div>
  );
};

export default HomePage;
