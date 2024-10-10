// src/Components/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-400">404</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">Page Not Found</p>
        <Link to="/" className="text-red-400 hover:underline mt-4 inline-block">Go Back to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
