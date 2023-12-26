import React, { useState } from 'react';
import { useLocalState } from '../utils/useLocalStorage';
import teamwork from '../images/teamwork_high_five.png';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';

import './signUp.css'
import { emailRegexUtil } from "../utils/emailRegexUtil";
import CocollabLogo from '../Logo/logo';



const SignUp = () => {
    const [fullName,setFullName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [jwt, setJwt] = useLocalState("","jwt");
    const [userEmail, setUserEmail] = useLocalState("", "userEmail");
    const [userFullName, setUserFullName] = useLocalState("", "userFullName");
    // let error = '';
     
    const [error, setError] = useState({
        fullName: '',
        password: '',
        confirmPassword: ''
    })


    function sendSignUpRequest() {
        let passwordsMatch = true;
        setError({ ...error, fullName: '' });
        
        if (password !== confirmPassword) {
            passwordsMatch = false;
        }
        const reqBody = {
            fullName: fullName,
            email: email,
            password: password
        };
        const userFullNameInfo = {
            userFullName: userFullName
        };

        fetch("api/auth/signup", {
            headers: {
            "Content-Type": "application/json",
            },
            method: "post",
            body: JSON.stringify(reqBody),
            userFullName: JSON.stringify(userFullNameInfo),
        })
            .then((response) => {

            if (!emailRegexUtil(email)) {
                setError({ ...error, confirmPassword: "Email is invalid" });
                return Promise.reject("Invalid registration attempt: Email is invalid");
            }
            else if (response.status === 200 && passwordsMatch) {
                return Promise.all([response.headers]);
            } else if (!passwordsMatch) {
                setError({ ...error, confirmPassword: "Passwords must matchs" });
                return Promise.reject("Passwords do not match");
            } else if (fullName.split(' ').length < 2) {
                setError({ ...error, fullName: "First and last name are required" });
                console.log("womp womp")
                return Promise.reject("Invalid registration attempt: only one name");
            } else if (response.status === 409) {
                setError({ ...error, confirmPassword: "User already registered" });
                return Promise.reject("Invalid registration attempt: User Already Exists");
            } else {
                return Promise.reject("Invalid registration attempt");
            }
        })
        .then(([headers]) => {
            setUserEmail(email);
            setUserFullName(fullName);
            setJwt(headers.get("authorization"));
            window.location.href = '/home';
        })
        .catch((message) => {
            console.log(message);
        });
    } 
      
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };



    function handleSubmit (e) {
        e.preventDefault();
    };



    return (
      <div className="signup-center-screen flex-column flex-lg-row d-flex justify-content-between align-items-center gap-3">
        <div className="sign-up m-auto">
          <div className="sign-up-header pt-5">
            <h1 className="text-center signup-top-text nunito-sans-font-600">
              Welcome to{' '}
              <CocollabLogo width={2.75} paddingBottom={0.55} fontSize={3.5}></CocollabLogo>
            </h1>
          <h4 className="text-center bottom-description lato-font">Get started - it's free. No credit card needed.</h4>
        </div>

        <div className="pt-4 pb-1">
          <form onSubmit={handleSubmit}>

            <div className="input-label">
              <label htmlFor="fullName" className="text-start">
                Full Name
              </label>
            </div>
            <div className="input-group mb-1">
              <span className="input-group-text" id="user-addon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>
              </span>
              <input
                type="text"
                id="fullName"
                className="form-control"
                placeholder="John Doe"
                aria-label="fullName"
                aria-describedby="user-addon"
                name="fullName"
                required
                autoFocus="autofocus"
                value={fullName} onChange={(e) => {setFullName(e.target.value);} }
                autoComplete="off"
              />
            </div>
            

            <div className='pb-3'>
              {error.fullName && <span className='error-message'>{error.fullName}</span>}
            </div>


            <div className="input-label">
              <label htmlFor="email" className="text-start">
                Email (Personal / Company)
              </label>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="email-addon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                </svg>
              </span>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="name@site.com"
                aria-label="email"
                aria-describedby="email-addon"
                name="email"
                required
                value={email} onChange={(e) => {setEmail(e.target.value);}}
                autoComplete="off"
              />
            </div>

            <div className="input-label">
              <label htmlFor="password" className="text-start">
                Password
              </label>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="password-addon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shield-lock-fill" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z" />
                </svg>
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="form-control password-form-control"
                placeholder="Minimum 8 characters"
                aria-label="password"
                aria-describedby="password-addon"
                name="password"
                autoComplete="off"
                required
                minLength="8"
                value={password} 
                onChange={(e) => {setPassword(e.target.value);}}
              />
              <Button className="visibility-btn" onClick={togglePasswordVisibility}>
                {showPassword ? <VisibilityIcon className='visibility-icon'></VisibilityIcon> : <VisibilityOff className='visibility-icon'></VisibilityOff>}
              </Button>
            </div>

            <div className="input-label">
              <label htmlFor="password-confirm" className="text-start">
                Confirm Password
              </label>
            </div>
            <div className="input-group mb-2">
              <span className="input-group-text" id="password-confirm-addon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shield-lock-fill" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z" />
                </svg>
              </span>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="password-confirm"
                className="form-control password-form-control"
                placeholder="Passwords must match"
                aria-label="password"
                aria-describedby="password-confirm-addon"
                name="confirmPassword"
                required
                minLength="8"
                value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value);}}
              />
              <Button className="visibility-btn" onClick={toggleConfirmPasswordVisibility}>
                {showConfirmPassword ? <VisibilityIcon className='visibility-icon'></VisibilityIcon> : <VisibilityOff className='visibility-icon'></VisibilityOff>}
              </Button>
            </div>

            <div className='pb-3'>
              {error.confirmPassword && <span className='error-message'>{error.confirmPassword}</span>}
            </div>


            <button className="btn register-continue text-white text-center" type="submit" onClick={() => sendSignUpRequest()}>
              Continue
            </button>
          </form>
        </div>

        <div className="pt-4 pb-3">
          <p className="input-label text-center">
            Already a member? <a href="/login" className="login-text ps-1">Log In</a>
          </p>
        </div>
      </div>
      <div className="d-flex align-self-center illustration-div">
        <a className="m-auto fs-4" href={() => false}>
          <img src={teamwork} className="illustration" alt="Cocollabs" />
        </a>
      </div>
    </div>
    );
};

export default SignUp;