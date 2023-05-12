import React from 'react';
import { Navbar, Nav, NavbarBrand, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

const links = [
  { name: 'Clusters', url: '/clusters' },
  // { name: 'Repositories', url: '/repo' },
  // { name: 'Config', url: '/config' },
];

const CustomNavbar = () => {
  return (
    <Container fluid className='pt-2 mb-4'>
    <Navbar bg="light" variant="light" expand="lg" className="shadow-sm rounded border">
      <Container fluid>
      <LinkContainer to="/">
        <Navbar.Brand>Stackd</Navbar.Brand>
        </LinkContainer>
      
        
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {links.map((link, index) => (
          <LinkContainer key={index} to={link.url}>
          <Nav.Link>{link.name}</Nav.Link>
          </LinkContainer>          
          ))}
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
  );
};

export default CustomNavbar;
