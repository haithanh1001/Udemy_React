import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <UserInfor />
        <DisplayInfor name="HoidanIT" age={30}/>
      </div>
    );
  }
}

export default MyComponent;
