import React from "react";
import Button from "../atoms/Button";

const ButtonGroup = () => (
  <div className="flex space-x-2 mb-4">
    <Button onClick={() => console.log('Expand All clicked')}>Expand All</Button>
    <Button onClick={() => console.log('Collapse All clicked')}>Collapse All</Button>
  </div>
);

export default ButtonGroup;
