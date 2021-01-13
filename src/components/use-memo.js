import React, { useEffect, useMemo, useState } from "react";
import { Button } from "react-bootstrap";

let stackWithMemo = 0;
let stackWithoutMemo = 0;

const UseMemoComponent = () => {
  const [stack1, setStack1] = useState(0);
  const [stack2, setStack2] = useState(0);
  if (!stack1 && !stack2 && (stackWithMemo !== 0 || stackWithoutMemo !== 0)) {
    stackWithMemo = 0;
    stackWithoutMemo = 0;
  }

  const stack1Comp = useMemo(() => <Stack1 stack={stack1} />, [stack1]);
  const stack2Comp = <Stack2 stack={stack2} />;


  return (
    <div>
      <div className="border border-info my-3 p-4">
        <div className="d-flex justify-content-center">
          <Button variant="outline-info" className="mx-2" onClick={() => setStack1(stack1 + 1)}>Stack with memo</Button>
          <Button variant="outline-info" className="mx-2" onClick={() => setStack2(stack2 + 1)}>Stack without memo</Button>
        </div>
        <p className="my-3 text-center">
          Stack without memo renders when stack 1 or stack 2 updates<br />
          Stack with memo renders only stack 1 updates<br />
        </p>
      </div>
      <div className="border border-info my-3 p-3">
        {stack1Comp}
      </div>
      <div className="border border-info my-3 p-3">
        {stack2Comp}
      </div>
    </div>
  )
}

const Stack1 = ({ stack }) => {
  useEffect(() => {
    stackWithMemo += 1;
  })
  return (
    <div className="text-center">
      <p className="display-4 font-weight-bold">
        Stack with memo
      </p>
      <p>Renders every time when props or parent compoent's respective state changes</p>
      <small>stack: {stack}</small><br />
      <small>render count: {stackWithMemo}</small>
    </div>
  )
}

const Stack2 = ({ stack }) => {
  useEffect(() => {
    stackWithoutMemo += 1;
  })
  return (
    <div className="text-center">
      <p className="display-4 font-weight-bold">
        Stack without memo
      </p>
      <p>Renders every time when props or parent compoent's any state changes</p>
      <small>stack: {stack}</small><br />
      <small>render count: {stackWithoutMemo}</small>
    </div>
  )
}

export default UseMemoComponent;