import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const MyNavbar = () => {
  return (
    <Navbar bg="dark" expand="sm" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#">Start Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="collapse-nav" />
        <Navbar.Collapse id="collapse-nav">
          <Nav className="ml-auto" defaultActiveKey="#Home">
            <Nav.Item>
              <Nav.Link href="#Home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#About">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#Services">Services</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#Contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
