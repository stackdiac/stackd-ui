import React from 'react';
import { Nav, Navbar, NavbarBrand, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    
    <Nav defaultActiveKey="/" className="flex-column">
    
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/about" className="nav-link">
        About
      </NavLink>
    </Nav>

  );
};

export default Sidebar;
