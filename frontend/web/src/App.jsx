import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import React from 'react';
import Cookies from 'js-cookie';

import NewHome from "./components/Home/newHome";
import TaskDetailsModal from "./components/Home/TaskDetailsModal/taskDetailsModal";
import LandingPage from "./components/Landing/LandingPage";
import Login from "./components/Login/login";
import NewSignUp from "./components/NewSignUp/NewSignUp";
import PrivateRoute from "./PrivateRoute/privateRoute";
import { AuthProvider } from "./AuthContext/authProvider";

import './App.css';

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  const storedIsAuthenticated = Cookies.get('isAuthenticated');
  

  return (
    <AuthProvider>
      <Routes>
        <Route path="/home" location={background || location} element={
          <PrivateRoute>
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

        <Route path="/signUp" element={<NewSignUp/> } />

        <Route path="/" element={<LandingPage/> } />

      </Routes>
    </AuthProvider>
  );
}

export default App;