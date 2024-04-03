import React, { useState } from 'react';

import './modelTooltip.css';

const ModelTooltip = ({text, children}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [tooltipStyle, setTooltipStyle] = useState({});

    const handleMouseEnter = (event) => {
        const { top } = event.target.getBoundingClientRect();
        setTooltipStyle({
            top: top - 420 + 'px',
            right: -35 + 'px',
        });
        setIsVisible(true);
        
    };

    return (
        <div className='tooltip-container'
            // onMouseEnter={() => setIsVisible(true)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsVisible(false)}
        >
            
            {children}
            {isVisible && <div className='tooltip-text' style={tooltipStyle}>
                {text}
            </div>}
        </div>
    );
};

export default ModelTooltip;