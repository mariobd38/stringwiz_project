import React, { useState, useEffect } from 'react';
import { useLocalState } from "../../utils/useLocalStorage";
import Button from 'react-bootstrap/Button';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import './homeHeader.css';



const HomeHeader = () => {
    const dayjs = require('dayjs');

    const [userFullName] = useLocalState("", "userFullName");


    var now = Intl.DateTimeFormat().resolvedOptions().timeZone;
    now = dayjs();
    const date = new Date(now.year(), now.month(), now.date());  // 2009-11-10
    const month = date.toLocaleString('default', { month: 'long' });
    const dayOfWeek = date.toLocaleDateString('en-US',{weekday: 'long'});
    const todays_date = dayOfWeek + ", " + month + " " + date.getDate();

    let hour = now.hour();
    let minute = now.minute();
    let greeting = "Good ";
    const firstName = userFullName.split(' ')[0];

    let timeEmoji = "";
    switch(true) {
        case (hour < 6):
            greeting += "night";
            timeEmoji = "😴";
            break;
        case (hour >= 18 && (hour <= 23 && minute <= 59)):
            greeting += "evening";
            timeEmoji = "🌙";
            break;
        case (hour >= 12):
            greeting += "afternoon";
            timeEmoji = "☀️";
            break;  
        default:
            greeting += "morning";
            timeEmoji = "🌅";
            break;
    }

    const [backgroundColor, setBackgroundColor] = useLocalState("#1e1f21", "backgroundColor");
    const [backgroundImage, setBackgroundImage] = useLocalState(null, "backgroundImage");



    //customize popovers
    const [customizePopoverAnchorEl, setCustomizePopoverAnchorEl] = useState(null);

    const handleCustomizePopoverClick = (event) => {
        setCustomizePopoverAnchorEl(event.currentTarget);
    };

    const handleCustomizePopoverClose = () => {
        setCustomizePopoverAnchorEl(null);
    };

    const openCustomizePopover = Boolean(customizePopoverAnchorEl);
    const customizePopOverId = openCustomizePopover ? 'customize-popover' : undefined;


    const handleBackgroundColor = (event) => {
        console.log(event.target.id);
        const targetId = event.target.id;
        if (targetId === "black-btn") {
            setBackgroundColor("#1e1f21");
            setBackgroundImage(null);
        }
        else if (targetId === "red-btn") {
            setBackgroundColor("#52121a");
            setBackgroundImage(null);
        }
        else if (targetId === "green-btn") {
            setBackgroundColor("#043d13");
            setBackgroundImage(null);
        }
        else if (targetId === "violet-btn") {
            setBackgroundColor("#3b0363");
            setBackgroundImage(null);
        }
        else if (targetId === "blue-btn") {
            setBackgroundColor("#044863");
            setBackgroundImage(null);
        }
        else if (targetId === "rose-btn") {
            setBackgroundColor("#7a0557");
            setBackgroundImage(null);
        }
        else if (targetId === "gradient1-btn") {
            setBackgroundColor("#4158D0");
            setBackgroundImage("linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)");
        }
        else if (targetId === "gradient2-btn") {
            setBackgroundColor("#0093E9");
            setBackgroundImage("linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)");

        }
        else if (targetId === "gradient3-btn") {
            setBackgroundColor("#00DBDE");
            setBackgroundImage("linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)");

        }

        // handleCustomizePopoverClose();
    }
    useEffect(() => {
        document.body.style.backgroundColor = backgroundColor;
        document.body.style.backgroundImage = backgroundImage;
      }, [backgroundColor, backgroundImage]);
      

    return (
        <>
            <div className='pt-4 d-none d-sm-block'>
                <div className='d-flex justify-content-between'>
                    <h2 className='text-white home-text pt-2 m-0'> My Home</h2>
                    
                    <Button className='customize-bg' onClick={handleCustomizePopoverClick}>
                        <DashboardCustomizeIcon></DashboardCustomizeIcon><span className='ps-1'>Customize</span>
                    </Button>
                    <Popover
                        id={customizePopOverId}
                        open={openCustomizePopover}
                        anchorEl={customizePopoverAnchorEl}
                        onClose={handleCustomizePopoverClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        className='customize-popover'
                        >
                        <Typography className='customize-typography'>
                            <div>
                                <Button id="black-btn" className='customize-btn mx-1' onClick={handleBackgroundColor}></Button>
                                <Button id="red-btn" className='customize-btn mx-1' onClick={handleBackgroundColor}></Button>
                                <Button id="green-btn" className='customize-btn mx-1' onClick={handleBackgroundColor}></Button>                        
                            </div>
                            <div className='mt-3'>
                                <Button id="violet-btn" className='customize-btn mx-1' onClick={handleBackgroundColor}></Button>
                                <Button id="blue-btn" className='customize-btn mx-1' onClick={handleBackgroundColor}></Button>
                                <Button id="rose-btn" className='customize-btn mx-1' onClick={handleBackgroundColor}></Button>                        
                            </div>
                            <div className='mt-3'>
                                <Button id="gradient1-btn" className='customize-btn mx-1' onClick={handleBackgroundColor}></Button>
                                <Button id="gradient2-btn" className='customize-btn mx-1' onClick={handleBackgroundColor}></Button>
                                <Button id="gradient3-btn" className='customize-btn mx-1' onClick={handleBackgroundColor}></Button>

                            </div>
                            </Typography>
                    </Popover>
                </div>
                <hr className='text-white '/>
            </div>
            <div className='pt-5 pt-sm-3 text-center'>
                <h2 className='text-white today'>{todays_date}</h2>
                <h2 className='text-white greeting pt-1'>{greeting}, <span>{firstName}</span> {timeEmoji}</h2> 
            </div>
        </>
    )
}

export default HomeHeader;