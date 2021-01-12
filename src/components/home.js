import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import { HOOKLIST } from "./const";

const Home = (props) => {

  const redirectToHook = (hook) => {
    props.history.push(`/:${hook.name}`)
  }

  return (
    <Container fluid>
      <Row>
        {HOOKLIST.map((hook, index) => (
          <Col md={4} sm={6} key={index}>
            <Card className="m-3 text-center bg-light" onClick={() => redirectToHook(hook)}>
              <Card.Body className="my-5">
                <h5>{hook.title}</h5>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Home;