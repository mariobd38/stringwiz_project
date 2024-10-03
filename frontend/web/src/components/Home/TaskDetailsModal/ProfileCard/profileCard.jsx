import { useState } from "react";

import UserAvatar from "../../UserAvatar/userAvatar";

import { HoverCard, Button, Avatar } from '@mantine/core';

import Icons from "../../../icons/icons";

import { constructImageSrc } from "../../../../utils/constructImageSrc";

import "./profileCard.css";

export const ProfileCard = (props) => {
    const { userFullName, initials, userEmail,userProfileDto, userProfilePicture, target } = props;

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
                        <div className="me-2">
                            <UserAvatar 
                                userProfileDto={userProfileDto}
                                userProfilePicture={userProfilePicture}
                                initials={initials}
                                multiplier={4.8}
                                fontSize={2.3}
                            />
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
                                {/* <span><IconMail style={{width: "1.3rem"}}/></span> */}
                                <span>{Icons('IconMail',20,20)}</span>
                                <span className="ps-3 nunito-sans-font">{userEmail}</span>
                                <span className="ps-2">
                                    { emailCopied ?
                                    Icons('IconClipboardCheck',20,20,"rgb(4, 156, 4)")
                                    :
                                    <span style={{cursor: "pointer"}} onClick={handleEmailCopyClick}>
                                        {Icons('IconClipboard',20,20)}
                                    </span>
                                    }
                                </span>
                            </div>

                            <div className="mt-2 ">
                                {/* <span><IconClock style={{width: "1.3rem"}}/></span> */}
                                <span>{Icons('IconClock',20,20)}</span>
                                <span className="ps-3 nunito-sans-font">{currentTime} local time</span>
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