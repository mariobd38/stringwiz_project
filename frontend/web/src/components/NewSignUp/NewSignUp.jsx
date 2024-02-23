import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { useLocalState } from '../../utils/useLocalStorage';
import teamwork from '../../images/teamwork_high_five.png';

import TextField from '@mui/material/TextField';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import InputAdornment from '@mui/material/InputAdornment';


import './NewSignUp.css'
import CocollabLogo from '../Logo/logo';

const NewSignUp = () => {
    const [fullName,setFullName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [jwt, setJwt] = useLocalState("","jwt");
    const [userEmail, setUserEmail] = useLocalState("", "userEmail");
    const [userFullName, setUserFullName] = useLocalState("", "userFullName");
    const [errorMessages, setErrorMessages] = useState([]);

    let navigate = useNavigate(); 
    const routeChange = (path) =>{ 
        navigate(path);
    }

    function sendSignUpRequest() {
        setErrorMessages([]);
        const reqBody = {

            fullName: fullName.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' '),
            email: email,
            password: password,
            confirmPassword: confirmPassword
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
            if (!response.ok) {
                return response.json().then((data) => {
                    throw new Error(data.join("\n"));
            });
          }
          return Promise.all([response.headers]);
        })
        .then(([headers]) => {
            setUserEmail(email);
            setUserFullName(fullName.replace(/\s+/g, ' ').split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' '));
            
            setJwt(headers.get("authorization"));
            window.location.href = '/home';
        })
        .catch((error) => {
            const errorList = error.message.split("\n");
            setErrorMessages(errorList);
        });
    }

      
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const toggleConfirmPasswordVisibility = () => {
        console.log("inside");
        setShowConfirmPassword(!showConfirmPassword);
    };

    function handleSignUpSubmitRequest (e) {
        e.preventDefault();
    };

    return (
        <div className='row d-flex flex-column flex-lg-row'>
            <div className="col-12 col-lg-7 m-auto" style={{backgroundColor: "#fafafa"}}>
                <div className="d-flex align-items-center justify-content-center flex-column signup-center">
                    <div className="signup-header m-auto">
                        <div className="">
                            <div className="text-center signup-top-text">
                                Welcome to{' '}
                                <a onClick={() => routeChange('/')} style={{cursor: "pointer"}}>
                                <CocollabLogo width={2.75} paddingBottom={0.55} fontSize={3.5}  textColor='4296af'></CocollabLogo> 
                                </a>
                            </div>
                            <div className="text-center signup-bottom-description lato-font">Get started - it's free. No credit card needed.</div>
                        </div>


                        <div className='pt-4 signup-text-field-container'>
                            <form onSubmit={handleSignUpSubmitRequest}>
                                {errorMessages.length > 0 && <Alert severity="error" className='mb-3 nunito-sans-font'>
                                <AlertTitle className='error-message' style={{fontWeight: "600"}}>Unable to Register</AlertTitle>
                                    {errorMessages.length > 1 ? (
                                    <ul className='error-message m-0 p-0' style={{ listStyle: 'none' }}>
                                        {errorMessages.map((message, index) => (
                                        <li key={index}>{message}</li>
                                        
                                        ))}
                                    </ul>
                                    ) : (
                                    errorMessages && errorMessages.length === 1 ? (
                                        <ul className='error-message p-0 m-0' style={{ listStyle: 'none' }}>
                                        {errorMessages.map((message, index) => (
                                            <li key={index}>{message}</li>
                                        ))}
                                        </ul>
                                    ) : null
                                    )}</Alert>}
                                <div className={`signup-text-field-div`}>
                                    <TextField type="text" autoComplete='off' className={`w-100 mb-3 signup-text-field`} id="standard-basic" label="Full Name" variant="standard" 
                                        value={fullName} onChange={(e) => {setFullName(e.target.value);} } 
                                        />
                                </div>

                                <div className='signup-text-field-div'>
                                    <TextField type="text" autoComplete='off' className={`w-100 mb-3 signup-text-field`} id="standard-basic" label="Email" variant="standard" 
                                        value={email} onChange={(e) => {setEmail(e.target.value);}}/>
                                </div>
                                
                                <div className='d-flex flex-column'>
                                    <div className='signup-text-field-div'>
                                        <TextField type={showPassword ? 'text' : 'password'} autoComplete='off' className='w-100 mb-3 signup-text-field' id="standard-basic" label="Password" variant="standard" 
                                        value={password} onChange={(e) => {setPassword(e.target.value);}}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="start" onClick={togglePasswordVisibility} style={{cursor: "pointer"}}>
                                                    {showPassword ? <VisibilityIcon /> : <VisibilityOff />}
                                                </InputAdornment>
                                            ),
                                        }}/>
                                    </div>
                                    
                                    <div className='signup-text-field-div'>
                                        <TextField type={showConfirmPassword ? 'text' : 'password'} autoComplete='off' className='w-100 mb-3 signup-text-field' id="standard-basic" label="Confirm password" variant="standard" 
                                        value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value);}}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="start" onClick={toggleConfirmPasswordVisibility} style={{cursor: "pointer"}}>
                                                    {showConfirmPassword ? <VisibilityIcon /> : <VisibilityOff />}
                                                </InputAdornment> 
                                            ),
                                        }}/>
                                    </div>
                                </div>
                                
                                <button className="btn register-continue text-center mt-2" type="submit" onClick={() => sendSignUpRequest()}>
                                    Continue
                                </button>
                            </form>

                        </div>
                        <div className="pt-4 pb-3">
                            <p className="input-label text-center lato-font">
                                Already a member? <a onClick={() => routeChange('/login')} className="signup-login-link ps-1">Sign In</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-5 p-0">
                <div className='illustration-div d-flex align-items-center justify-content-center'>
                    <img src={teamwork} className="illustration" alt="Cocollabs" />
                </div>
            </div>
        </div>
    );
};

export default NewSignUp;