import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { USER_DATA } from "./const";
import { useStatus } from "./use-status";

const UseDebugValueComponent = () => {

  return (
    <div>
      <div>
        <h3>Use Debug Value Hook</h3>
        <ul>
          <li>useDebugvalue is use to debug react Component.</li>
          <li>We can use this hook into custom hooks.</li>
          <li>In USer Component, the useStatus (custom hook) is used we can see the status of use in react devtool.</li>
        </ul>
      </div>
      <Row>
        {USER_DATA.map(user => <Col sm={6} key={user._id}>
          <User user={user} />
        </Col>)}
      </Row>
    </div>
  )
}

const User = ({ user }) => {
  const [data, setUser] = useState(user);
  useStatus(data);

  return <div className="m-3 p-3 bg-light border border-info d-flex justify-content-between">
    <div>
      <b>{user.name}</b>
      <br />
      <span>{user.email}</span><br />
      <span>{user.phone} ({user.gender})</span>
    </div>
    <div className="custom-control custom-switch">
      <input
        type="checkbox"
        id={data._id}
        className="custom-control-input"
        checked={data.status}
        onChange={e => setUser({ ...data, status: e.target.checked })}
      />

      <label className="custom-control-label" htmlFor={user._id}></label>
    </div>
  </div>
}

export default UseDebugValueComponent;


