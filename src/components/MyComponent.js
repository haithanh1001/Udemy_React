import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "HoidanIT", age: 30 },
      { id: 2, name: "Bi Nguyen", age: 29 },
      { id: 3, name: "HaryPhamDev", age: 38 },
      { id: 4, name: "Trung Tu le", age: 19 },
    ],
  };
  render() {
    const {listUsers} = this.state;
    return (
      <div>
        <UserInfor />
        <hr/>
        <DisplayInfor listUsers={listUsers} />
      </div>
    );
  }
}

export default MyComponent;
