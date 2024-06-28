import React from 'react';
import { useNavigate } from 'react-router-dom';

import CocollabLogo from '../Logo/logo';
import Logo2 from '../Logo/logo2';

const SignupHeader = () => {

    let navigate = useNavigate(); 
    const routeChange = (path) =>{ 
        navigate(path);
    }
    
    const handleLogoClick = () => {
        window.location.href = '/'
    }

    return (
        <>
            <div className='' style={{background: "#fafafa", borderBottom: "1.2px solid #dfdfdf"}}>
                <div className='d-flex justify-content-between align-items-center px-4 h-100'style={{height: "19vh"}} >
                    {/* <div>
                        <a href={() => false} onClick={() => routeChange('/')} style={{cursor: "pointer"}}>
                            <CocollabLogo width={2.2} paddingBottom={0.5} fontSize={2.9}  textColor='4296af'></CocollabLogo> 
                        </a>

                    </div> */}
                    <div className='my-3'>
                        <button onClick={handleLogoClick} style={{width: "12.9rem"}}>
                            <Logo2 strokeColor='#0f5255'/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignupHeader;