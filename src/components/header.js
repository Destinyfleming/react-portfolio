import React from "react";
import {Navbar,Nav} from 'react-bootstrap';

function Header() {
  
  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Destiny Fleming</Navbar.Brand>
    <Nav className="d-flex justify-content-end">
      <Nav.Link href="#contact"> Contact</Nav.Link>
      <Nav.Link href="#portfolio"> Portfolio</Nav.Link>
    </Nav>
  </Navbar>
    </>
  );
}

export default Header;