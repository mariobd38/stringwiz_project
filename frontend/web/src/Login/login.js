import React, { useState } from 'react';
import { useLocalState } from '../utils/useLocalStorage';
import Container from 'react-bootstrap/Container';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

import './login.css'
import CocollabLogo from '../Logo/logo';


const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const [jwt, setJwt] = useLocalState("","jwt");
    const [userEmail, setUserEmail] = useLocalState("", "userEmail");
    const [userFullName, setUserFullName] = useLocalState("", "userFullName");
    // document.body.style.backgroundColor = "#223654";
    document.body.style.background = "#4e21d9";
    document.body.style.background = "-webkit-linear-gradient(to right, #4e21d9, #cc655e)";
    document.body.style.background = "linear-gradient(to right, #4e21d9, #cc655e)";


    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const [errorMessage, setErrorMessage] = useState(null);


    function sendLoginRequest () {
        setErrorMessage(null);
        const reqBody = {
            email: email,
            password: password
        };
        const userFullNameInfo = {
            userFullName: userFullName
        };

        fetch("api/auth/login", {
            headers: {
            "Content-Type": "application/json",
            },
            method: "post",
            body: JSON.stringify(reqBody),
            userFullName: JSON.stringify(userFullNameInfo),
        })
        .then((response) => {
            if (response.status === 400) {
                return response.text().then((data) => {
                    throw new Error(data);
                  });
            }
            if (response.status === 200) {
                return Promise.all([response.json(), response.headers]);
            }
            else if (response.status === 401) {
                setErrorMessage('The email and/or password you provided are not correct.')
                throw new Error("The email and/or password you provided are not correct.");
                // return Promise.reject("Invalid login attempt");
            }
            else 
                return Promise.reject("Invalid login attempt");
        })
        .then(([data,headers]) => {

            setUserEmail(data['email']);
            setUserFullName(data['firstName'] + " " + data['lastName']);
            setJwt(headers.get("authorization"));
            window.location.href = '/home';
        }).catch((error) => {
            setErrorMessage(error.message);
            console.log(error);
            // alert(error.message);
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
      };

    return (
        // <>
        <Container className="container center-screen text-center flex-column d-flex align-items-center gap-3">
        {/* <div className="container center-screen text-center flex-column d-flex align-items-center gap-3"> */}
        <div className="sign-in m-auto">
            <div className="sign-in-header">
                <div className='d-flex justify-content-center'>
                <CocollabLogo width={2.7} paddingBottom={0.45} fontSize={3.5}></CocollabLogo>

                </div>
            <h1 className="text-center login-header-text pt-5">
                Login 
            </h1>
            {/* <p className="text-center login-req text-white">Please enter your personal/company email address</p> */}


            {/* {errorMessage &&  
                <div className='error-message pt-0'>
                  <p>{errorMessage}</p>
                </div>
            } */}
            {errorMessage && <Alert severity="error" style={{fontFamily: 'Nunito Sans'}}>{errorMessage}</Alert>}
            <form onSubmit={handleSubmit}>
                <div className={`input-group mb-3 ${errorMessage} ? pt-4 : pt-1`}>

                
                <span className="input-group-text" id="email-addon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    </svg>
                </span>
                <input htmlFor='email' id="email" className="form-control" placeholder="Email" aria-label="email" aria-describedby="email-addon" name="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off"/>
                </div>

                <div className="input-group mb-3 pt-1 pb-2">
                <span className="input-group-text" id="password-addon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shield-lock-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.990a1.541 1.541 0 0 0-1.044-1.263a62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z" />
                    </svg>
                </span>
                <input htmlFor='password' type={showPassword ? 'text' : 'password'} id="password" className="form-control" placeholder="Password" aria-label="password" aria-describedby="password-addon" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button className="visibility-btn" onClick={togglePasswordVisibility}>
                    {showPassword ? <VisibilityIcon className='visibility-icon'></VisibilityIcon> : <VisibilityOff className='visibility-icon'></VisibilityOff>}
                </Button>
                </div>

                

                <button className="btn login-btn" type="submit" onClick={() => sendLoginRequest()}>Continue</button>
            </form>
            </div>

            <div className='pt-3'>
                <p className="login-req text-white text-center">
                    <a href="/signup" className=" ps-2">
                    Forgot Password?
                    </a>
                </p>
            </div>

            <div className="">
                <p className="login-req text-white text-center">
                    Not a member yet?
                    <a href="/signup" className="sign-up ps-2">
                    Sign Up
                    </a>
                </p>
            </div>
        </div>
    {/* </div> */}
    </Container>
        // </>
    );
};

export default Login;