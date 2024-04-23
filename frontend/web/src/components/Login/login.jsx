import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useLocalState } from '../../utils/useLocalStorage';
import Container from 'react-bootstrap/Container';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';


import './login.css'
import CocollabLogo from '../Logo/logo';
import creativity from '../../assets/illustrations/login/creativity.png';
import personal_goals from '../../assets/illustrations/login/personal_goals.png';

import { useAuth } from '../../AuthContext/authProvider';
// import wave from  '../../assets/backgrounds/wave.svg';


const Login = () => {
    const { setIsAuthenticated } = useAuth();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const [userEmail, setUserEmail] = useLocalState("", "userEmail");
    const [userFullName, setUserFullName] = useLocalState("", "userFullName");

    let navigate = useNavigate(); 
    const routeChange = (path) =>{ 
        navigate(path);
    }

    const [screenWidth,setScreenWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        setScreenWidth(window.innerWidth);

        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[setScreenWidth, screenWidth]);

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const [errorMessage, setErrorMessage] = useState(null);

    const sendLoginRequest = async () => {
        setErrorMessage(null);
        const reqBody = {
            email: email,
            password: password
        };

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(reqBody),
            });

            if (response.status === 200) {
                const data = await response.json();
                setUserEmail(data['email']);
                setUserFullName(data['firstName'] + " " + data['lastName']);
                setIsAuthenticated(true);
                window.location.href = '/home';
            } else if (response.status === 401) {
                setErrorMessage('The email and/or password you provided are not correct.');
            } else {
                throw new Error("Invalid login attempt");
            }
        } catch (error) {
            setErrorMessage(error.message);
            console.error(error);
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
      };

    return (
        <div className='container-fluid login-screen' >
            
            <div className='d-flex align-items-end h-100 pb-4 ms-lg-4'>
                <div className='illustration-login-container d-none d-md-block'>
                    <img src={creativity} className="illustration-login d-none d-lg-block" alt="" />
                </div>
                <div className='login-container'>
                    <div className="sign-in-header">
                        <div className='d-flex justify-content-center'>
                            <a onClick={() => routeChange('/')} style={{cursor: "pointer"}}>
                                <CocollabLogo   width={screenWidth > 422 ? 2.7 : screenWidth >  380 ? 2.4 : 2}
                                                paddingBottom={0.45}
                                                fontSize={screenWidth > 422 ? 3.5 : screenWidth >  380 ? 3 : 2.8}
                                                textColor={'4296af'} value={email} onChange={(e) => setEmail(e.target.value)}>
                                </CocollabLogo>
                            </a>
                        </div>
                        <div className='text-center lato-font'>
                            <div className='mt-3 login-welcome-header-text'>
                                Welcome Back!
                            </div>
                            <div className='mt-2 login-welcome-subheader-text'>
                               Sign in to continue
                            </div>

                            
                            <div className='signup-text-field-container'>
                            {errorMessage && <Alert severity="error" className='mt-3 nunito-sans-font' style={{textAlign: "left"}}>
                                <AlertTitle className='error-message' style={{fontWeight: "600", textAlign: "left"}}>Unable to Sign In</AlertTitle>
                                {errorMessage}
                                </Alert>}
                                <form onSubmit={handleSubmit}>
                                <div className={`${errorMessage ? 'mt-3' : 'mt-5'} signup-text-field-div`}>
                                    <TextField type="text" autoComplete='off' className={`w-100 mb-3 signup-text-field`} id="standard-basic" label="Email" variant="standard" 
                                        value={email} onChange={(e) => setEmail(e.target.value)} 
                                    />
                                </div>

                                <div className={`mt-2 signup-text-field-div`}>
                                    <TextField type={showPassword ? 'text' : 'password'} autoComplete='off' className='w-100 mb-3 signup-text-field' id="standard-basic" label="Password" variant="standard" 
                                        value={password} onChange={(e) => setPassword(e.target.value)}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="start" onClick={togglePasswordVisibility} style={{cursor: "pointer"}}>
                                                    {showPassword ? <VisibilityIcon /> : <VisibilityOff />}
                                                </InputAdornment>
                                            ),
                                        }}
                                        />
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <button className="btn register-continue text-center mt-2" type="submit" style={{width: "20rem"}} onClick={() => sendLoginRequest()}>
                                        Continue
                                    </button>
                                </div>
                                </form>

                                <div className='pt-3'>
                                    <p className="login-req fafafa-color text-center">
                                        <div>
                                            <a onClick={() => routeChange('/signup')} className=" ps-2" style={{cursor: "pointer"}}>
                                                Forgot Password?
                                            </a>
                                        </div>

                                        <div className='pt-2'>
                                            Not a member yet?
                                            <a onClick={() => routeChange('/signup')} className="signup-route-link ps-2" style={{cursor: "pointer"}}>
                                                Sign Up
                                            </a>
                                        </div>
                                    </p>
                                </div>
                               
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                <div className='illustration-login-container d-none d-md-block'>
                    <img src={personal_goals} className="illustration-login d-none d-lg-flex justify-content-end" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;