import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate for navigation
import { useDarkMode } from '../Components/DarkModeContext';
import logoimg from '../assets/images/image1.png';
import { FaUserCircle, FaMoon, FaSun } from 'react-icons/fa';

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate(); // Use for programmatic navigation

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollY) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  const handleLogout = () => {
    // Handle any logout logic here if needed
    navigate('/'); // Navigate to landing page
  };

  return (
    <header className={`fixed w-full top-0 z-50 shadow-md transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-400 text-gray-900'}`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12 lg:px-24">
        <div className="logo flex items-center">
          <img src={logoimg} alt="Property Pros Logo" className="h-12 w-auto" />
        </div>
        <nav>
          <ul className="hidden md:flex space-x-8 lg:space-x-12 text-lg">
            <li>
              <Link to="/" className="hover:text-red-500 transition-colors duration-300">Home</Link>
            </li>
            <li><a href="#about" className="hover:text-red-500 transition-colors duration-300">About</a></li>
            <li><a href="#services" className="hover:text-red-500 transition-colors duration-300">Services</a></li>
            <li><a href="#properties" className="hover:text-red-500 transition-colors duration-300">Properties</a></li>
            <li><a href="#clients" className="hover:text-red-500 transition-colors duration-300">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-red-500 transition-colors duration-300">Contact</a></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="text-2xl hover:text-red-500 cursor-pointer transition-colors duration-300 transform hover:scale-110"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <Link to="/profile">
            <FaUserCircle className="text-3xl hover:text-red-500 cursor-pointer transition-colors duration-300 transform hover:scale-110" />
          </Link>
          <Link to="/profile" className="text-lg font-bold hover:text-red-500 transition-colors duration-300">Profile</Link>
          <button
            onClick={handleLogout}
            className="text-lg font-bold text-red-500 hover:text-white bg-transparent hover:bg-red-500 transition-colors duration-300 border-2 border-red-500 py-1 px-3 rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
