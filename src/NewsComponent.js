import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import NavScrollExample from './Navbar';
function NewsComponent({ selectedCountry }) {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const newsContainerRef = useRef(null); // Ref for the container holding news articles
console.log(selectedCountry);
  useEffect(() => {
    fetchNews();
  }, [currentPage, selectedCountry]);

  const fetchNews = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          country: selectedCountry,
          apiKey: '733dd6a23cd246238ca1788a0112f088',
          page: currentPage,
          pageSize: 5 // Limit responses to 5 per page
        }
      });

      const filteredNews = response.data.articles.filter(article => article.urlToImage);
      setNews(filteredNews);

      // Scroll to the top of the news container after new content is loaded
      if (newsContainerRef.current) {
        newsContainerRef.current.scrollTop = 0;
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div ref={newsContainerRef} style={{ maxHeight: '500px', overflow: 'auto' }}>
        {news.map(article => (
          <div key={article.id}>
            <img src={article.urlToImage} alt="Article Thumbnail" />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <button onClick={() => window.location.href = article.url}>Read More</button>
          </div>
        ))}
      </div>
      <div>
        <button onClick={handlePreviousPage}>Previous Page</button>
        <button onClick={handleNextPage}>Next Page</button>
      </div>
    </div>
  );
}

export default NewsComponent;
