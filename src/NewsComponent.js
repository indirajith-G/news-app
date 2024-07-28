import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function NewsComponent({ selectedCountry, selectedEndpoint }) {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const newsContainerRef = useRef(null);

  useEffect(() => {
    fetchNews();
  }, [currentPage, selectedCountry, selectedEndpoint]);

  const fetchNews = async () => {
    try {
      let endpoint = selectedEndpoint; // Default endpoint
      let params = {
        apiKey: '733dd6a23cd246238ca1788a0112f088',
        page: currentPage,
        pageSize: 5
      };

      if (selectedEndpoint === 'sports') {
        endpoint = 'everything';
        params.q = 'sports';
      } else if (selectedEndpoint === 'sources') {
        endpoint = 'top-headlines/sources';
      } else if (selectedEndpoint === 'country') {
        params.country = selectedCountry;
      }

      const response = await axios.get(`https://newsapi.org/v2/${endpoint}`, {
        params: params
      });

      const filteredNews = response.data.articles
        ? response.data.articles.filter(article => article.urlToImage)
        : [];

      setNews(filteredNews);

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
