import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import logoimg from '../assets/images/image1.png'; // Import the logo image
import { useDarkMode } from '../Components/DarkModeContext'; // Import dark mode context

const Footer = () => {
  const { darkMode } = useDarkMode(); // Get dark mode state

  return (
    <footer className={`py-8 ${darkMode ? 'bg-gray-900 text-gray-500' : 'bg-gray-500 text-white'}`}>
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
        
        {/* Left Side - Logo and Description */}
        <div className="flex flex-col items-center lg:items-start">
          <div className="flex items-center mb-4">
            <img src={logoimg} alt="Property Pros Logo" className="h-16 w-auto" />
          </div>
          <p className={`text-lg mb-2 text-center lg:text-left ${darkMode ? 'text-gray-300' : 'text-gray-300'}`}>
            Your trusted partner in finding the perfect property.
          </p>
        </div>

        {/* Center - Navigation Links */}
        <div className="flex flex-col items-center lg:items-start lg:ml-16 space-y-3">
          <Link to="hero" smooth={true} duration={1000} className={`text-lg hover:text-red-500 transition duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-300'}`}>Home</Link>
          <Link to="about" smooth={true} duration={1000} className={`text-lg hover:text-red-500 transition duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-300'}`}>About</Link>
          <Link to="services" smooth={true} duration={1000} className={`text-lg hover:text-red-500 transition duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-300'}`}>Services</Link>
          <Link to="properties" smooth={true} duration={1000} className={`text-lg hover:text-red-500 transition duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-300'}`}>Properties</Link>
          <Link to="contact" smooth={true} duration={1000} className={`text-lg hover:text-red-500 transition duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-300'}`}>Contact</Link>
        </div>

        {/* Right Side - Contact Info and Social Icons */}
        <div className="flex flex-col items-center lg:items-end lg:ml-16">
          <div className={`text-lg mb-10 text-center lg:text-left ${darkMode ? 'text-gray-300' : 'text-gray-300'}`}>
            <p>
              <a href="mailto:propertypros@gmail.com" className="underline hover:text-red-500 transition duration-300">propertypros@gmail.com</a>
            </p>
            <p>
              <a href="tel:+919501953676" className="underline hover:text-red-500 transition duration-300">+91 9501953676</a>
            </p>
          </div>
          <div className="flex space-x-4 mb-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={`text-2xl hover:text-red-500 transition duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-300'}`}>
              <FaFacebookF />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className={`text-2xl hover:text-red-500 transition duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-300'}`}>
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className={`text-2xl hover:text-red-500 transition duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-300'}`}>
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={`text-2xl hover:text-red-500 transition duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-300'}`}>
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={`text-center py-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-600'} mt-6`}>
        <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-300'}`}>© {new Date().getFullYear()} Property Pros. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
