import React from "react";
import {Navbar,Nav} from 'react-bootstrap';

function Footer() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/"></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="https://github.com/Destinyfleming">Github</Nav.Link>
      <Nav.Link href="https://www.linkedin.com/in/destiny-fleming-ab30541b3/?midToken=AQF79lE3i-n_Yw&midSig=0p8hdn4_kTA9A1&trk=eml-email_m2m_invite_digest_02-header-21-profile&trkEmail=eml-email_m2m_invite_digest_02-header-21-profile-null-ds2ejr%7Ekju7fb2a%7Eiw-null-neptune%2Fprofile%7Evanity%2Eview">LinkedIn</Nav.Link>
      <Nav.Link href="tel:541-852-7860"> CellPhone</Nav.Link>
      <Nav.Link href="mailto:flemingdestiny7401@gmail.com"> Email</Nav.Link>
    </Nav>
  </Navbar>
    </>
  );
}

export default Footer;