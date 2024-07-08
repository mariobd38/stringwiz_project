import React from 'react';

import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import InboxRoundedIcon from '@mui/icons-material/InboxRounded';

import { useLocalState } from '../../../utils/useLocalStorage';

import './homeSidebar.css'

const HomeSidebar = (props) => {
    const {userFullName,openSidebarToggle, setOpenSidebarToggle} = props;
    // const [userFullName] = useLocalState("", "userFullName");
    const firstLetter = userFullName[0].toUpperCase();

    const handleOpenSidebarToggle = () => {
        setOpenSidebarToggle(!openSidebarToggle);
        if (openSidebarToggle) {
            document.body.classList.remove('active');
        } else {
            document.body.classList.add('active');
        }
    }

    return (
        <nav className={`home-sidebar-nav ${openSidebarToggle ? 'active' : ''}`}>
            <div className="sidebar-header">
                <button className="logo-wrapper">
                    {/* <img src={coconut} alt="Logo" /> */}
                    <div className='sidebar-user-button'>
                        <span>{firstLetter}</span>
                    </div>
                    <span className={`sidebar-user-full-name ${openSidebarToggle ? 'active' : ''}`}>{userFullName}</span>

                </button>

                <button className={`toggle-btn ${openSidebarToggle ? 'active' : ''}`} onClick={handleOpenSidebarToggle}>
                    {openSidebarToggle 
                    ?
                        <KeyboardDoubleArrowLeftRoundedIcon sx={{color: "#222529", width: "20px"}}/>
                    :
                        <KeyboardDoubleArrowRightRoundedIcon sx={{color: "#222529", width: "20px"}}/>
                        
                    }
                </button>
            </div>


            <div className="sidebar-links">
                <button className="link active d-flex align-items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12.7596C5 11.4019 5 10.723 5.27446 10.1262C5.54892 9.52949 6.06437 9.08769 7.09525 8.20407L8.09525 7.34693C9.95857 5.7498 10.8902 4.95123 12 4.95123C13.1098 4.95123 14.0414 5.7498 15.9047 7.34693L16.9047 8.20407C17.9356 9.08769 18.4511 9.52949 18.7255 10.1262C19 10.723 19 11.4019 19 12.7596V17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21H9C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17V12.7596Z" stroke="#6FE3C2" strokeWidth="2"/>
                        <path d="M14.5 21V16C14.5 15.4477 14.0523 15 13.5 15H10.5C9.94772 15 9.5 15.4477 9.5 16V21" stroke={`#6FE3C2`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    <span className="hidden sidebar-links-text">Home</span>
                </button>

                <button className="link d-flex align-items-center">
                    <InboxRoundedIcon style={{color: "#b3b3b3", width: "24px", height: "24px"}}/>
                    <span className="hidden sidebar-links-text">Inbox</span>
                </button>
                
                <button className="link d-flex align-items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 7C8 6.05719 8 5.58579 8.29289 5.29289C8.58579 5 9.05719 5 10 5H11.7639C12.3653 5 12.666 5 12.9077 5.14935C13.1493 5.2987 13.2838 5.56766 13.5528 6.10557L14.5 8H18C18.9428 8 19.4142 8 19.7071 8.29289C20 8.58579 20 9.05719 20 10V13C20 13.9428 20 14.4142 19.7071 14.7071C19.4142 15 18.9428 15 18 15H10C9.05719 15 8.58579 15 8.29289 14.7071C8 14.4142 8 13.9428 8 13V7Z" stroke="#b3b3b3" strokeWidth="2" strokeLinejoin="round"/>
                        <path d="M17 15V17.4C17 17.9601 17 18.2401 16.891 18.454C16.7951 18.6422 16.6422 18.7951 16.454 18.891C16.2401 19 15.9601 19 15.4 19H5.6C5.03995 19 4.75992 19 4.54601 18.891C4.35785 18.7951 4.20487 18.6422 4.10899 18.454C4 18.2401 4 17.9601 4 17.4V9.6C4 9.03995 4 8.75992 4.10899 8.54601C4.20487 8.35785 4.35785 8.20487 4.54601 8.10899C4.75992 8 5.03995 8 5.6 8H8" stroke="#b3b3b3" strokeWidth="2" strokeLinejoin="round"/>
                    </svg>

                    <span className="hidden sidebar-links-text">Spaces</span>
                </button>

                <button className="link d-flex align-items-center" >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.1716 3H9C7.11438 3 6.17157 3 5.58579 3.58579C5 4.17157 5 5.11438 5 7V17C5 18.8856 5 19.8284 5.58579 20.4142C6.17157 21 7.11438 21 9 21H15C16.8856 21 17.8284 21 18.4142 20.4142C19 19.8284 19 18.8856 19 17V8.82843C19 8.41968 19 8.2153 18.9239 8.03153C18.8478 7.84776 18.7032 7.70324 18.4142 7.41421L14.5858 3.58579C14.2968 3.29676 14.1522 3.15224 13.9685 3.07612C13.7847 3 13.5803 3 13.1716 3Z" stroke="#b3b3b3" strokeWidth="2"/>
                        <path d="M9 13L15 13" stroke="#b3b3b3" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M9 17L13 17" stroke="#b3b3b3" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M13 3V7C13 7.94281 13 8.41421 13.2929 8.70711C13.5858 9 14.0572 9 15 9H19" stroke="#b3b3b3" strokeWidth="2"/>
                    </svg>

                    <span className="hidden sidebar-links-text">Notepad</span>
                </button>
        
                <button className="link d-flex align-items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="6" width="18" height="15" rx="2" stroke="#b3b3b3" strokeWidth="2"/>
                    <path d="M4 11H20" stroke="#b3b3b3" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M9 16H15" stroke="#b3b3b3" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M8 3L8 7" stroke="#b3b3b3" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M16 3L16 7" stroke="#b3b3b3" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span className="hidden sidebar-links-text">Calendar</span>

                </button>

                <button className="link d-flex align-items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 9L13.9558 13.5662C13.5299 14.2051 12.5728 14.1455 12.2294 13.4587L11.7706 12.5413C11.4272 11.8545 10.4701 11.7949 10.0442 12.4338L7 17" stroke="#b3b3b3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#b3b3b3" strokeWidth="2"/>
                    </svg>
                    <span className="hidden sidebar-links-text">Analytics</span>
                </button>


            </div>



            <div className="sidebar-bottom">
                <div className="sidebar-links">
                    <button className="link d-flex align-items-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="8" r="4" stroke="#b3b3b3" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M15.7956 20.4471C15.4537 19.1713 14.7004 18.0439 13.6526 17.2399C12.6047 16.4358 11.3208 16 10 16C8.6792 16 7.3953 16.4358 6.34743 17.2399C5.29957 18.0439 4.5463 19.1713 4.20445 20.4471" stroke="#b3b3b3" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M19 10L19 16" stroke="#b3b3b3" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M22 13L16 13" stroke="#b3b3b3" strokeWidth="2" strokeLinecap="round"/>
                        </svg>

                        <span className="hidden sidebar-links-text">Invite</span>
                    </button>
                </div>

                <div className="user-profile">
                    {/* <div className="user-avatar">
                        <img src="./assets/profile-pic.jpg" alt="" />
                    </div>
          
                    <div className="user-details hidden">
                        <p className="username">Jane Doe</p>
                        <p className="user-email">janedoe@gmail.com</p>
                    </div> */}
                </div>
            </div>
        </nav>
    );
};

export default HomeSidebar;