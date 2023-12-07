import React from "react";
import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import Left from "./Left";
import Centre from "./Centre";
import Right from "./Right";

function App() {
  return (
    <div className="App">
      <Nav className="App-header" />
      <div className="Hero">
        <Left className="Left" />
        <Centre
          className="Centre"
          names={[
            { id: "Sam Desai", event: "Hackathon" },
            { id: "Rema Thakur", event: "Dance-ball" },
            { id: "Mansi Bhagoria", event: "Bike-Rider" },
            { id: "Ashutosh Dwivedi", event: "Differential Notes" },
          ]}
        />

        <Right className="Right" />
      </div>
    </div>
  );
}

export default App;
