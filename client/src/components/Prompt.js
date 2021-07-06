import React from "react";
import { Card, Button } from "react-bootstrap";

function Prompt() {
  return (
    <Card className="text-center">
      <Card.Header>Prompt</Card.Header>
      <Card.Body>
        <Card.Text>It was a dark and stormy night...</Card.Text>
        <Button variant="primary">New Prompt</Button>
      </Card.Body>
    </Card>
  );
}

export default Prompt;
