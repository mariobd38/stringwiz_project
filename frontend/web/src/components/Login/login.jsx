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
// import wave from  '../../assets/backgrounds/wave.svg';


const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const [jwt, setJwt] = useLocalState("","jwt");
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

    function sendLoginRequest () {
        console.log("inside login");
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
            console.log(email);
            console.log(password);
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
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
      };

    return (
        <Container fluid className='login-screen' >
            
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
                            {errorMessage && <Alert severity="error" className='mt-3 nunito-sans-font'>
                                <AlertTitle className='error-message' style={{fontWeight: "600"}}>Unable to Sign In</AlertTitle>
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
        </Container>





    //     <Container className="container center-screen text-center flex-column d-flex align-items-center gap-3">
    //         <div className="sign-in m-auto">
    //             <div className="sign-in-header">
    //                 <div className='d-flex justify-content-center'>
    //                 <CocollabLogo width={2.7} paddingBottom={0.45} fontSize={3.5} href={'/'}></CocollabLogo>

    //                 </div>
    //             <h1 className="text-center login-header-text pt-5">
    //                 Login
    //             </h1>
    //             {errorMessage && <Alert severity="error" style={{fontFamily: 'Nunito Sans'}}>{errorMessage}</Alert>}
    //             <form onSubmit={handleSubmit}>
    //                 <div className={`input-group mb-3 ${errorMessage} ? pt-4 : pt-1`}>

                    
    //                 <span className="input-group-text" id="email-addon">
    //                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
    //                     <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    //                     </svg>
    //                 </span>
    //                 <input htmlFor='email' id="email" className="form-control" placeholder="Email" aria-label="email" aria-describedby="email-addon" name="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off"/>
    //                 </div>

    //                 <div className="input-group mb-3 pt-1 pb-2">
    //                 <span className="input-group-text" id="password-addon">
    //                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shield-lock-fill" viewBox="0 0 16 16">
    //                     <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.990a1.541 1.541 0 0 0-1.044-1.263a62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z" />
    //                     </svg>
    //                 </span>
    //                 <input htmlFor='password' type={showPassword ? 'text' : 'password'} id="password" className="form-control" placeholder="Password" aria-label="password" aria-describedby="password-addon" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    //                 <button className="visibility-btn" onClick={togglePasswordVisibility}>
    //                     {showPassword ? <VisibilityIcon className='visibility-icon'></VisibilityIcon> : <VisibilityOff className='visibility-icon'></VisibilityOff>}
    //                 </Button>
    //                 </div>

                    

    //                 <button className="btn login-btn" type="submit" onClick={() => sendLoginRequest()}>Continue</button>
    //             </form>
    //             </div>

    //             <div className='pt-3'>
    //                 <p className="login-req text-white text-center">
    //                     <a href="/signup" className=" ps-2">
    //                     Forgot Password?
    //                     </a>
    //                 </p>
    //             </div>

    //             <div className="">
    //                 <p className="login-req text-white text-center">
    //                     Not a member yet?
    //                     <a onClick={() => routeChange('/signup')} className="signup-route-link ps-2">
    //                     Sign Up
    //                     </a>
    //                 </p>
    //             </div>
    //         </div>
    // </Container>
    );
};

export default Login;