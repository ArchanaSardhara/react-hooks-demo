import React, { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";

const UseEffectComponent = () => {
  const divRef = useRef();
  const [rendered, setRendered] = useState(false);
  const [color, setColor] = useState("");

  useEffect(() => {
    if (!rendered) { setRendered(true); }
  }, [rendered])

  useEffect(() => {
    const confirmMsg = color ?
      `Are you sure you want to set new color? \nColor:${color}`
      : 'Are you sure you want to remove color?';

    if (rendered && window.confirm(confirmMsg)) {
      divRef.current.style.backgroundColor = color;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color])

  return <div className="m-5 p-5 border border-info bg-light">
    <Form className="my-3">
      <Form.Group>
        <Form.Label>Select Color</Form.Label>
        <Form.Control as="select" size="lg" custom onChange={e => setColor(e.target.value)}>
          <option value="">Select Color</option>
          <option value="red">red</option>
          <option value="green">green</option>
          <option value="pink">pink</option>
          <option value="blue">blue</option>
          <option value="yellow">yellow</option>
        </Form.Control>
      </Form.Group>
    </Form>

    <div ref={divRef} className="text-center p-5 my-3 d-block border border-info" >
      <p className="font-weight-bold display-4">
        Use Effect Hook changes color!<br />
        <small>This div changes color based on conformation in use effect hook.</small>
      </p>
    </div>
  </div>
}

export default UseEffectComponent;