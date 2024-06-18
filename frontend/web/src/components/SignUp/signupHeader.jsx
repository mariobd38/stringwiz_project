import React from 'react';
import { useNavigate } from 'react-router-dom';

import CocollabLogo from '../Logo/logo';

const SignupHeader = () => {

    let navigate = useNavigate(); 
    const routeChange = (path) =>{ 
        navigate(path);
    }

    return (
        <>
            <div className='' style={{background: "#fafafa", borderBottom: "1.2px solid #dfdfdf"}}>
                <div className='d-flex justify-content-between align-items-center px-4 h-100'style={{height: "12vh"}} >
                    <div>
                        <a href={() => false} onClick={() => routeChange('/')} style={{cursor: "pointer"}}>
                            <CocollabLogo width={2.2} paddingBottom={0.5} fontSize={2.9}  textColor='4296af'></CocollabLogo> 
                        </a>

                    </div>
                </div>
            </div>
        </>
    );
};

export default SignupHeader;