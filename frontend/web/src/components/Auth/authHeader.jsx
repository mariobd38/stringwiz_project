import React from 'react';

import Logo2 from '../Logo/logo2';

const AuthHeader = () => {

    const handleLogoClick = () => {
        window.location.href = '/'
    }

    return (
        <>
            <div style={{background: "#fafafa", borderBottom: "1.2px solid #dfdfdf"}}>
                <div className='d-flex justify-content-between align-items-center px-4 h-100' style={{height: "19vh"}} >
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

export default AuthHeader;