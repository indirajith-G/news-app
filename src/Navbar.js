// Navbar.js

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './Navbar.css'; // Import your CSS file with styles

function NavScrollExample({ onCountryChange, onEndpointChange }) {
  const [selectedCountry, setSelectedCountry] = useState('in'); // Default selected country is 'in'
  const [selectedEndpoint, setSelectedEndpoint] = useState(''); // Default endpoint

  const handleCountryButtonClick = (newCountry) => {
    setSelectedCountry(newCountry);
    onCountryChange(newCountry);
  };

  const handleEndpointButtonClick = (newEndpoint) => {
    onEndpointChange(newEndpoint);
  };

  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand href="#">News App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
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
              {/* Add more country items */}
            </NavDropdown>

            <NavDropdown title="Category" id="navbarScrollingDropdown">
              <NavDropdown.Item
                onClick={() => handleEndpointButtonClick('top-headlines')}
                className={selectedEndpoint === 'top-headlines' ? 'selected-endpoint' : 'unselected-endpoint'}
              >
                Top-headlines
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => handleEndpointButtonClick('business')}
                className={selectedEndpoint === 'business' ? 'selected-endpoint' : 'unselected-endpoint'}
              >
                Business
              </NavDropdown.Item>
              {/* Add more country items */}
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
