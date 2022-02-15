import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';
import './navbar.css';
import logo from '../../assets/images/bijaylogo.png';

export const TopNavbar = () => {
   return (
      <div className="navlists">
         <Navbar collapseOnSelect expand="md">
            <Container>
               <LinkContainer className="logo" to="/">
                  <Nav.Link>
                     <img src={logo} height="60px" alt="Logo" />
                  </Nav.Link>
               </LinkContainer>
               <Navbar.Toggle
                  aria-controls="basic-navbar-nav"
                  className="toggler"
               />
               <Navbar.Collapse id="basic-navbar-nav" className="toggler">
                  <Nav className="ms-auto lists">
                     <LinkContainer to="/Skills">
                        <Nav.Link>Skills</Nav.Link>
                     </LinkContainer>
                     <LinkContainer to="/Projects">
                        <Nav.Link>Projects</Nav.Link>
                     </LinkContainer>
                     <LinkContainer to="/About">
                        <Nav.Link>About</Nav.Link>
                     </LinkContainer>
                     <LinkContainer to="/Contact">
                        <Nav.Link>Contact</Nav.Link>
                     </LinkContainer>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </div>
   );
};
