import Wrapper from "../UI/Wrapper";
import styled from "styled-components";
import { useState } from "react";
import Button from "../UI/Button";

const FormControl = styled.div`
  & label,
  & input {
    display: block;
    text-align: left;
    margin: 0.2em 0.2em;
  }

  .input-control {
    padding: 0 0.4em;
  }

  & input {
    width: 95.5%;
    padding: 0.4em;
    border-style: solid;
    border-width: 1px;
    border-color: #c2c2c2;
  }

  & input:focus {
    outline: none;
    background: #e6eefa;
    /* border-color: #8b005d; */
  }
`;

const AddForm = (props) => {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");

  const nameHandler = (event) => {
    setNewName(event.target.value);
  };
  const ageHandler = (event) => {
    setNewAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const newUser = { id: Math.random(), name: newName, age: newAge };
    props.onNewUser(newUser);
    setNewName("");
    setNewAge("");
  };

  return (
    <Wrapper>
      <form onSubmit={submitHandler}>
        <FormControl>
          <div className="input-control">
            <label>
              <b>Username</b>
            </label>
            <input type="text" onChange={nameHandler} value={newName}></input>
          </div>
          <div className="input-control">
            <label>
              <b>Age (Years)</b>
            </label>
            <input
              type="number"
              step="1"
              onChange={ageHandler}
              value={newAge}
            ></input>
          </div>
        </FormControl>
        <Button type="submit">Submit</Button>
      </form>
    </Wrapper>
  );
};

export default AddForm;
