import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";

const UseLayoutEffectComponent = () => {
  const [count, setCount] = useState(10);
  const boxRef = useRef()

  useLayoutEffect(() => {
    boxRef.current.style.width = `${count}px`;
    boxRef.current.style.height = `${count}px`;
  })

  const updeteCount = (offSet) => {
    if (offSet) {
      setCount(count + offSet);
    } else {
      setCount(10);
    }
  }

  return (
    <div className="m-5 p-5 border border-info bg-light d-flex flex-column justify-content-center align-items-center">
      <div ref={boxRef} className="box bg-info mb-3"></div>
      <h3 className="text-center text-info">Count: {count}</h3>
      {count < 0 && <span className="text-danger">Reset the count to see visital effect on box.</span>}
      <div className="mt-2 d-flex justify-content-center">
        <Button className="mx-2" variant="outline-success" onClick={() => updeteCount(1)}>Increase</Button>
        <Button className="mx-2" variant="outline-secondary" onClick={() => updeteCount(0)}>Reset</Button>
        <Button className="mx-2" variant="outline-danger" onClick={() => updeteCount(-1)}>Decrease</Button>
      </div>
    </div>
  )
}

export default UseLayoutEffectComponent;