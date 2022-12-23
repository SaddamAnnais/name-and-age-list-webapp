import "./App.css";
import NameAgeList from "./Components/NameAge/NameAgeList";
import AddForm from "./Components/AddForm/AddForm";
import { useState } from "react";
import WarningOverlay from "./Components/UI/WarningOverlay";

function App() {
  const [userData, setUserData] = useState([{ id: 1, name: "max", age: "20" }]);

  const newUserHandler = (newUser) => {
    // console.log(newUser);

    setUserData((prevUserData) => {
      const updatedUserData = [...prevUserData];
      updatedUserData.unshift(newUser);
      return updatedUserData;
    });
  };

  const [warningState, setWarningState] = useState({
    state: false,
    title: "",
    message: "",
  });

  const changeWarningStateHandler = (stateObj) => setWarningState(stateObj);

  return (
    <div className="App">
      <WarningOverlay
        stateObj={warningState}
        onChangeWarningState={changeWarningStateHandler}
      />
      ;
      <AddForm
        onNewUser={newUserHandler}
        onChangeWarningState={changeWarningStateHandler}
      />
      <NameAgeList data={userData} />
    </div>
  );
}

export default App;
