import React from 'react'
import Landing from './components/Landing/Landing';
import Allevents from './components/Allevents/Allevents'
import Createevents from './components/Createevents/Createevents'
import Friends from './components/Friends/Friends'
import Signup from './components/Signup/Signup'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Aboutus from './components/Aboutus/Aboutus'
import Home from './components/Home/Home'
import PrivateRoute from "./PrivateRoute";
import Unauthorized from './Unauthorized'


const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact >
            <Landing/>
          </Route>
          <Route path="/friend" exact >
            <Friends/>
          </Route>
          <Route path="/signup" exact >
            <Signup/>
          </Route>
          <PrivateRoute path="/home" exact >
            <Home/>
          </PrivateRoute>
          <Route path="/all" exact >
            <Allevents/>
          </Route>
          <Route path="/about" exact >
            <Aboutus/>
          </Route>
          <Route path="/Unauthorized" exact >
            <Unauthorized/>
          </Route>
          
          <Route path="/events" exact >
            <Createevents/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
