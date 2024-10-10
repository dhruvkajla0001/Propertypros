import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../Components/DarkModeContext';

const Signup = () => {
  const navigate = useNavigate();
  const { darkMode } = useContext(DarkModeContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // Add your signup logic here
      alert("Your account is created!");
      navigate('/login'); // Navigate to login page
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} transition-colors duration-300`}
      style={{
        backgroundImage: `url('https://th.bing.com/th/id/R.035f859cdc0bec2c4591a7c142a56072?rik=cvBPYc88rGl3Fg&riu=http%3a%2f%2fwww.epichomeideas.com%2fwp-content%2fuploads%2f2016%2f08%2fshutterstock_84447190.jpg&ehk=jC7y0Xokwh0b2bnzoHXhEO5e%2bJgyx9sbAX2nV1zR5eI%3d&risl=&pid=ImgRaw&r=0')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 w-full max-w-lg p-10 space-y-8 bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 rounded-lg shadow-2xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white">Create an Account</h2>
        <p className="text-center text-gray-600 dark:text-gray-400">Join us to explore Property Pros!</p>

        <form onSubmit={handleSignup} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-900 dark:border-gray-600 dark:text-gray-100"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-900 dark:border-gray-600 dark:text-gray-100"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Confirm Password
            </label>
            <input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-900 dark:border-gray-600 dark:text-gray-100"
              placeholder="Confirm your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg font-semibold transition-transform transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center text-gray-600 dark:text-gray-400 mt-4">
          <p>Already have an account?{" "}
            <span
              className="text-red-700 hover:underline cursor-pointer"
              onClick={() => navigate('/login')}
            >
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
