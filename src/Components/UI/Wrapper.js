import styled from "styled-components";

const Wrapper = styled.div`
  margin :1em auto;
  padding: 0.5em;
  background-color: white;
  text-align: center;
  border-radius: 0.5em;
  
  width: auto;
  @media (min-width: 640px) {
    width: 640px;
  }
`;

export default Wrapper;
