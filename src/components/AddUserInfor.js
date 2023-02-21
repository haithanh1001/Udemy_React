import React from "react";
import { useState } from "react";

const AddUserInfor = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");

  const handleOnChangeName = (event) => {
    setName(event.target.value);
  };
  const handleOnChangeAge = (event) => {
    setAge(+event.target.value);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddNewUser({
      id: props.listUsers.length + 1,
      name: name,
      age: age,
    });
  };

  return (
    <div>
      My name is {name} and my age is {age}
      <form action="" onSubmit={(event) => handleOnSubmit(event)}>
        <label>Your Name: </label>
        <input
          type="text"
          value={name}
          onChange={(event) => handleOnChangeName(event)}
        />
        <label htmlFor="">Your Age: </label>
        <input
          type="text"
          value={age}
          onChange={(event) => handleOnChangeAge(event)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUserInfor;
