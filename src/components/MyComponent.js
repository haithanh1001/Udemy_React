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
    console.log(userObj);
    this.setState({
      listUsers: [userObj, ...this.state.listUsers],
    });
  };

  handleDeleteUser = (userId) => {
    let newList = this.state.listUsers.filter((item) => item.id !== userId);
    this.setState({
      listUsers: newList,
    });
  };
  render() {
    const { listUsers } = this.state;
    return (
      <React.Fragment>
        <div className="a">
          <AddUserInfor
            listUsers={listUsers}
            handleAddNewUser={this.handleAddNewUser}
          />
        </div>
        <hr />
        <div className="b">
          <DisplayInfor
            listUsers={listUsers}
            handleDeleteUser={this.handleDeleteUser}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default MyComponent;
