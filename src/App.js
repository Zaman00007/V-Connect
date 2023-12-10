import React from "react";
import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import Left from "./Left";
import Centre from "./Centre";
import Right from "./Right";
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import About from "./About";
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8800/')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  console.log(data);
  return (
    <Router>
      <div className="App">
      <Nav className="App-header" />
        <Switch>
          <Route path="/" exact>
            

            <div className="Hero">
              <Left className="Left" name={{ username: 'Aviator', age: 25, gender: 'male', year: 2022 }} />
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
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
