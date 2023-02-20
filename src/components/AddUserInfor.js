import React from "react";

class AddUserInfor extends React.Component {
  state = {
    name: "",
    address: "",
    age: "",
  };
  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnChangeAge = (event) => {
    this.setState({
      age: +event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddNewUser({
      id: this.props.listUsers.length + 1,
      name: this.state.name,
      age: +this.state.age,
    });
  };
  render() {
    return (
      <div>
        My name is {this.state.name} and my age is {this.state.age}
        <form action="" onSubmit={(e) => this.handleOnSubmit(e)}>
          <label>Your Name: </label>
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleOnChangeName(event)}
          />
          <label htmlFor="">Your Age: </label>
          <input
            type="text"
            value={this.state.age}
            onChange={(event) => this.handleOnChangeAge(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddUserInfor;
