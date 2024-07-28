
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'; // Import your CSS file with styles

function NavScrollExample({ onCountryChange, onCategoryChange }) {
  const [selectedCountry, setSelectedCountry] = useState('in'); // Default selected country is 'in'
  const [selectedCategory, setSelectedCategory] = useState('sports'); // Default Category

  const handleCountryButtonClick = (newCountry) => {
    setSelectedCountry(newCountry);
    onCountryChange(newCountry);
  };

  const handleCategoryButtonClick = (newCategory) => {
    setSelectedCategory(newCategory)
    onCategoryChange(newCategory);
  };

  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand href="">News App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px'}} navbarScroll>
            <NavDropdown title="Country" id="navbarScrollingDropdown">
              <NavDropdown.Item
                onClick={() => handleCountryButtonClick('in')}
                className={selectedCountry === 'in' ? 'selected-country' : 'unselected-country'}
              >
                India
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => handleCountryButtonClick('us')}
                className={selectedCountry === 'us' ? 'selected-country' : 'unselected-country'}
              >
                US
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Category" id="navbarScrollingDropdown">
              <NavDropdown.Item
                onClick={() => handleCategoryButtonClick('business')}
                className={selectedCategory === 'business' ? 'selected-Category' : 'unselected-Category'}
              >
                Business
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => handleCategoryButtonClick('sports')}
                className={selectedCategory === 'sports' ? 'selected-Category' : 'unselected-Category'}
              >
                Sports
              </NavDropdown.Item>
            </NavDropdown>


          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
