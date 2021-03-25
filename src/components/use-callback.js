import React, { useState, useCallback, useEffect } from "react";
import { Button } from "react-bootstrap";

let buttonWithCallback = 0;
let buttonWithoutCallback = 0;

const UseCallbackComponent = () => {
  const [count, setCount] = useState(0);
  const [otherCounter, setOtherCounter] = useState(0);

  if (!count && !otherCounter && (buttonWithCallback !== 0 || buttonWithoutCallback !== 0)) {
    buttonWithCallback = 0;
    buttonWithoutCallback = 0;
  }

  const incrementCounter = useCallback(() => {
    setCount(count + 1)
  }, [count])

  const incrementOtherCounter = () => {
    setOtherCounter(otherCounter + 1)
  }

  return (
    <div>
      <h3>Use Callback:</h3>
      <ul>
        <li>When parent compoent rerender every time new method for incement counter will created.</li>
        <li>When we wrap methods with callback it will create only when denpending value gets update</li>
        <li>So button compoent (passed method as props) wrapped without callback will rerender every time when parent component updates state because the new method is created each time.</li>
      </ul>
      <div className="d-flex justify-content-center flex-column align-items-center">
        <div className="border-bottom w-100 m-4"></div>
        <p className="m-2 font-weight-bold">Count with Callback: {count}</p>
        <ButtonComp type="callback" name="Increment Counter with Callback" handleClick={incrementCounter} text="Increment Counter with Callback" />
        <div className="border-bottom w-100 m-4"></div>
        <p className="m-2 font-weight-bold">Count without Callback: {otherCounter}</p>
        <ButtonComp type="no-callback" name="Increment Counter without Callback" handleClick={incrementOtherCounter} text="Increment Counter without Callback" />
      </div>
    </div>
  )
}

const ButtonComp = React.memo(({ text, handleClick, type }) => {

  useEffect(() => {
    if (type === "callback") buttonWithCallback += 1;
    if (type === "no-callback") buttonWithoutCallback += 1;
  })

  return (
    <div className="text-center">
      <Button className="m-2" variant="outline-info" onClick={handleClick}>{text}</Button><br />
      <span>Render: ({type === "callback" ? buttonWithCallback : buttonWithoutCallback})</span>
    </div>
  )
})

export default UseCallbackComponent;