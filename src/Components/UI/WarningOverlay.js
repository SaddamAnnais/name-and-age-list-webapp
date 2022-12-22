import styled from "styled-components";
import Button from "./Button";

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  /* display: none; */
  display: block;

  & .warning-dialogue {
    border-radius: 0.5em;
    margin: 10% auto;
    background-color: white;
    padding-bottom: 0.5em;

    width: auto;
    @media (min-width: 640px) {
      width: 640px;
    }
    & h2 {
      background-color: #003170;
      border-radius: 0.3em 0.3em 0 0;
      color: white;
      text-align: justify;
    }
    & p,
    & h2 {
      padding: 0.5em;
      margin: 0;
    }
  }
`;

const WarningOverlay = (props) => {
  return (
    <Overlay>
      <div className="warning-dialogue">

          <h2>Test title</h2>
          <p>
            Test desc Test descTest descTest descTest descTest descTest descTest
            descTest descTest descTest descTest descTest descTest desc
          </p>

        <Button >Okay</Button>
      </div>
    </Overlay>
  );
};

export default WarningOverlay;
