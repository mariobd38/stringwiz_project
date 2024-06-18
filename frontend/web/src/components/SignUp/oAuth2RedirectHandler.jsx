import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { OAUTH2_CALLBACK_URI } from '../../constants';

import { useLocalStorage } from '@mantine/hooks';
import { useAuth } from '../../AuthContext/authProvider';

const OAuth2RedirectHandler = () => {
    const [userEmail, setUserEmail] = useLocalStorage({
        key: 'userEmail',
        defaultValue: '',
    });
    const [userFullName, setUserFullName] = useLocalStorage({
        key: 'userFullName',
        defaultValue: '',
    });
    const [userProfile, setUserProfile] = useLocalStorage({
        key: 'userProfile',
        defaultValue: null,
    });
    const { setIsAuthenticated } = useAuth();
    
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');
        const error = params.get('error');
        if (code) {
            fetch(`${OAUTH2_CALLBACK_URI}?code=${code}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',
            }).then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setIsAuthenticated(true);
                setUserEmail(data['email']);
                setUserFullName(data['fullName']);
                setUserProfile(data['picture']);

                navigate('/onboarding');
            })
            .catch((error) => {
                console.error(error); 
            });
        } 
        else {
        console.error('Error during authentication:', error);
        //   navigate('/login');
        }
    }, [navigate, setIsAuthenticated, setUserEmail, setUserFullName, setUserProfile]);
};

export default OAuth2RedirectHandler;
