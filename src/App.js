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
         <Left className="Left-Row"/>
         <Centre className="Centre"/>
          <Right className="Right"/>
       </div>
    </div>

);
}

export default App;
