import React, { useReducer, useState } from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import { USER_DATA } from "./const";

const initialState = { data: [] };
const initialData = {
  _id: "",
  status: false,
  name: "",
  gender: "",
  email: "",
  phone: ""
}

function reducer(state, action) {
  let newData = JSON.parse(JSON.stringify(state.data));
  switch (action.type) {
    case 'edit':
      newData[action.payload.index] = action.payload.data;
      return { data: newData };
    case 'delete':
      newData.splice(action.payload.index, 1);
      return { data: newData };
    case 'add':
      return { data: [...newData, initialData] }
  }
}


const UseReducerComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
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
  const [modal, opencloseModal] = useState(false);

  return <div className="m-3 p-3 bg-light border border-info">
    <div className="d-flex justify-content-between">
      <h4>{user.name}</h4>
      <Button variant="outline-info" className="button-icon px-2 py-0" onClick={() => opencloseModal(!modal)}>&#10000;</Button>
    </div>
    <div className="border-top border-info w-100 my-3"></div>
    <div className="d-flex justify-content-between align-items-center">
      <span>
        {user.email}<br />
        {user.phone}</span>
      <span> {user.gender}</span>
    </div>
    <Modal show={modal} onHide={() => opencloseModal(!modal)} centered>
      <Modal.Header closeButton>Edit User</Modal.Header>
      <Modal.Body>

      </Modal.Body>
    </Modal>
  </div >
  {/* <div className="custom-control custom-switch">
      <input
        type="checkbox"
        id={data._id}
        className="custom-control-input"
        checked={data.status}
        onChange={e => setUser({ ...data, status: e.target.checked })}
      />

      <label className="custom-control-label" htmlFor={user._id}></label>
    </div> */}
}

export default UseReducerComponent;