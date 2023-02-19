import React from "react";
import AddUserInfor from "./AddUserInfor";
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
  handleAddNewUser = (userObj) => {
    this.setState({
      listUsers: [...this.state.listUsers, userObj],
    });
  };
  render() {
    const { listUsers } = this.state;
    const test = 45;
    const test1 = "bi nguyen la toi";
    return (
      <React.Fragment>
        {JSON.stringify(listUsers)}
        <div className="a">
          <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
        </div>
        <hr />
        <div className="b">
          <DisplayInfor listUsers={listUsers} />
        </div>
      </React.Fragment>
    );
  }
}

export default MyComponent;
