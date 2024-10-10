import React, { useState } from 'react';
import { useContext } from 'react';
import { DarkModeContext } from '../Components/DarkModeContext';

const ForgetPassword = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [email, setEmail] = useState('');

  const handleReset = (e) => {
    e.preventDefault();
    // Add your password reset logic here
    alert('Password reset link has been sent to your email.');
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} transition-colors duration-300`}
    >
      <div className="relative z-10 w-full max-w-lg p-10 space-y-8 bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 rounded-lg shadow-2xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white">Reset Password</h2>
        <p className="text-center text-gray-600 dark:text-gray-400">Enter your email to reset your password.</p>

        <form onSubmit={handleReset} className="space-y-6">
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
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg font-semibold transition-transform transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;

