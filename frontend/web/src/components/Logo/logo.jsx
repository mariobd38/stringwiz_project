import React from 'react';
import coconut from '../../images/coconut.png';
import './logo.css';

const CocollabLogo = ({ width, paddingBottom, fontSize }) => {
    const coconutWidth = {
        width: `${width}rem`,
        paddingBottom: `${paddingBottom}rem`,
    };
    const logoSize = {
        fontSize: `${fontSize}rem`,
    };

    return (
        <div className='cocollabs-logo' style={logoSize}>
            <a href="/">
                <span style={{ color: '#58bcdb', fontFamily: 'Baron Neue, serif' }}>COC</span>
                <span>
                <a className="m-auto" href={() => false}>
                    <img src={coconut} className="coconut-text" style={coconutWidth} alt="coconut" />
                </a>
                </span>
                <span style={{ color: '#4296af', fontFamily: 'Baron Neue, serif' }}>LLABS</span>
            </a>
        </div>
    );
};

export default CocollabLogo;