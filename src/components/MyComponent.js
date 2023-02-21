import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
const MyComponent = (props) => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "HoidanIT", age: 30 },
    { id: 2, name: "Bi Nguyen", age: 29 },
    { id: 3, name: "HaryPhamDev", age: 38 },
    { id: 4, name: "Trung Tu le", age: 19 },
  ]);
  const handleAddNewUser = (userObj) => {
    setListUsers([userObj, ...listUsers]);
  };

  const handleDeleteUser = (userId) => {
    let newList = listUsers.filter((item) => item.id !== userId);
    setListUsers(newList);
  };

  return (
    <React.Fragment>
      <div className="a">
        <AddUserInfor
          listUsers={listUsers}
          handleAddNewUser={handleAddNewUser}
        />
      </div>
      <hr />
      <div className="b">
        <DisplayInfor
          listUsers={listUsers}
          handleDeleteUser={handleDeleteUser}
        />
      </div>
    </React.Fragment>
  );
};

export default MyComponent;
