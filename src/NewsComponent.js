import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import './NewsComponent.css'; 
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function NewsComponent({ selectedCountry,selectedCategory}) {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // console.log('selected country is', selectedCountry)
  // console.log('selected category is', selectedCategory)
  const newsContainerRef = useRef(null);
  const fetchNews = useCallback(async () => {
    try {
      let params = {
        page: currentPage,
        pageSize: 12
      };
  
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?&country=${selectedCountry}&category=${selectedCategory}&apiKey=733dd6a23cd246238ca1788a0112f088`, {
        params: params,
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
  }, [currentPage, selectedCountry, selectedCategory]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

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
      <div className='float-layout' ref={newsContainerRef} >
        {news.map(article => (
          <div key={article.id}>
            <Card style={{ width: '25rem', height:'600px',marginBottom: '1rem'}}>
              <Card.Img style={{ width: '25rem', height:'300px'}}variant="top" src={article.urlToImage} alt="Article Thumbnail" />
              <Card.Body>
                <Card.Title>{article.title} </Card.Title>
                <Card.Text>{article.description} </Card.Text>
                <Button variant="outline-primary" onClick={() => window.location.href = article.url}>Read More</Button>
              </Card.Body>
            </Card>      
          </div>
        ))}
      </div>

      <div className='buttons-container'>
        <button onClick={handlePreviousPage}>Previous Page</button>
        <button onClick={handleNextPage}>Next Page</button>
      </div>

</div>
  );
}

export default NewsComponent;
