import React from 'react';

import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

import './milestoneBlock.css';

const MilestoneBlock = () => {
    return (
        <div className='pt-3 pb-4 px-4' style={{ backgroundColor: "#222529", borderRadius: "10px" }} >
            <div className='d-flex justify-content-between'>
                <div style={{color: "#fafafa", fontFamily: "Lato",fontWeight: "600", fontSize: "1.08rem"}}>
                    Milestones
                </div>
                <div>
                    <MoreHorizRoundedIcon style={{color: "#fafafa"}}/>
                </div>
            </div>
            <div className='pt-4'>
                <div className='d-flex justify-content-center pb-5'>
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5 20.5H7.5" stroke="#338b6f" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M13 18.5C13 19.0523 12.5523 19.5 12 19.5C11.4477 19.5 11 19.0523 11 18.5H13ZM11 18.5V16H13V18.5H11Z" fill="#338b6f"/>
                        <path d="M10.5 9.5H13.5" stroke="#338b6f" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M5.5 14.5C5.5 14.5 3.5 13 3.5 10.5C3.5 9.73465 3.5 9.06302 3.5 8.49945C3.5 7.39488 4.39543 6.5 5.5 6.5V6.5C6.60457 6.5 7.5 7.39543 7.5 8.5V9.5" stroke="#338b6f" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M18.5 14.5C18.5 14.5 20.5 13 20.5 10.5C20.5 9.73465 20.5 9.06302 20.5 8.49945C20.5 7.39488 19.6046 6.5 18.5 6.5V6.5C17.3954 6.5 16.5 7.39543 16.5 8.5V9.5" stroke="#338b6f" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M16.5 11.3593V7.5C16.5 6.39543 15.6046 5.5 14.5 5.5H9.5C8.39543 5.5 7.5 6.39543 7.5 7.5V11.3593C7.5 12.6967 8.16841 13.9456 9.2812 14.6875L11.4453 16.1302C11.7812 16.3541 12.2188 16.3541 12.5547 16.1302L14.7188 14.6875C15.8316 13.9456 16.5 12.6967 16.5 11.3593Z" stroke="#338b6f" strokeWidth="2"/>
                    </svg>

                </div>
                <div style={{color: "#c8c8c8"}} className='d-flex lato-font justify-content-center pb-3'>
                    You do not have any milestones yet
                </div>
                <div className='d-flex justify-content-center'>
                    <button className='user-home-create-milestone-button-dark' >
                        Create a milestone
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MilestoneBlock;