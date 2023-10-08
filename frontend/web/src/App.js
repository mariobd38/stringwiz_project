import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from "./Dashboard/dashboard";
import HomePage from "./HomePage/homePage";
import { useLocalState } from "./utils/useLocalStorage";
import Login from "./Login/login";
import PrivateRoute from "./PrivateRoute/privateRoute";

function App() {
  const [jwt, setJwt] = useLocalState("", "jwt");

  useEffect(() => {
    console.log(`JWT is: ${jwt}`);
  }, [jwt]);

  return (
    <Routes>
      <Route path="/dashboard" element={
        <PrivateRoute>
          <Dashboard/> 
        </PrivateRoute>
      } />

      <Route path="/login" element={<Login/> } />

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