// import React from "react";
// import "./App.css";
// import Nav from "./components/Nav/Nav";
// import Home from "./components/Home/Home";
// import Left from "./components/Left/Left";
// import Centre from "./components/Centre/Centre";
// import Right from "./components/Right/Right";
// import Signup from "./components/Signup/Signup";
// import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
// import About from "./components/About/About";

// import { useState, useEffect } from 'react';
// import Landing from "./components/Landing/Landing";

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch('http://localhost:8800/')
//       .then((response) => response.json())
//       .then((data) => setData(data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);
//   console.log(data);
//   return (
//     <Router>
//       <div className="App">
//       <Nav className="App-header" />
//         <Switch>
//           <Route path="/" exact>


//             <div className="Hero">
//               <Left className="Left" name={{ username: 'Aviator', age: 25, gender: 'male', year: 2022 }} />
//               <Centre
//                 className="Centre"
//                 names={[
//                   { id: "Sam Desai", event: "Hackathon" },
//                   { id: "Rema Thakur", event: "Dance-ball" },
//                   { id: "Mansi Bhagoria", event: "Bike-Rider" },
//                 ]}
//               />
//               <Right className="Right" />
//             </div>
//           </Route>
//           <Route path="/about" exact>
//             <About />
//           </Route>
//           <Route path="/Signup" exact>
//             <Signup />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );

// }

// export default App;

import React from 'react'
import Landing from './components/Landing/Landing';
// import Allevents from './components/Allevents/Allevents'
// import Createevents from './components/Createevents/Createevents'
// import Friends from './components/Friends/Friends'
import Aboutus from './components/Aboutus/Aboutus'
import Home from './components/Home/Home'

const App = () => {
  return (
    <div>
      {/* <Landing/> */}
      <Aboutus/>
      {/* <Home/> */}
    </div>
  )
}

export default App
