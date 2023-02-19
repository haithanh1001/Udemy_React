import React from "react";
import "./DisplayInfor.scss"
class DisplayInfor extends React.Component {
  state = {
    isShowHide: true,
  };
  handleShowHide = (e) => {
    this.setState({
      isShowHide: !this.state.isShowHide,
    });
  };
  render() {
    // console.log(this.props);
    const { listUsers } = this.props;
    // console.log(listUsers);
    return (
      <div className='display-infor-container'>
        <button onClick={(e) => this.handleShowHide(e)}>
          {this.state.isShowHide === true ? "Hide" : "Show"}
        </button>
        {this.state.isShowHide && (
          <div>
            {listUsers.map((user) => {
              // console.log(">>>Check map user: ", user);
              return (
                <div key={user.id} className={+user.age > 30 ? "red" : "green"}>
                  <div>My Name is {user.name}</div>
                  <div>My Age is {user.age}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfor;
