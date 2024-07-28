import React, { useState } from 'react';
import NavScrollExample from './Navbar';
import NewsComponent from './NewsComponent';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  const [selectedCountry, setSelectedCountry] = useState('in');
  const [selectedCategory, setSelectedCategory] = useState('sports'); // Default Category
console.log('selected country App:', {selectedCountry});
console.log('selected Category App: ', {selectedCategory})
  const handleCountryChange = (newCountry) => {
    setSelectedCountry(newCountry);
  };

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  return (
    <Router>
      <div>
        <NavScrollExample
          onCountryChange={handleCountryChange}
          onCategoryChange={handleCategoryChange}
        />
        {/* <Routes>
        <Route path="/" element={<NewsComponent selectedCountry={selectedCountry} />} />
        <Route path="/sports" element={<NewsComponent selectedCategory={selectedCategory} />} />
           {/* Add more routes for different sections 
        </Routes> */}
        <NewsComponent selectedCategory={selectedCategory} selectedCountry = { selectedCountry}/>

      </div>
    </Router>
  );
}

export default App;
