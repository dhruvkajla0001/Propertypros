import React from 'react';
import { useDarkMode } from '../Components/DarkModeContext'; // Import dark mode context

const services = [
  {
    title: 'Property Sales',
    description: 'Our dedicated team of real estate experts will guide you through the entire buying or selling process, from listing to closing, ensuring you get the best value for your property.',
    icon: '🏡'
  },
  {
    title: 'Property Rentals',
    description: 'We provide a wide range of rental properties to suit every need and budget. Our team will help you find the perfect rental and ensure a smooth transition into your new home.',
    icon: '🔑'
  },
  {
    title: 'Commercial Real Estate',
    description: 'Our commercial real estate services include buying, selling, and leasing commercial properties. We offer tailored solutions for businesses seeking office spaces, retail locations, and more.',
    icon: '🏢'
  },
  {
    title: 'Property Management',
    description: 'We offer comprehensive property management services, including tenant screening, lease administration, maintenance, and rent collection, to ensure your investment property is well-maintained and profitable.',
    icon: '🛠️'
  }
];

const Services = () => {
  const { darkMode } = useDarkMode(); // Access dark mode state

  return (
    <section className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`} id="services">
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-bold text-center ${darkMode ? 'text-red-500' : 'text-red-700'} mb-12`}>
          Our Services
        </h2>
        <div className="flex flex-wrap -mx-4">
          {services.map((service, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className={`bg-white ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg rounded-lg overflow-hidden flex flex-col h-full transform transition-transform hover:scale-105 duration-300`}>
                <div className={`bg-red-300 ${darkMode ? 'bg-red-700' : 'bg-red-300'} text-white text-4xl text-center p-6`}>
                  {service.icon}
                </div>
                <div className={`flex-1 p-6 text-center ${darkMode ? 'text-gray-600' : 'text-gray-800'}`}>
                  <h3 className={`text-2xl font-semibold mb-2 ${darkMode ? 'text-gray-500' : 'text-gray-800'}`}>
                    {service.title}
                  </h3>
                  <p className={`leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                    {service.description}
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

export default Services;
