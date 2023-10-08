import React, { useState } from 'react';
import { useLocalState } from '../utils/useLocalStorage';

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const [jwt, setJwt] = useLocalState("","jwt");

    function sendLoginRequest () {
        const reqBody = {
            email: email,
            password: password
        };

        fetch("api/auth/login", {
            headers: {
            "Content-Type": "application/json",
            },
            method: "post",
            body: JSON.stringify(reqBody),
        })
        .then((response) => {
            if (response.status === 200)
                return Promise.all([response.json(), response.headers])
            else 
                return Promise.reject("Invalid login attempt");
        })
        .then(([body,headers]) => {
            setJwt(headers.get("authorization"));
            window.location.href = '/dashboard';
        }).catch(message => {
            alert(message);
        });
    }

    return (
        <>
            <div>
                <label htmlFor='email' type='email' >Email</label>
                <input htmlFor='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input htmlFor='password' type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <button className="btn btn-primary" id="submit" type="button" onClick={() => sendLoginRequest()}>
                    Login
                </button>
            </div>
        </>
    );
};

export default Login;