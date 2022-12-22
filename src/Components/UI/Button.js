import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  height: 2.5em;
  border-radius: 0.5em;
  display: block;
  margin : 0.5em auto;
  /* margin-bottom: 0.5em; */

  background-color: #11408c;
  color: white;
  border-style: none;

  @media (min-width: 480px) {
    width: 6em;
    margin-left: auto;
    margin-right: 1.3em;
  }
`;

export default Button;