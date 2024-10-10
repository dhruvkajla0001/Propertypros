import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useDarkMode } from '../Components/DarkModeContext';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contacts = () => {
  const { darkMode } = useDarkMode();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: 'ease-in-out',
      offset: 100,
      delay: 100,
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your EmailJS credentials
    const serviceID = 'service_30z051q'; 
    const templateID = 'template_zuav5sf'; 
    const userID = '5ujHAUjfhVuaQaP75'; 

    emailjs.send(serviceID, templateID, {
      from_name: formData.name,
      from_email: formData.email,
      reply_to: formData.email,
      phone: formData.phone,
      message: formData.message,
    }, userID)
    .then((response) => {
      setSuccessMessage('Message sent successfully!');
      setShowMessage(true);

      // Clear form data
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

      // Hide success message after a few seconds
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    })
    .catch((error) => {
      console.error('Failed to send message:', error);
      setSuccessMessage('Failed to send message. Please try again.');
      setShowMessage(true);
    });
  };

  return (
    <section
      id="contact"
      className={`w-full ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} py-16`}
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div 
            data-aos="fade-left" 
            className={`p-8 rounded-lg shadow-xl transition-transform duration-500 ${darkMode ? 'bg-gray-800 shadow-red-500' : 'bg-white shadow-red-500'}`}
          >
            <h2 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Contact Us
            </h2>

            {showMessage && (
              <div className="bg-green-500 text-white p-3 mb-4 rounded-md">
                {successMessage}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-lg mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-md border ${darkMode ? 'border-gray-700 bg-gray-700 text-white placeholder-gray-400' : 'border-gray-300 bg-white text-gray-900'}`}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-md border ${darkMode ? 'border-gray-700 bg-gray-700 text-white placeholder-gray-400' : 'border-gray-300 bg-white text-gray-900'} z-20`}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg mb-2" htmlFor="phone">
                  Mobile Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-md border ${darkMode ? 'border-gray-700 bg-gray-700 text-white placeholder-gray-400' : 'border-gray-300 bg-white text-gray-900'}`}
                  placeholder="Enter your mobile number"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-md border ${darkMode ? 'border-gray-700 bg-gray-700 text-white placeholder-gray-400' : 'border-gray-300 bg-white text-gray-900'}`}
                  rows="4"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className={`w-full py-3 px-4 rounded-md text-white hover:opacity-90 transition-opacity duration-300 ${darkMode ? 'bg-red-600' : 'bg-red-500'}`}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Description */}
          <div 
            data-aos="fade-right" 
            className="flex flex-col justify-center"
          >
            <h2 className="text-red-500 text-2xl font-semibold mb-4">Get In Touch</h2>
            <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              We would love to hear from you! If you have any questions, feedback, or
              inquiries, feel free to reach out to us. Our team is here to assist you
              and provide the best possible service. Please fill out the form to the
              left, and we will get back to you as soon as possible.
            </p>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              You can also contact us directly at <a href="mailto:propertypros@gmail.com" className="text-red-500">property.pros02024@gmail.com</a> or call us at <a href="tel:+919501953676" className="text-red-500">+91 9501953676</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
