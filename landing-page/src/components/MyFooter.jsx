import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const MyFooter = () => {
  return (
    <Navbar bg="dark" expand="sm" variant="dark" sticky="bottom">
      <Container className="justify-content-center py-4">
        <p className="text-light my-auto">Copyright @ Your Website 2020</p>
      </Container>
    </Navbar>
  );
};

export default MyFooter;
