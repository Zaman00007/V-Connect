import React from "react";
import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import Left from "./Left";

function App() {
  return (
    <div className="App">
      <Nav className="App-header" />
      <Left />
      {/* <Home /> */}
    </div>
  );
}

export default App;
