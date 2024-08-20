import { useState } from "react";


import { HoverCard, Button, Avatar } from '@mantine/core';

import {
    IconMail,IconClock,IconClipboard,IconClipboardCheck
  } from '@tabler/icons-react';

import { constructImageSrc } from "../../../../utils/constructImageSrc";

import "./profileCard.css";

export const ProfileCard = (props) => {
    const { userFullName, userEmail,userProfileDto, userProfilePicture, target } = props;

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
            <HoverCard width={320} shadow="md" openDelay={650} closeDelay={500} zIndex={10000} offset={12}>
                <HoverCard.Target>
                    {target}
                </HoverCard.Target>
                <HoverCard.Dropdown bg='#232426' c='#fafafa'>

                    <div className="d-flex justify-content-between">
                        <Avatar size='xl' className='me-2 profile-card-avatar'
                        src={userProfileDto !== null &&
                        userProfileDto.avatarType === 'image' ? constructImageSrc(userProfileDto.pfd.data, userProfileDto.avatarType) : 'none'}
                        style={{backgroundImage: userProfilePicture !== null && userProfileDto == null ? `url(${userProfilePicture})` : 'none', overflow: "visible",
                        cursor: "pointer",backgroundSize: 'cover', borderRadius: "50%"}} 
                        >
                        </Avatar>
                        <div >
                            <Button className="profile-card-user-status-btn ">Online</Button>
                        </div> 
                    </div>

                    <div>
                            <div className="mt-3 nunito-sans-font" style={{fontSize: "1.15rem"}}>
                                <span className="nunito-sans-font-600">{userFullName} </span>(you)
                            </div>
                            
                            <div className="mt-2 ">
                                <span><IconMail style={{width: "1.3rem"}}/></span>
                                <span className="ps-3 nunito-sans-font">{userEmail}</span>
                                <span className="ps-2">
                                    { emailCopied ?
                                    <IconClipboardCheck style={{width: "1.2rem", cursor: "pointer", color: "rgb(4, 156, 4)"}}/>
                                    :
                                    <IconClipboard onClick={handleEmailCopyClick} style={{width: "1.1rem", cursor: "pointer"}}/>
                                    }
                                </span>
                            </div>

                            <div className="mt-2 ">
                                <span><IconClock style={{width: "1.3rem"}}/></span>
                                <span className="ps-3 nunito-sans-font">{currentTime}</span>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between mt-4">
                            <Button className="profile-card-view-profile-btn">View Profile</Button>
                        </div>
                </HoverCard.Dropdown>
            </HoverCard>
        </>
    );
};