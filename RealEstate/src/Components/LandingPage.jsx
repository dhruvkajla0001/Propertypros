import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../Components/DarkModeContext';

const LandingPage = () => {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();
  const { darkMode } = useContext(DarkModeContext);

  const handleNavigation = (path) => {
    setAnimate(true);
    setTimeout(() => {
      navigate(path);
      setAnimate(false); // Reset animation state after navigation
    }, 300); // Duration of the animation
  };

  useEffect(() => {
    // Cleanup function to reset animation state if the component unmounts
    return () => setAnimate(false);
  }, []);

  return (
    <div 
      className={`min-h-screen flex flex-col items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} transition-colors duration-500 relative`} 
      style={{ 
        backgroundImage: `url('https://th.bing.com/th/id/R.035f859cdc0bec2c4591a7c142a56072?rik=cvBPYc88rGl3Fg&riu=http%3a%2f%2fwww.epichomeideas.com%2fwp-content%2fuploads%2f2016%2f08%2fshutterstock_84447190.jpg&ehk=jC7y0Xokwh0b2bnzoHXhEO5e%2bJgyx9sbAX2nV1zR5eI%3d&risl=&pid=ImgRaw&r=0')`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="text-center z-10 p-6 max-w-4xl mx-auto">
        <h1 className={`text-5xl font-extrabold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'} typing-text`}>
          Welcome to <span className="text-red-500">Property Pros</span>
        </h1>
        <p className={`text-lg md:text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'} typing-text-2`}>
          Find your dream home with ease and style. Your perfect property is just a click away.
        </p>
        <div className="flex justify-center space-x-6">
          <button
            onClick={() => handleNavigation('/login')}
            className={`bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-full shadow-lg text-lg font-semibold transition-all transform hover:scale-110 hover:shadow-2xl duration-300 ease-in-out ${animate ? 'animate-fade' : ''}`}
          >
            Login
          </button>
          <button
            onClick={() => handleNavigation('/signup')}
            className={`bg-transparent border-2 border-red-500 hover:bg-red-500 hover:text-white text-red-500 py-3 px-6 rounded-full shadow-lg text-lg font-semibold transition-all transform hover:scale-110 hover:shadow-2xl duration-300 ease-in-out ${animate ? 'animate-fade' : ''}`}
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* CSS Styling */}
      <style jsx>{`
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink {
          0% { border-color: transparent; }
          50% { border-color: white; }
          100% { border-color: transparent; }
        }

        @keyframes fade {
          from { opacity: 1; }
          to { opacity: 0; }
        }

        .typing-text, .typing-text-2 {
          white-space: nowrap;
          overflow: hidden;
          border-right: 4px solid white;
          animation-fill-mode: forwards;
        }

        .typing-text {
          animation: typing 3s steps(30, end), blink 0.75s step-end 3;
          animation-fill-mode: forwards;
          color: white;
        }

        .typing-text-2 {
          animation: typing 4s steps(40, end), blink 0.75s step-end 3;
          animation-fill-mode: forwards;
          animation-delay: 3s;
          color: white;
        }

        .typing-text::after, .typing-text-2::after {
          content: '';
          display: inline-block;
          width: 0;
          border-right: none;
        }

        .animate-fade {
          animation: fade 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
