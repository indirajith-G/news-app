import React, { useState } from 'react';
import NavScrollExample from './Navbar';
import NewsComponent from './NewsComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [selectedCountry, setSelectedCountry] = useState('in');
  const [selectedEndpoint, setSelectedEndpoint] = useState('top-headlines'); // Default endpoint
console.log('selected country :', {selectedCountry});
console.log('selected endpoint: ', {selectedEndpoint})
  const handleCountryChange = (newCountry) => {
    setSelectedCountry(newCountry);
  };

  const handleEndpointChange = (newEndpoint) => {
    setSelectedEndpoint(newEndpoint);
  };

  return (
    <Router>
      <div>
        <NavScrollExample
          onCountryChange={handleCountryChange}
          onEndpointChange={handleEndpointChange}
        />
        <Routes>
        <Route path={`/${selectedEndpoint}`} element={<NewsComponent selectedCountry={selectedCountry} />} />          
          {/* Add more routes for different sections */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
