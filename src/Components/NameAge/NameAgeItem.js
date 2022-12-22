import styled from "styled-components";

const TextBox = styled.p`
  padding:0.4em;
  margin:0.5em;
  text-align: left;
  border-style: solid;
  border-color: #c2c2c2;
  border-width: 1px;
`

const NameAgeItem = props => {
  return (
    <TextBox>{props.name} ({props.age} years old)</TextBox>
  )
}

export default NameAgeItem;