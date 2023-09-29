import React from 'react'
import CartWidget from './CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/"> JoaFra </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown to="/categories" title="Categories" id="basic-nav-dropdown" active>
              <NavDropdown.Item as={Link} to="/categories/electronics">Electronics</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categories/jewelery">Jewelry</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categories/men's clothing">Men's clothing</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categories/women's clothing">Women's clothing</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;
