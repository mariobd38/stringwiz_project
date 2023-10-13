import React, { useState } from 'react';
import { useLocalState } from '../utils/useLocalStorage';
import Container from 'react-bootstrap/Container';
import './login.css'


const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const [jwt, setJwt] = useLocalState("","jwt");
    const [userEmail, setUserEmail] = useLocalState("", "userEmail");
    const [userFullName, setUserFullName] = useLocalState("", "userFullName");
    document.body.style.backgroundColor = "#223654";

    function sendLoginRequest () {
        const reqBody = {
            email: email,
            password: password
        };
        const userEmailInfo = {
            userEmail: userEmail
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
            if (response.status === 200) {
                return Promise.all([response.json(), response.headers])
            }
            else 
                return Promise.reject("Invalid login attempt");
        })
        .then(([data,headers]) => {
            setUserEmail(data['email']);
            console.log(data['email']);
            setUserFullName(data['firstName'] + " " + data['lastName']);
            console.log("data = " + data['firstName']);
            setJwt(headers.get("authorization"));
            window.location.href = '/home';
        }).catch(message => {
            alert(message);
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic here
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');
        console.log('Submitted Form Data:', { email, password });
        // Replace the above line with your actual form submission code
      };

    return (
        // <>
        <Container className="container center-screen text-center flex-column d-flex align-items-center gap-3">
        {/* <div className="container center-screen text-center flex-column d-flex align-items-center gap-3"> */}
        <div className="sign-in m-auto pt-4">
            {/* You can add error and logout message handling here */}
            <div>
            {/* Error message */}
            </div>
            <div>
            {/* Logout message */}
            </div>

            <div className="sign-in-header">
            <h1 className="text-center login-header-text">
                Login to your{' '}
                <a href="/">
                <span style={{ color: '#58bcdb', fontFamily: 'Baron Neue, serif' }}>STRING</span>
                <span style={{ color: '#4296af', fontFamily: 'Baron Neue, serif' }}>WIZ</span>
                </a>{' '}
                account
            </h1>
            <p className="text-center login-req text-white">Please enter your personal/company email address</p>

            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3 pt-3">
                <span className="input-group-text" id="email-addon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    </svg>
                </span>
                <input type="email" htmlFor='email' id="email" className="form-control" placeholder="name@site.com" aria-label="email" aria-describedby="email-addon" name="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off"/>
                </div>

                <div className="input-group mb-3 pt-1 pb-2">
                <span className="input-group-text" id="password-addon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shield-lock-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.990a1.541 1.541 0 0 0-1.044-1.263a62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z" />
                    </svg>
                </span>
                <input htmlFor='password' type="password" id="password" className="form-control" placeholder="Enter password" aria-label="password" aria-describedby="password-addon" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button className="btn login-btn" type="submit" onClick={() => sendLoginRequest()}>Continue</button>
            </form>
            </div>

            <div className="pt-5">
            <p className="login-req text-white text-center">
                Not a member yet?{' '}
                <a href="/signup" className="sign-up">
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