import { useEffect } from 'react';

import { readLocalStorageValue } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import { OAUTH2_CALLBACK_URI } from '../../../constants';

import { useAuth } from '../../../AuthContext/authProvider';

const OAuth2RedirectHandler = () => {
    const { setIsAuthenticated } = useAuth();
    
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');
        const error = params.get('error');
        const authOrigin = readLocalStorageValue({ key: 'auth_origin' });

        if (code) {
            fetch(`${OAUTH2_CALLBACK_URI}?code=${code}&authOrigin=${authOrigin}`, {
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
                if (authOrigin === 'login') {
                    navigate('/home', { state: { data: data } });
                } else if (authOrigin === 'signup') {
                    // navigate('/onboarding', { state: { picture: data.picture } });
                    navigate('/onboarding', { state: { data: data } });
                } else {
                    navigate('/');
                }
                localStorage.removeItem('auth_origin');
            })
            .catch((error) => {
                console.error(error); 
            });
        } 
        else {
        console.error('Error during authentication:', error);
        //   navigate('/login');
        }
    }, [navigate, setIsAuthenticated]);
};

export default OAuth2RedirectHandler;
