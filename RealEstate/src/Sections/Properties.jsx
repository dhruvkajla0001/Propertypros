import React, { useState } from 'react';
import { useDarkMode } from '../Components/DarkModeContext';
import Aos from 'aos';
import 'aos/dist/aos.css';

// Updated properties array with additional properties
const allProperties = [
  { title: 'Luxury Villa', description: 'A stunning luxury villa with breathtaking views and high-end amenities.', image: 'https://th.bing.com/th/id/OIP.sI0JozTVs7lM2C54EuafsgHaE8?w=196&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7', price: '₹90,000' },
  { title: 'Penthouse', description: 'A modern penthouse offering top-notch features and a prime location.', image: 'https://th.bing.com/th/id/OIP.NJIkz_I1ee98bSNIpS36ggHaEx?w=251&h=181&c=7&r=0&o=5&dpr=1.1&pid=1.7', price: '₹100,000' },
  { title: 'Cozy Apartment', description: 'A charming apartment perfect for comfortable living in a vibrant neighborhood.', image: 'https://th.bing.com/th/id/OIP.EgGEmfyh0WVOFnRve7SX1wHaEK?w=289&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7', price: '₹50,000' },
  { title: 'Spacious Duplex', description: 'A spacious duplex with ample room for family living and entertaining.', image: 'https://th.bing.com/th/id/OIP.4nSe9UtykuR-1PH48aSAKgHaEM?w=222&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7', price: '₹70,000' },
  { title: 'Modern Loft', description: 'A sleek loft with contemporary design and city views.', image: 'https://th.bing.com/th/id/OIP.LDWt8taHuwC2aN5Rk72oWgHaFj?w=256&h=192&c=7&r=0&o=5&dpr=1.1&pid=1.7', price: '₹60,000' },
  { title: 'Family Home', description: 'A spacious family home with a large backyard and community amenities.', image: 'https://th.bing.com/th/id/OIP.p_KoeRu5hURZdjWefBaLeAHaE8?w=251&h=186&c=7&r=0&o=5&dpr=1.1&pid=1.7', price: '₹80,000' },
  { title: 'Beachfront Property', description: 'An exclusive beachfront property with stunning ocean views.', image: 'https://th.bing.com/th/id/OIP.D2AHCzk75ovxnZuCv1gLagHaE8?w=235&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7', price: '₹100,000' },
  { title: 'Urban Condo', description: 'A stylish urban condo with modern features and great city access.', image: 'https://th.bing.com/th/id/OIP.5JFppzdcquUIBqcqa4J4DwHaFa?w=230&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7', price: '₹40,000' },
  // Additional properties
  { title: 'Country Cottage', description: 'A cozy country cottage with beautiful gardens and serene surroundings.', image: 'https://th.bing.com/th/id/OIP.SHjXFk-KbNBO48Jhs1zrMwHaFK?w=249&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7', price: '₹45,000' },
  { title: 'Mountain Retreat', description: 'A peaceful mountain retreat with breathtaking views and fresh air.', image: 'https://th.bing.com/th/id/R.6425b5640154eea152de6c6cb2765531?rik=MgXpTZ6K7rQ4fg&riu=http%3a%2f%2fgtspiritmedia.com%2fgtspirit%2fuploads%2f2015%2f08%2f22687803_source.jpg&ehk=VJUtfApzI6nD2vXfbd%2bBvTm0qe4xs%2ffBViiiUmFv8hs%3d&risl=&pid=ImgRaw&r=0', price: '₹75,000' },
  { title: 'City Studio', description: 'A compact and efficient studio in the heart of the city.', image: 'https://th.bing.com/th/id/R.6425b5640154eea152de6c6cb2765531?rik=MgXpTZ6K7rQ4fg&riu=http%3a%2f%2fgtspiritmedia.com%2fgtspirit%2fuploads%2f2015%2f08%2f22687803_source.jpg&ehk=VJUtfApzI6nD2vXfbd%2bBvTm0qe4xs%2ffBViiiUmFv8hs%3d&risl=&pid=ImgRaw&r=0', price: '₹35,000' },
  { title: 'Countryside Farmhouse', description: 'A rustic farmhouse with expansive land and stunning landscapes.', image: 'https://th.bing.com/th/id/OIP.3Px-9eeOVF3HybEaL447EwHaE7?w=267&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7', price: '₹85,000' }
];

const Properties = () => {
  const { darkMode } = useDarkMode();
  const [visibleProperties, setVisibleProperties] = useState(8); // Show 8 properties initially
  const [expanded, setExpanded] = useState(false); // Track whether the properties have been expanded

  const loadMoreProperties = () => {
    if (expanded) {
      setVisibleProperties(8); // Reset to 8 properties when collapsing
    } else {
      setVisibleProperties(allProperties.length); // Show all properties when expanding
    }
    setExpanded(!expanded); // Toggle between expanded and collapsed states
  };

  return (
    <section
      id="properties"
      className={`py-16 ${darkMode ? 'bg-gray-900 text-white' : 'bg-red-300 text-gray-900'} transition-colors duration-300`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-red-800">Our Properties</h2>
        <div className="flex flex-wrap -mx-4">
          {allProperties.slice(0, visibleProperties).map((property, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div
                className={`h-full flex flex-col bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-300 ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.onerror = null; // prevent looping
                    e.target.src = 'https://via.placeholder.com/400'; // fallback image
                  }}
                />
                <div className="p-6 flex-grow flex flex-col justify-between bg-red-100">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-red-600">{property.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{property.description}</p>
                  </div>
                  <p className={`text-lg font-bold mt-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    Price: {property.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={loadMoreProperties}
            className="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg font-semibold transition-transform transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            {expanded ? 'Show Less' : 'Load More'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Properties;