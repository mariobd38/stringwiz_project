import { useState } from "react";
import { useLocalState } from "../../../../utils/useLocalStorage";

import Button from 'react-bootstrap/Button';

import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import ContentPasteRoundedIcon from '@mui/icons-material/ContentPasteRounded';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';

import "./profileCard.css";

export const ProfileCard = (props) => {
    const { showProfileCard, assigneeContent, initials, userFullName } = props;

    const [userEmail] = useLocalState('', 'userEmail');

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const currentTime = new Date().toLocaleTimeString('en-US', { timeZone: timeZone, hour: 'numeric', minute: '2-digit' });

    const [emailCopied, setEmailCopied] = useState(false);

    const handleEmailCopyClick = (event) => {
        navigator.clipboard.writeText(userEmail);
        setEmailCopied(true);
        // const originalCurrentTaskIdNumber = event.target.innerText
        // event.target.innerText = "Copied!";
        setTimeout(() => {
            setEmailCopied(false);
            // if (event.target.innerText === "Copied!") {
            //     event.target.innerText = originalCurrentTaskIdNumber;
            // }
        }, 1500); 
    }


    return (       
        <>

        <div className="profile-card-wrapper">

        
            <div className={`profile-card-dropdown ${showProfileCard ? "open" : ""}`}>
                <div className="profile-card-dropdown-menu px-3 py-3">
                    <div className="d-flex justify-content-between">
                        <div className="profile-card-initials-button">
                            <CircleRoundedIcon className="profile-card-circle-hider" />
                            <CircleRoundedIcon className="profile-card-circle-assignee-status" />
                            {initials}
                        </div>
                        <div >
                            <Button className="profile-card-user-status-btn ">Online</Button>
                        </div> 
                    </div>

                    <div>
                        <div className="mt-3 nunito-sans-font" style={{fontSize: "1.15rem"}}>
                            <span className="nunito-sans-font-600">{userFullName} </span>(you)
                        </div>
                        
                        <div className="mt-2 ">
                            <span><MailOutlineRoundedIcon style={{width: "1.3rem"}}/></span>
                            <span className="ps-3 nunito-sans-font">{userEmail}</span>
                            <span className="ps-2">
                                { emailCopied ?
                                <InventoryRoundedIcon style={{width: "1.2rem", cursor: "pointer", color: "rgb(4, 156, 4)"}}/>
                                :
                                <ContentPasteRoundedIcon onClick={handleEmailCopyClick} style={{width: "1.1rem", cursor: "pointer"}}/>
                                }
                            </span>
                        </div>

                        <div className="mt-2 ">
                            <span><AccessTimeRoundedIcon style={{width: "1.3rem"}}/></span>
                            <span className="ps-3 nunito-sans-font">{currentTime}</span>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between mt-4">
                        <Button className="profile-card-view-profile-btn">View Profile</Button>
                    </div>
                    
                </div>
            </div>
            <div className="assignee-content">
                {assigneeContent}
            </div>
        </div>
            
        </>
    );
};