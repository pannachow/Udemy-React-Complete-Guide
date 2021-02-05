import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = (props) => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
  });

  const switchNameHandler = (name) => {
    setPersonState({
      persons: [
        { name: "Jan", age: 28 },
        { name: name, age: 29 },
        { name: "Stephanie", age: 26 },
      ],
    });
  };

  const nameChangedHandler = (event) => {
    setPersonState({
      persons: [
        { name: "Jan", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 26 },
      ],
    });
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1x solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App.</h1>
      <button 
      style={style}
      onClick={() => switchNameHandler('Max!!')}>Switch Name</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      />
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
        click={switchNameHandler.bind(null, 'Max22!')}
        changed={nameChangedHandler}
      >
        My Hobbie: Racing
      </Person>
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age}
      />
    </div>
  );
};

export default App;
