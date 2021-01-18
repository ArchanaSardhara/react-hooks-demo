import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { HOOKLIST } from "./const";

const Hooks = (props) => {
  const { hook } = useParams();
  const [ActiveHook, setActiveHook] = useState(null);

  useEffect(() => {
    const _hook = HOOKLIST.find(h => `:${h.name}` === hook);
    setActiveHook(_hook);
  }, [ActiveHook])

  const redirectToHook = (data) => {
    if (data) {
      setActiveHook(null);
      props.history.push(`/:${data.name}`);
    } else {
      props.history.push('/')
    }
  }

  if (!ActiveHook) {
    return <div>Loading...</div>
  }

  return (
    <div className="h-100">
      <Card className="h-100">
        <Card.Header>
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <h1 className="m-0 text-info">{ActiveHook.title}</h1>
            </div>
            <div className="d-flex align-items-center">
              <Button variant="info" className="mx-2 my-1 d-flex align-items-center" onClick={() => redirectToHook(null)}>
                <span className="button-icon">&#10158;</span> Back
              </Button>
              <Button variant="info" className="mx-2 my-1 d-flex align-items-center" onClick={() => redirectToHook(ActiveHook)}>
                <span className="button-icon">&#8635;</span>  Refresh
          </Button>
            </div>
          </div>
        </Card.Header>
        <Card.Body className="p-3">
          <ActiveHook.Component />
        </Card.Body>
      </Card>
    </div>
  )
}

export default Hooks;