import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

const MyJumbotron = () => {
  return (
    <Jumbotron>
      <h1>A Warm Welcome!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <Button variant="primary">Call to action!</Button>
    </Jumbotron>
  );
};

export default MyJumbotron;
