import styled from "styled-components";
import Button from "./Button";
import { createPortal } from "react-dom";

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  /* display: none; */
  display: ${(props) => (props.hide ? "none" : "block")};

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
  const closeWarning = () => {
    props.onChangeWarningState({ state: false, title: "", message: "" });
  };

  return createPortal(
    <Overlay hide={!props.stateObj.state}>
      <div className="warning-dialogue">
        <h2>{props.stateObj.title}</h2>
        <p>{props.stateObj.message}</p>
        <Button onClick={closeWarning}>Okay</Button>
      </div>
    </Overlay>,
    document.getElementById("modal-root")
  );
};

export default WarningOverlay;
