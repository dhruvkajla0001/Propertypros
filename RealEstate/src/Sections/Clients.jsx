import React, { useEffect } from 'react';
import { useDarkMode } from '../Components/DarkModeContext'; // Import dark mode context
import Aos from 'aos';
import 'aos/dist/aos.css';

// Sample client data
const clients = [
  {
    name: 'John Doe',
    gender: 'male',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    comment: 'Property Pros made buying our home a breeze. Highly recommended!'
  },
  {
    name: 'Mike Smith',
    gender: 'male',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    comment: 'Fantastic service and very professional. Found our dream home quickly!'
  },
  {
    name: 'Alex Johnson',
    gender: 'male',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    comment: 'Great experience from start to finish. The team was supportive throughout!'
  },
  {
    name: 'Jane Doe',
    gender: 'female',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    comment: 'The process was smooth and easy. Love our new apartment!'
  },
  {
    name: 'Emily Davis',
    gender: 'female',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    comment: 'Amazing service! The team was very helpful and made the process enjoyable.'
  },
  {
    name: 'Sarah Brown',
    gender: 'female',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    comment: 'Highly satisfied with the service provided. They went above and beyond!'
  }
];

const Clients = () => {
  const { darkMode } = useDarkMode();

  useEffect(() => {
    Aos.init({
      duration: 1000, // Duration of animations
      easing: 'ease-in-out', // Animation easing
      offset: 100, // Offset from viewport
      delay: 200, // Delay before animation starts
    });
  }, []);

  return (
    <section id="clients" className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-bold text-center mb-12 ${darkMode ? 'text-red-400' : 'text-red-400'}`}>
          What Our Clients Say
        </h2>
        <div className="flex flex-wrap -mx-4">
          {clients.map((client, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
              data-aos="fade-up" // Animation when element scrolls into view
              data-aos-delay={index * 200} // Staggered animation delay
            >
              <div
                className={`bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:rotate-3 ${
                  darkMode ? 'border border-gray-700' : 'border border-gray-300'
                }`}
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.onerror = null; // prevent looping
                    e.target.src = 'https://via.placeholder.com/400'; // fallback image
                  }}
                />
                <div className={`p-6 ${darkMode ? 'bg-red-200' : 'bg-red-200'}`}>
                  <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-red-400' : 'text-red-400'}`}>
                    {client.name}
                  </h3>
                  <p className={`text-gray-700 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {client.comment}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

