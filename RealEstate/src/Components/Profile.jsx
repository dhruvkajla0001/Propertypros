import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { DarkModeContext } from './DarkModeContext'; // Adjust path to your DarkModeProvider

const Profile = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleThemeChange = (event) => {
    const selectedTheme = event.target.value;
    setDarkMode(selectedTheme === 'Dark');
  };

  const handleBackToMainPage = () => {
    navigate('/property-pros'); // Navigate to the main page, adjust path if needed
  };

  return (
    <div className={`relative container mx-auto py-12 px-6 md:px-12 lg:px-24 ${darkMode ? 'dark' : ''}`}>
      {/* Back to Main Page Button */}
      <div className="absolute top-4 right-4">
        <button 
          onClick={handleBackToMainPage}
          className="bg-red-400 text-white py-2 px-4 rounded-lg shadow hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400">
          Back to Main Page
        </button>
      </div>
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-red-400 mb-4">User Profile</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Welcome to your profile page! Here you can manage your account details, view saved properties, and update your preferences.
        </p>
      </div>
      <div className="flex flex-col items-center space-y-8">
        {/* Account Details Section */}
        <div className="profile-info bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 border-b border-gray-300 dark:border-gray-700 pb-4">
            Account Details
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Here you can update your personal information and manage account settings.
          </p>
          <button className="mt-4 bg-red-400 text-white py-2 px-4 rounded-lg shadow hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400">
            Edit Profile
          </button>
        </div>
        {/* Saved Properties Section */}
        <div className="saved-properties bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 border-b border-gray-300 dark:border-gray-700 pb-4">
            Saved Properties
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            View the properties you have saved and manage your favorites.
          </p>
          <ul className="space-y-4">
            {/* Example saved properties */}
            <li className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <img src="https://via.placeholder.com/100" alt="Property" className="w-20 h-20 object-cover rounded-lg mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Property Name</h3>
                <p className="text-gray-600 dark:text-gray-400">Location: City, Type</p>
                <button className="mt-2 bg-red-400 text-white py-1 px-2 rounded-lg shadow hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400">
                  View Details
                </button>
              </div>
            </li>
            {/* Repeat as needed */}
          </ul>
        </div>
        {/* Preferences Section */}
        <div className="preferences bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 border-b border-gray-300 dark:border-gray-700 pb-4">
            Preferences
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Update your preferences to receive personalized recommendations and notifications.
          </p>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="notification" className="text-gray-700 dark:text-gray-300 mb-2">Notification Preferences</label>
              <select id="notification" className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-2 focus:ring-2 focus:ring-red-400">
                <option>Immediate</option>
                <option>Daily Digest</option>
                <option>Weekly Digest</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="theme" className="text-gray-700 dark:text-gray-300 mb-2">Theme Preferences</label>
              <select
                id="theme"
                className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-2 focus:ring-2 focus:ring-red-400"
                value={darkMode ? 'Dark' : 'Light'}
                onChange={handleThemeChange}
              >
                <option>Light</option>
                <option>Dark</option>
                <option>System Default</option>
              </select>
            </div>
            <button type="submit" className="mt-4 bg-red-400 text-white py-2 px-4 rounded-lg shadow hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400">
              Save Preferences
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
