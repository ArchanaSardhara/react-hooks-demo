import React, { useState } from "react";
import Borad from "./borad";
import Person from "./person";

const UsersContext = React.createContext({
  user1: null,
  user2: null,
})

const CustomHook = () => {
  const context = React.useContext(UsersContext);

  const [activeUser, setActiveUser] = useState({
    userSign: null,
    name: '',
    isActive: true
  });
  const [nextUser, setNextUser] = useState({
    userSign: null,
    name: '',
    isActive: false
  });

  const togglePlayer = () => {
    const currentUser = { ...activeUser };
    const inActiveUser = { ...nextUser };
    setActiveUser({ ...inActiveUser, isActive: true });
    setNextUser({ ...currentUser, isActive: false });
  }

  const handleUserNameChange = (userType, value) => {
    if (userType === "activeUser") {
      setActiveUser({
        ...activeUser,
        name: value,
      })
      context.user1 = { ...activeUser, name: value };
    } else {
      setNextUser({
        ...nextUser,
        name: value,
      })
      context.user2 = { ...nextUser, name: value };
    }
  }

  const setUserSign = (sign) => {
    const nextUserSign = sign === "X" ? "O" : "X";
    setActiveUser({
      ...activeUser,
      userSign: sign,
    })
    setNextUser({
      ...nextUser,
      userSign: nextUserSign,
    })
    context.user1 = { ...activeUser, userSign: sign };
    context.user2 = { ...nextUser, userSign: nextUserSign };
  }

  const canStartGame = activeUser?.name && nextUser?.name && activeUser?.userSign && nextUser?.userSign;
  return canStartGame
    ? (
      <div className="d-flex justify-content-around">
        <Person user={context.user1} />
        <Borad activeUser={activeUser} nextUser={nextUser} togglePlayer={togglePlayer} />
        <Person user={context.user2} />
      </div>
    )
    : (
      <div className="d-flex align-items-center flex-column">
        <h4 className="my-4">Type user name and choose sign for fisrt player to start game!</h4>
        <div className="p-2">
          <label className="mr-3">User 1</label>
          <input placeholder="Please enter user name" onChange={(e) => handleUserNameChange("activeUser", e.target.value)} />
        </div>
        <div className="p-2">
          <label className="mr-3">User 2</label>
          <input placeholder="Please enter user name" onChange={(e) => handleUserNameChange("nextUser", e.target.value)} />
        </div>
        <div className="d-flex my-4">
          <div
            style={{ width: '100px', height: '100px', fontSize: '40px', marginLeft: "10px", marginRight: "10px" }}
            className="border bg-light d-flex justify-content-center align-items-center"
            onClick={() => setUserSign("X")}
          >
            <span>X</span>
          </div>
          <div
            style={{ width: '100px', height: '100px', fontSize: '40px', marginLeft: "10px", marginRight: "10px" }}
            className="border bg-light d-flex justify-content-center align-items-center"
            onClick={() => setUserSign("O")}
          >
            <span>O</span>
          </div>
        </div>
      </div>
    )
}

export default CustomHook;