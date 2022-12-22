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

  return (
    
      
      <div className="App">
        <WarningOverlay />
        <AddForm onNewUser={newUserHandler} />
        <NameAgeList data={userData} />
      </div>
    
  );
}

export default App;
