import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample({ onCountryChange }) {
    const handleCountryButtonClick = (newCountry) => {
        onCountryChange(newCountry);
      };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">News App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link >Top Headlines</Nav.Link>
            <NavDropdown title="Country" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => handleCountryButtonClick('us')}>US</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleCountryButtonClick('in')}>India</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>Sports</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
