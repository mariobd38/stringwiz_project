import { Routes, Route, useLocation } from "react-router-dom";
import React from 'react';
import './App.css';
// import Home from "./components/Home/home";
import NewHome from "./components/Home/newHome";
import TaskDetailsModal from "./components/Home/TaskDetailsModal/taskDetailsModal";
import LandingPage from "./components/Landing/LandingPage";
import Login from "./components/Login/login";
import SignUp from "./components/SignUp/signUp";
import PrivateRoute from "./PrivateRoute/privateRoute";

function App() {
  // const [userEmail, setUserEmail] = useLocalState("", "userEmail");
  // const [userTasks, setUserTasks] = useLocalState([], "userTasks");
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <Routes>
      <Route path="/home" location={background || location} element={
        <PrivateRoute>
          {/* <Home/>  */}
          <NewHome />
        </PrivateRoute>
      }>
        <Route path='/home/modal' element={<TaskDetailsModal />} />
      </Route>
      {background && (
          <Route path="/home/modal" element={
            <PrivateRoute>
          <TaskDetailsModal/>
          </PrivateRoute>
          } />
      )}


      <Route path="/login" element={<Login/> } />

      <Route path="/signUp" element={<SignUp/> } />

      <Route path="/" element={<LandingPage/> } />

    </Routes>
  );
}

export default App;