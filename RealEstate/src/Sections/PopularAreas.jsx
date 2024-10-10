import React from 'react';
import ar1 from '../assets/images/area1.jpg';
import ar2 from '../assets/images/area2.jpg';
import ar3 from '../assets/images/area3.jpg';
import { useDarkMode } from '../Components/DarkModeContext'; // Import dark mode context

const PopularAreas = () => {
  const { darkMode } = useDarkMode(); // Access darkMode state

  const popularAreasData = [
    {
      title: 'Area 1',
      image: ar1,
      description: 'Discover the vibrant community and fantastic amenities of Area 1.',
      link: '/area1',
    },
    {
      title: 'Area 2',
      image: ar2,
      description: 'Explore the serene environment and luxurious properties in Area 2.',
      link: '/area2',
    },
    {
      title: 'Area 3',
      image: ar3,
      description: 'Experience the modern lifestyle and bustling activities in Area 3.',
      link: '/area3',
    },
  ];

  return (
    <section className={`container mx-auto px-4 py-12 ${darkMode ? 'bg-red-900 text-gray-100' : 'bg-red-100 text-gray-900'}`}>
      <h2 className={`text-4xl font-bold text-red-400 text-center mb-12`}>Popular Areas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {popularAreasData.map((area, index) => (
          <div
            className={`rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            key={index}
          >
            <img
              src={area.image}
              alt={area.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className={`text-2xl font-semibold mb-2 text-red-400`}>{area.title}</h3>
              <p className={`text-gray-300 mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{area.description}</p>
              <a
                href={area.link}
                className={`inline-block px-4 py-2 font-semibold rounded-lg transition duration-300 ${darkMode ? 'bg-red-500 text-gray-900 hover:bg-red-600' : 'bg-red-400 text-white hover:bg-red-500'}`}
              >
                Explore
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularAreas;


