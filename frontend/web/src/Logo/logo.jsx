import React from 'react';
import coconut from '../images/coconut.png';
import './logo.css';

const CocollabLogo = () => {
    return (
        <div className='cocollabs-logo'>
            <a href="/" className=''>
                <span style={{ color: '#58bcdb', fontFamily: 'Baron Neue, serif' }}>COC</span>
                <span>
                <a className="m-auto" href={() => false}>
                    <img src={coconut} className="coconut-text" alt="coconut" />
                </a>
                </span>
                <span style={{ color: '#4296af', fontFamily: 'Baron Neue, serif' }}>LLABS</span>
            </a>
        </div>
    );
};

export default CocollabLogo;