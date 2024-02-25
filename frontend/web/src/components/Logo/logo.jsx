import React, { useEffect } from 'react';
import coconut from '../../assets/coconut.png';
import './logo.css';

const CocollabLogo = ({ width, paddingBottom, fontSize, textColor }) => {
    const coconutWidth = {
        width: `${width}rem`,
        paddingBottom: `${paddingBottom}rem`,
    };
    const logoProperties = {
        fontSize: `${fontSize}rem`,
        color: `#${textColor} !important`,
    };

    return (
        <div className='cocollabs-logo' style={logoProperties}>
            <a>
                <span style={{ fontFamily: 'Baron Neue, serif', color: `#${textColor}` }}>COC</span>
                <span>
                <a className="m-auto" href={() => false}>
                    <img src={coconut} className="coconut-text" style={coconutWidth} alt="coconut" />
                </a>
                </span>
                <span style={{ fontFamily: 'Baron Neue, serif', color: `#${textColor}` }}>LLABS</span>
            </a>
        </div>
    );
};

export default CocollabLogo;