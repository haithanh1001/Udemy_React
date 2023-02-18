import React from "react";

class DisplayInfor extends React.Component {
  render() {
    // console.log(this.props);
    const { listUsers } = this.props;
    return (
      <div>
        {listUsers.map((user) => {
          return (
            <div key={user.id}>
              <div>My Name is {user.name}</div>
              <div>My Age is {user.age}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default DisplayInfor;
