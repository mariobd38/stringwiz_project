import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { OAUTH2_CALLBACK_URI } from '../../constants';

import { useAuth } from '../../AuthContext/authProvider';

const OAuth2RedirectHandler = () => {
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
                console.log(data.picture);
                navigate('/onboarding', { state: { picture: data.picture }});
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
