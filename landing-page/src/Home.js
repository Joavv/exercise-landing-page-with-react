import React from "react";
import MyNavbar from "./components/MyNavbar";
import MyJumbotron from "./components/MyJumbotron";
import MyCards from "./components/MyCards";
import MyFooter from "./components/MyFooter";
import Container from "react-bootstrap/Container";

function Home() {
  return (
    <>
      <MyNavbar />
      <Container className="pt-4">
        <MyJumbotron />
        <MyCards />
      </Container>
      <MyFooter />
    </>
  );
}

export default Home;
