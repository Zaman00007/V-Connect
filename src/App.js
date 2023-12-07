import React from "react";
import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import Left from "./Left";
import Centre from "./Centre";
import Right from "./Right";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" />
          <Nav className="App-header" />

          <div className="Hero">
            <Left className="Left" />
            <Centre
              className="Centre"
              names={[
                { id: "Sam Desai", event: "Hackathon" },
                { id: "Rema Thakur", event: "Dance-ball" },
                { id: "Mansi Bhagoria", event: "Bike-Rider" },
              ]}
            />

            <Right className="Right" />
          </div>
          </Route >
          <Route path="/about" />
          <About/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
