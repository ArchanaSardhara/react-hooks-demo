import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";

import { AppContext } from "./context";

const UseContextComponent = () => {
  const context = useContext(AppContext);
  console.log('context', context)
  return (
    <div>
      <div className="border border-info p-3">
        <p>Default context:</p>
        <pre className="border-top py-3">
          {JSON.stringify(context, null, 2)}
        </pre>
      </div>
      <AppContext.Provider value={{ count: 5 }}>
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
        <span className="font-weight-normal">provider has value: {`{ value: 5 }`}</span><br />
        <small>Count: {context.count}</small>
      </p>
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