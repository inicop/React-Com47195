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
              <NavDropdown.Item as={Link} to="/categories/computadoras">Computadoras</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categories/celulares">Celulares</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categories/tablets">Tablets</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/user">User</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;
