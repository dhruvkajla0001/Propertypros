import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { DarkModeProvider } from './Components/DarkModeContext';
import LandingPage from './Components/LandingPage'; 
import PropertyPros from './Components/PropertyPros'; 
import Profile from './Components/Profile'; 
import Login from './Components/Login'; 
import Signup from './Components/Signup'; 
import ForgetPassword from './Components/ForgetPassword'; 
import NotFound from './Components/NotFound'; 
import Search from './Sections/Search';

const App = () => {
  return (
    <DarkModeProvider>
      <Router>
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Authentication Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forget-password" element={<ForgetPassword />} /> 
          
          {/* Main Project Pages */}
          <Route path="/property-pros" element={<PropertyPros />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />          

          {/* 404 Not Found Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
};

export default App;
