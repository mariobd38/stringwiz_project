import { Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react';
import './App.css';
import Home from "./Home/home";
import HomePage from "./HomePage/homePage";
import Login from "./Login/login";
import SignUp from "./SignUp/signUp";
import PrivateRoute from "./PrivateRoute/privateRoute";

function App() {
  // const [userEmail, setUserEmail] = useLocalState("", "userEmail");
  // const [userTasks, setUserTasks] = useLocalState([], "userTasks");


  return (
    <Routes>
      <Route path="/home" element={
        <PrivateRoute>
          <Home/> 
        </PrivateRoute>
      } />

      <Route path="/login" element={<Login/> } />

      <Route path="/signUp" element={<SignUp/> } />

      <Route path="/" element={<HomePage/> } />

    </Routes>
  );
}

export default App;


// "http-proxy-middleware": "^2.0.6",

// "options": {
//   "allowedHosts": ["localhost", ".localhost"],
//   "proxy": "http://localhost:8080/"
// },