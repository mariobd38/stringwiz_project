import React, { useState } from 'react';

import { GOOGLE_AUTH_URL } from '../../../constants';

import AuthHeader from './../authHeader';
import LoginContent from './loginContent';

import './../auth.css';
import './login.css'

const Login = () => {
    const [inputEmail,setInputEmail] = useState("");

    const handleGoogleLogin = async () => {
        window.location.href = GOOGLE_AUTH_URL;
    };

    return (
        <div className='w-100'>
            <AuthHeader />
            <LoginContent 
                handleGoogleLogin={handleGoogleLogin}
                inputEmail={inputEmail}
                setInputEmail={setInputEmail}
                showOAuth2Buttons={true}
            />
        </div>
    );
};

export default Login;