import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";

const UseRefComponent = () => {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <div className="m-3 p-3 bg-light border border-info">
      <div className="w-100 text-center">
        <p>Used to give reference to user controled element.</p>
        <p>Here on button click we use input reference to focus.</p>
      </div>
      <div className="m-3 p-3 d-flex justify-content-center">
        <Form.Control className="w-25 mx-2" ref={inputEl} type="text" />
        <Button variant="outline-info" onClick={onButtonClick}>Focus the input</Button>
      </div>
    </div>
  );
}

export default UseRefComponent;