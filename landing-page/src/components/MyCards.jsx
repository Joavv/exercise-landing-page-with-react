import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";

const MyCards = () => {
  return (
    <CardDeck className="pb-4">
      <Card>
        <Card.Img variant="top" src="https://picsum.photos/id/1/500/325" />
        <Card.Body>
          <Card.Title className="text-center">Card title</Card.Title>
          <Card.Text className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <Button variant="primary">Find Out More!</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://picsum.photos/id/2/500/325" />
        <Card.Body>
          <Card.Title className="text-center">Card title</Card.Title>
          <Card.Text className="text-center">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <Button variant="primary">Find Out More!</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://picsum.photos/id/3/500/325" />
        <Card.Body>
          <Card.Title className="text-center">Card title</Card.Title>
          <Card.Text className="text-center">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <Button variant="primary">Find Out More!</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://picsum.photos/id/4/500/325" />
        <Card.Body>
          <Card.Title className="text-center">Card title</Card.Title>
          <Card.Text className="text-center">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <Button variant="primary">Find Out More!</Button>
        </Card.Footer>
      </Card>
    </CardDeck>
  );
};

export default MyCards;
