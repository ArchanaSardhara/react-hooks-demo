import React, { useContext, useState } from "react";
import { Row, Col } from "react-bootstrap";

import { AppContext } from "./context";

const UseContextComponent = () => {
  const [count, setCount] = useState(5);
  const context = useContext(AppContext);
  return (
    <div>
      <div className="border border-info p-3">
        <p>Default context:</p>
        <pre className="border-top py-3">
          {JSON.stringify(context, null, 2)}
        </pre>
      </div>
      <AppContext.Provider value={{ count, setCount }}>
        <UseContextWithProvider />
      </AppContext.Provider>
      <UseContextWithoutProvider />
    </div>
  )
}

const UseContextWithoutProvider = () => {
  const context = useContext(AppContext);
  return (
    <div className="border border-info text-center p-5 my-4">
      <p className="font-weight-bold">
        useContext without context provider<br />
        <small>Count: {context.count}</small>
      </p>
    </div>
  )
}

const UseContextWithProvider = () => {
  const context = useContext(AppContext);
  return (
    <div className="border border-info text-center p-5 my-4">
      <p className="font-weight-bold">
        useContext with context provider<br />
        <span className="font-weight-normal">provider has value: {`{ value: ${context.count} }`}</span><br />
        <small>Count: {context.count}</small>
      </p>
      <input className="text-center" type="number" value={context.count} onChange={e => context.setCount(e.target.value)} />
      <Row>
        <Col>
          <UseContextWithProviderChild />
        </Col>
        <Col>
          <UseContextWithProviderChild />
        </Col>
      </Row>
    </div>
  )
}

const UseContextWithProviderChild = () => {
  const context = useContext(AppContext);
  return (
    <div className="border border-info text-center p-5 my-4">
      <p className="font-weight-bold">
        provider passes value to all Child Component tree<br />
        <small>Count: {context.count}</small>
      </p>
    </div>
  )
}


export default UseContextComponent;