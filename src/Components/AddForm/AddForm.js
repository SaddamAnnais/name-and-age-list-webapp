import Wrapper from "../UI/Wrapper";
import styled from "styled-components";
import { useRef } from "react";
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
  const inputNameRef = useRef();
  const inputAgeRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = inputNameRef.current.value;
    const enteredAge = inputAgeRef.current.value;

    if (enteredName.trim().length !== 0 && enteredAge.trim().length !== 0) {
      if (parseInt(enteredAge) > 0) {
        const newUser = {
          id: Math.random(),
          name: enteredName,
          age: enteredAge,
        };
        props.onNewUser(newUser);
        inputNameRef.current.value = "";
        inputAgeRef.current.value = "";
      } else {
        props.onChangeWarningState({
          state: true,
          title: "Invalid Input",
          message: "Please enter a valid age (Age > 0)",
        });
      }
    } else {
      props.onChangeWarningState({
        state: true,
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)",
      });
    }
  };

  return (
    <Wrapper>
      <form onSubmit={submitHandler}>
        <FormControl>
          <div className="input-control">
            <label htmlFor="username">
              <b>Username</b>
            </label>
            <input id="username" type="text" ref={inputNameRef}></input>
          </div>
          <div className="input-control">
            <label htmlFor="age">
              <b>Age (Years)</b>
            </label>
            <input id="age" type="number" step="1" ref={inputAgeRef}></input>
          </div>
        </FormControl>
        <Button type="submit">Submit</Button>
      </form>
    </Wrapper>
  );
};

export default AddForm;
