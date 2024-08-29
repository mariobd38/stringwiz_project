import { Routes, Route, useLocation } from "react-router-dom";
import React from 'react';

import NewHome from "./components/Home/newHome";
import TaskDetailsModal from "./components/Home/TaskDetailsModal/taskDetailsModal";
import LandingPage from "./components/Landing/LandingPage";
import Login from "./components/Auth/Login/login";
import SignUp from "./components/Auth/SignUp/signup"
import SignUpNextSteps from "./components/Auth/SignUp/SignUpNextSteps/signUpNextSteps";
import Onboarding from "./components/Onboarding/onboarding";
import PrivateRoute from "./PrivateRoute/privateRoute";
import { AuthProvider } from "./AuthContext/authProvider";
import OAuth2RedirectHandler from "./components/Auth/SignUp/oAuth2RedirectHandler";

import './App.css';
import LoginNextSteps from "./components/Auth/Login/LoginNextSteps/loginNextSteps";

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  
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
          <Route path="/app/login" element={<LoginNextSteps/> } />

          <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />

          <Route path="/onboarding" element={<PrivateRoute>
              <Onboarding />
            </PrivateRoute>} 
          />


          <Route path="/signUp" element={<SignUp/> } />
          <Route path="/app/signup" element={<SignUpNextSteps/> } />

          <Route path="/" element={<LandingPage/> } />

        </Routes>
      </AuthProvider>
  );
}

export default App;