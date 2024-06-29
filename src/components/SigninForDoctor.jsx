import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from './UserContext'; // Adjust path as per your project structure

const SignInForDoctor = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUser(); // Destructure setUser from useUser hook
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (fullName && email && password) {
      const userDetails = { fullName, email, password };
      setUser(userDetails); // Set user details using setUser from context
      console.log(userDetails);
      // Store user details in local storage (optional)
      navigate('/signup2', { state:  userDetails  });
    } else {
      alert('Please fill in all the details.');
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-black via-black to-purple-900 relative">
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

          .video-container {
            position: relative;
            width: 100%;
            height: 90%;
            max-height: 90%;
            overflow: hidden;
          }

          @media (min-width: 768px) {
            .video-container {
              max-height: 80%;
              max-width: 85%;
            }
          }

          @media (max-width: 1023px) {
            .video-container {
              display: none;
            }
          }
        `}
      </style>
      <div className="doodle-background"></div>
      <div className="dark-overlay"></div>
      <div className="w-full md:w-1/2 p-2 flex justify-center items-center relative z-10">
        <div className="relative w-20% h-70% video-container">
          <video
            src="https://v1.pinimg.com/videos/mc/720p/56/a4/14/56a414d21fef6f9585d3cb73ca725c0a.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover rounded-[2%] shadow-lg"
            style={{ aspectRatio: '16/9' }}
          ></video>
        </div>
      </div>
      <div className="w-full md:w-4/5 p-3 flex flex-col justify-between items-start relative z-10">
        <div>
          <div className="flex items-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Get Started</h2>
          </div>
          <div className="space-y-4 text-lg">
            <p className="text-white">
              Join our esteemed network and extend your medical expertise to a diverse community of patients seeking
              quality healthcare. Whether you specialize in rare conditions, innovative treatments, or general practice,
              our platform offers the ideal space to connect with patients who value your knowledge and care.
            </p>
            <p className="text-white">
              But that's not all! By partnering with us, you'll also have the opportunity to engage with our dedicated
              audience through our dynamic blog. Share your medical insights, success stories, and valuable advice,
              captivating readers with content that promotes health and wellness.
            </p>
            <p className="text-white">Join us today and let's heal together.</p>
          </div>
          <form className="space-y-4 mt-6 mb-4 w-full max-w-sm" onSubmit={handleSubmit}>
            <div className="space-y-2 w-full">
              <label
                className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
                htmlFor="full-name"
              >
                Full Name
              </label>
              <input
                className="flex h-10 w-full border border-input text-base ring-offset-background file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-white text-black rounded-md px-3 py-2"
                id="full-name"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2 w-full">
              <label
                className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="flex h-10 w-full border border-input text-base ring-offset-background file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-white text-black rounded-md px-3 py-2"
                id="email"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2 w-full">
              <label
                className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="flex h-10 w-full border border-input text-base ring-offset-background file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-white text-black rounded-md px-3 py-2"
                id="password"
                placeholder="Enter your password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black hover:bg-gray-200 hover-scale h-8 w-32 rounded-md px-3 py-1 mt-4"
            >
              Next Page
            </button>
          </form>
          <div className="text-center">
            <Link to="/login" className="inline-flex text-white text-sm block mt-2">
              Already have an account? <span className="underline">Log In</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForDoctor;
