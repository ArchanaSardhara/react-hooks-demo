import React, { useReducer } from "react";
import { Button } from "react-bootstrap";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const UseReducerComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h3 className="text-center">Count: {state.count}</h3>
      <div className="d-flex justify-content-center">
        <Button variant="outline-info" className="mx-3" onClick={() => dispatch({ type: 'decrement' })}>Decrement (-)</Button>
        <Button variant="outline-info" className="mx-3" onClick={() => dispatch({ type: 'increment' })}>Increment (+)</Button>
      </div>
    </div>
  );
}

export default UseReducerComponent;