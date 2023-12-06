import React from "react";
import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import Left from "./Left";
import Centre from "./Centre";

function App() {
  return (
    <div className="App">
       <Nav className="App-header" />
       <div className="Hero">
         <Left />
         <Centre />
       </div>
    </div>

);
}

export default App;
