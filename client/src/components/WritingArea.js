import React from "react";
import { Form } from "react-bootstrap";

function WritingArea() {
  return (
    <Form.Control
      as="textarea"
      placeholder="Tell us a story..."
      style={{ height: "500px" }}
    />
  );
}

export default WritingArea;
