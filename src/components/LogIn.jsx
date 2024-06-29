import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation
    if (email.trim() === '' || password.trim() === '') {
      alert('Please fill in all the details.');
      return;
    }

    // Redirect to home upon successful login
    navigate('/dash');
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative bg-gradient-to-br from-black via-black to-purple-900">
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

          .rounded-image-container {
            overflow: hidden;
            border-radius: 2%;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
            width: 70%;
            height: 70vh; /* Adjust the height as needed */
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .rounded-image-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            position: absolute;
            transition: opacity 0.5s ease-in-out; /* Smooth transition for opacity */
          }

          .rounded-image-container img:first-child {
            opacity: ${isHovered ? 0 : 1}; /* Hide the first image on hover */
          }

          .rounded-image-container img:last-child {
            opacity: ${isHovered ? 1 : 0}; /* Show the second image on hover */
          }
        `}
      </style>
      <div className="doodle-background"></div>
      <div className="dark-overlay"></div>
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center relative z-10 pr-4">
        <div
          className="rounded-image-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="/Surgery ♥️.jpeg"
            alt="First Image"
            className="object-cover"
          />
          <img
            src="/download.jpeg"
            alt="Second Image"
            className="object-cover"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-transparent relative z-10 p-4 lg:p-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">Login to your account</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  className="h-10 rounded-md text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 relative block w-full appearance-none rounded-t-md border border-input bg-black bg-opacity-50 px-3 py-2 text-white placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  className="h-10 rounded-md text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 relative block w-full appearance-none rounded-b-md border border-input bg-black bg-opacity-50 px-3 py-2 text-white placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                  id="password"
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button
                className="items-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 group relative flex w-full justify-center rounded-md bg-white text-black border border-gray-300 py-2 px-4 text-sm font-medium transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
