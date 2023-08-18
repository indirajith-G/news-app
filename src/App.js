import React, { useState, useEffect, useRef } from 'react';
import NavScrollExample from './Navbar';
import NewsComponent from './NewsComponent';
function App() {
  const [selectedCountry, setSelectedCountry] = useState('in');
  console.log('default country:', {selectedCountry});
  const handleCountryChange = (newCountry) => {
    console.log('Selected country changed:', newCountry);
    setSelectedCountry(newCountry);
  };

  
  return (
    <div>
      <NavScrollExample onCountryChange={handleCountryChange} />
      <NewsComponent selectedCountry={selectedCountry} />
    </div>
  );
}

export default App;
