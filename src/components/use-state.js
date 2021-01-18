import React, { useState } from "react";
import { Button } from "react-bootstrap";

const UseStateComponent = () => {
  const [count, setCount] = useState(0);

  const updeteCount = (offSet) => {
    if (offSet) {
      setCount(count + offSet);
    } else {
      setCount(0);
    }
  }

  return (
    <div className="m-5 p-5 border border-info bg-light">
      <h3 className="text-center text-info">Count: {count}</h3>
      <div className="mt-5 d-flex justify-content-center">
        <Button className="mx-2" variant="outline-success" onClick={() => updeteCount(1)}>Increase</Button>
        <Button className="mx-2" variant="outline-secondary" onClick={() => updeteCount(0)}>Reset</Button>
        <Button className="mx-2" variant="outline-danger" onClick={() => updeteCount(-1)}>Decrease</Button>
      </div>
    </div>
  )
}

export default UseStateComponent;