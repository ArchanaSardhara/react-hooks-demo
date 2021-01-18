import React, { useImperativeHandle, useRef, useState } from "react";
import { Button } from "react-bootstrap";

const UseImperativeHandleComponent = () => {
  const childRef = useRef();

  const setCount = (offset) => {
    childRef.current.setCount(offset)
  }

  return (
    <div className="m-3 p-3 bg-light border border-info d-flex flex-column align-items-center">
      <div className="w-100 text-center">
        <p>Using useImperativeHandle we can access child component methods from the parent component.</p>
        <p>Here parent component button's have reference to child methods.</p>
      </div>
      <div>
        <Button variant="outline-info" className="mx-3" onClick={() => setCount(1)}>Increment (+)</Button>
        <Button variant="outline-info" className="mx-3" onClick={() => setCount(-1)}>Decrement (-)</Button>
      </div>
      <div className="m-5 p-3 border border-info d-inline-flex flex-column">
        <h3>Child component</h3>
        <UseImperativeHandleChild ref={childRef} />
      </div>
    </div>
  )
}
const UseImperativeHandleChild = React.forwardRef((props, ref) => {
  const [count, updateConut] = useState(0);

  useImperativeHandle(ref, () => ({
    setCount
  }));

  const setCount = (offset) => {
    updateConut(count + offset)
  }
  return (
    <div>
      <h4 className="text-center">Count: {count}</h4>
      <div className="d-flex justify-content-center">
        <Button variant="outline-info" className="mx-3" onClick={() => setCount(1)}>Increment (+)</Button>
        <Button variant="outline-info" className="mx-3" onClick={() => setCount(-1)}>Decrement (-)</Button>
      </div>
    </div>
  )
})

export default UseImperativeHandleComponent;