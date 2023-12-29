import React, { useState, useEffect } from 'react';
import { useLocalState } from "../../../utils/useLocalStorage";
import Button from 'react-bootstrap/Button';
import CheckIcon from '@mui/icons-material/Check';
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
    // const [topTextColor, setTopTextColor] = useLocalState("#000000", topTextColor);



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

    const [isBlackBtnChecked, setIsBlackBtnChecked] = useState(false);
    const [isWhiteBtnChecked, setIsWhiteBtnChecked] = useState(false);
    const [isBlueBtnChecked, setIsBlueBtnChecked] = useState(false);
    const [isGradient1BtnChecked, setIsGradient1BtnChecked] = useState(false);
    const [isGradient2BtnChecked, setIsGradient2BtnChecked] = useState(false);
    const [isGradient3BtnChecked, setIsGradient3BtnChecked] = useState(false);
    const [isGradient4BtnChecked, setIsGradient4BtnChecked] = useState(false);
    const [isGradient5BtnChecked, setIsGradient5BtnChecked] = useState(false);
    const [isGradient6BtnChecked, setIsGradient6BtnChecked] = useState(false);
    const [isGradient7BtnChecked, setIsGradient7BtnChecked] = useState(false);
    const [isGradient8BtnChecked, setIsGradient8BtnChecked] = useState(false);
    const [isGradient9BtnChecked, setIsGradient9BtnChecked] = useState(false);
    const [isGradient10BtnChecked, setIsGradient10BtnChecked] = useState(false);
    const [isGradient11BtnChecked, setIsGradient11BtnChecked] = useState(false);
    const [isGradient12BtnChecked, setIsGradient12BtnChecked] = useState(false);
    const [gradientButtonStates, setGradientButtonStates] = useState([
        isBlackBtnChecked,
        isWhiteBtnChecked,
        isBlueBtnChecked,
        isGradient1BtnChecked,
        isGradient2BtnChecked,
        isGradient3BtnChecked,
        isGradient4BtnChecked,
        isGradient5BtnChecked,
        isGradient6BtnChecked,
        isGradient7BtnChecked,
        isGradient8BtnChecked,
        isGradient9BtnChecked,
        isGradient10BtnChecked,
        isGradient11BtnChecked,
        isGradient12BtnChecked,
      ]);


    const handleBackgroundColor = (event, colorValue, image1Value, image2Value) => {
        const targetId = event.currentTarget.id;
        if (targetId === "black-btn") {
            // console.log(event.currentTarget.classList[0]);
            setBackgroundColor(colorValue);
            setBackgroundImage(image1Value);
            setIsBlackBtnChecked(true);
            setIsWhiteBtnChecked(false);
            setIsBlueBtnChecked(false);
            setIsGradient1BtnChecked(false);
            setIsGradient2BtnChecked(false);
            setIsGradient3BtnChecked(false);
            setIsGradient4BtnChecked(false);
            setIsGradient5BtnChecked(false);
            setIsGradient6BtnChecked(false);
            setIsGradient7BtnChecked(false);
            setIsGradient8BtnChecked(false);
            setIsGradient9BtnChecked(false);
            setIsGradient10BtnChecked(false);
            setIsGradient11BtnChecked(false);
            setIsGradient12BtnChecked(false);

        }  else if (targetId === "white-btn") {
            setBackgroundColor("#e7e7e7");
            setBackgroundImage(null);
            setIsBlackBtnChecked(false);
            setIsWhiteBtnChecked(true);
            setIsBlueBtnChecked(false);
            setIsGradient1BtnChecked(false);
            setIsGradient2BtnChecked(false);
            setIsGradient3BtnChecked(false);
            setIsGradient4BtnChecked(false);
            setIsGradient5BtnChecked(false);
            setIsGradient6BtnChecked(false);
            setIsGradient7BtnChecked(false);
            setIsGradient8BtnChecked(false);
            setIsGradient9BtnChecked(false);
            setIsGradient10BtnChecked(false);
            setIsGradient11BtnChecked(false);
            setIsGradient12BtnChecked(false);

        } else if (targetId === "blue-btn") {
            setBackgroundColor("#044863");
            setBackgroundImage(null);
            setIsBlackBtnChecked(false);
            setIsWhiteBtnChecked(false);
            setIsBlueBtnChecked(true);
            setIsGradient1BtnChecked(false);
            setIsGradient2BtnChecked(false);
            setIsGradient3BtnChecked(false);
            setIsGradient4BtnChecked(false);
            setIsGradient5BtnChecked(false);
            setIsGradient6BtnChecked(false);
            setIsGradient7BtnChecked(false);
            setIsGradient8BtnChecked(false);
            setIsGradient9BtnChecked(false);
            setIsGradient10BtnChecked(false);
            setIsGradient11BtnChecked(false);
            setIsGradient12BtnChecked(false);

        } else if (targetId === "gradient1-btn") {
            setBackgroundColor("#4158D0");
            setBackgroundImage("linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)");
            setIsBlackBtnChecked(false);
            setIsWhiteBtnChecked(false);
            setIsBlueBtnChecked(false);
            setIsGradient1BtnChecked(true);
            setIsGradient2BtnChecked(false);
            setIsGradient3BtnChecked(false);
            setIsGradient4BtnChecked(false);
            setIsGradient5BtnChecked(false);
            setIsGradient6BtnChecked(false);
            setIsGradient7BtnChecked(false);
            setIsGradient8BtnChecked(false);
            setIsGradient9BtnChecked(false);
            setIsGradient10BtnChecked(false);
            setIsGradient11BtnChecked(false);
            setIsGradient12BtnChecked(false);

        } else if (targetId === "gradient2-btn") {
            setBackgroundColor("#0093E9");
            setBackgroundImage("linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)");
            setIsBlackBtnChecked(false);
            setIsWhiteBtnChecked(false);
            setIsBlueBtnChecked(false);
            setIsGradient1BtnChecked(false);
            setIsGradient2BtnChecked(true);
            setIsGradient3BtnChecked(false);
            setIsGradient4BtnChecked(false);
            setIsGradient5BtnChecked(false);
            setIsGradient6BtnChecked(false);
            setIsGradient7BtnChecked(false);
            setIsGradient8BtnChecked(false);
            setIsGradient9BtnChecked(false);
            setIsGradient10BtnChecked(false);
            setIsGradient11BtnChecked(false);
            setIsGradient12BtnChecked(false);

        } else if (targetId === "gradient3-btn") {
            setBackgroundColor("#00DBDE");
            setBackgroundImage("linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)");
            setIsBlackBtnChecked(false);
            setIsWhiteBtnChecked(false);

            setIsBlueBtnChecked(false);
            setIsGradient1BtnChecked(false);
            setIsGradient2BtnChecked(false);
            setIsGradient3BtnChecked(true);
            setIsGradient4BtnChecked(false);
            setIsGradient5BtnChecked(false);
            setIsGradient6BtnChecked(false);
            setIsGradient7BtnChecked(false);
            setIsGradient8BtnChecked(false);
            setIsGradient9BtnChecked(false);
            setIsGradient10BtnChecked(false);
            setIsGradient11BtnChecked(false);
            setIsGradient12BtnChecked(false);

        } else if (targetId === "gradient4-btn") {
            setBackgroundColor("#0F2027");
            setBackgroundImage("-webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027)");
            setBackgroundImage("linear-gradient(to right, #2C5364, #203A43, #0F2027)");
            setIsBlackBtnChecked(false);
            setIsWhiteBtnChecked(false);

            setIsBlueBtnChecked(false);
            setIsGradient1BtnChecked(false);
            setIsGradient2BtnChecked(false);
            setIsGradient3BtnChecked(false);
            setIsGradient4BtnChecked(true);
            setIsGradient5BtnChecked(false);
            setIsGradient6BtnChecked(false);
            setIsGradient7BtnChecked(false);
            setIsGradient8BtnChecked(false);
            setIsGradient9BtnChecked(false);
            setIsGradient10BtnChecked(false);
            setIsGradient11BtnChecked(false);
            setIsGradient12BtnChecked(false);

        } else if (targetId === "gradient5-btn") {
            setBackgroundColor("#ff0099");
            setBackgroundImage("-webkit-linear-gradient(to right, #ff0099, #493240)");
            setBackgroundImage("linear-gradient(to right, #ff0099, #493240)");
            setIsBlackBtnChecked(false);
            setIsWhiteBtnChecked(false);

            setIsBlueBtnChecked(false);
            setIsGradient1BtnChecked(false);
            setIsGradient2BtnChecked(false);
            setIsGradient3BtnChecked(false);
            setIsGradient4BtnChecked(false);
            setIsGradient5BtnChecked(true);
            setIsGradient6BtnChecked(false);
            setIsGradient7BtnChecked(false);
            setIsGradient8BtnChecked(false);
            setIsGradient9BtnChecked(false);
            setIsGradient10BtnChecked(false);
            setIsGradient11BtnChecked(false);
            setIsGradient12BtnChecked(false);

        } else if (targetId === "gradient6-btn") {
            setBackgroundColor("#355C7D");
            setBackgroundImage("-webkit-linear-gradient(to left, #C06C84, #6C5B7B, #355C7D)");
            setBackgroundImage("linear-gradient(to left, #C06C84, #6C5B7B, #355C7D)");
            setIsBlackBtnChecked(false);
            setIsWhiteBtnChecked(false);

            setIsBlueBtnChecked(false);
            setIsGradient1BtnChecked(false);
            setIsGradient2BtnChecked(false);
            setIsGradient3BtnChecked(false);
            setIsGradient4BtnChecked(false);
            setIsGradient5BtnChecked(false);
            setIsGradient6BtnChecked(true);
            setIsGradient7BtnChecked(false);
            setIsGradient8BtnChecked(false);
            setIsGradient9BtnChecked(false);
            setIsGradient10BtnChecked(false);
            setIsGradient11BtnChecked(false);
            setIsGradient12BtnChecked(false);

        } else if (targetId === "gradient7-btn") {
            setBackgroundColor("#000428");
            setBackgroundImage("-webkit-linear-gradient(to left, #004e92, #000428)");
            setBackgroundImage("linear-gradient(to left, #004e92, #000428)");
            setIsBlackBtnChecked(false);
            setIsWhiteBtnChecked(false);

            setIsBlueBtnChecked(false);
            setIsGradient1BtnChecked(false);
            setIsGradient2BtnChecked(false);
            setIsGradient3BtnChecked(false);
            setIsGradient4BtnChecked(false);
            setIsGradient5BtnChecked(false);
            setIsGradient6BtnChecked(false);
            setIsGradient7BtnChecked(true);
            setIsGradient8BtnChecked(false);
            setIsGradient9BtnChecked(false);
            setIsGradient10BtnChecked(false);
            setIsGradient11BtnChecked(false);
            setIsGradient12BtnChecked(false);

        } else if (targetId === "gradient8-btn") {
            setBackgroundColor("#283048");
            setBackgroundImage("-webkit-linear-gradient(to left, #283048, #859398)");
            setBackgroundImage("linear-gradient(to left, #283048, #859398)");
            setIsBlackBtnChecked(false);
            setIsWhiteBtnChecked(false);

            setIsBlueBtnChecked(false);
            setIsGradient1BtnChecked(false);
            setIsGradient2BtnChecked(false);
            setIsGradient3BtnChecked(false);
            setIsGradient4BtnChecked(false);
            setIsGradient5BtnChecked(false);
            setIsGradient6BtnChecked(false);
            setIsGradient7BtnChecked(false);
            setIsGradient8BtnChecked(true);
            setIsGradient9BtnChecked(false);
            setIsGradient10BtnChecked(false);
            setIsGradient11BtnChecked(false);
            setIsGradient12BtnChecked(false);

        } else if (targetId === "gradient9-btn") {
            setBackgroundColor("#73C8A9");
            setBackgroundImage("-webkit-linear-gradient(to left, #373B44, #73C8A9)");
            setBackgroundImage("linear-gradient(to left, #373B44, #73C8A9)");
            setIsBlackBtnChecked(false);
            setIsWhiteBtnChecked(false);
            
            setIsBlueBtnChecked(false);
            setIsGradient1BtnChecked(false);
            setIsGradient2BtnChecked(false);
            setIsGradient3BtnChecked(false);
            setIsGradient4BtnChecked(false);
            setIsGradient5BtnChecked(false);
            setIsGradient6BtnChecked(false);
            setIsGradient7BtnChecked(false);
            setIsGradient8BtnChecked(false);
            setIsGradient9BtnChecked(true);
            setIsGradient10BtnChecked(false);
            setIsGradient11BtnChecked(false);
            setIsGradient12BtnChecked(false);

        } else if (targetId === "gradient10-btn") {
            setBackgroundColor("#6441A5");
            setBackgroundImage("-webkit-linear-gradient(to left, #2a0845, #6441A5)");
            setBackgroundImage("linear-gradient(to left, #2a0845, #6441A5)");
            setIsBlackBtnChecked(false);
            setIsWhiteBtnChecked(false);

            setIsBlueBtnChecked(false);
            setIsGradient1BtnChecked(false);
            setIsGradient2BtnChecked(false);
            setIsGradient3BtnChecked(false);
            setIsGradient4BtnChecked(false);
            setIsGradient5BtnChecked(false);
            setIsGradient6BtnChecked(false);
            setIsGradient7BtnChecked(false);
            setIsGradient8BtnChecked(false);
            setIsGradient9BtnChecked(false);
            setIsGradient10BtnChecked(true);
            setIsGradient11BtnChecked(false);
            setIsGradient12BtnChecked(false);

        } else if (targetId === "gradient11-btn") {
            setBackgroundColor("#11998e");
            setBackgroundImage("-webkit-linear-gradient(to left, #38ef7d, #11998e)");
            setBackgroundImage("linear-gradient(to left, #38ef7d, #11998e)");
            setIsBlackBtnChecked(false);
            setIsWhiteBtnChecked(false);

            setIsBlueBtnChecked(false);
            setIsGradient1BtnChecked(false);
            setIsGradient2BtnChecked(false);
            setIsGradient3BtnChecked(false);
            setIsGradient4BtnChecked(false);
            setIsGradient5BtnChecked(false);
            setIsGradient6BtnChecked(false);
            setIsGradient7BtnChecked(false);
            setIsGradient8BtnChecked(false);
            setIsGradient9BtnChecked(false);
            setIsGradient10BtnChecked(false);
            setIsGradient11BtnChecked(true);
            setIsGradient12BtnChecked(false);

        } else if (targetId === "gradient12-btn") {
            setBackgroundColor("#BA8B02");
            setBackgroundImage("-webkit-linear-gradient(to left, #181818, #BA8B02)");
            setBackgroundImage("linear-gradient(to left, #181818, #BA8B02)");

            setIsBlackBtnChecked(false);
            setIsWhiteBtnChecked(false);

            setIsBlueBtnChecked(false);
            setIsGradient1BtnChecked(false);
            setIsGradient2BtnChecked(false);
            setIsGradient3BtnChecked(false);
            setIsGradient4BtnChecked(false);
            setIsGradient5BtnChecked(false);
            setIsGradient6BtnChecked(false);
            setIsGradient7BtnChecked(false);
            setIsGradient8BtnChecked(false);
            setIsGradient9BtnChecked(false);
            setIsGradient10BtnChecked(false);
            setIsGradient11BtnChecked(false);
            setIsGradient12BtnChecked(true);

        }
        const gradientButtons = [
            setIsBlackBtnChecked,
            setIsWhiteBtnChecked,
            setIsBlueBtnChecked,
            setIsGradient1BtnChecked,
            setIsGradient2BtnChecked,
            setIsGradient3BtnChecked,
            setIsGradient4BtnChecked,
            setIsGradient5BtnChecked,
            setIsGradient6BtnChecked,
            setIsGradient7BtnChecked,
            setIsGradient8BtnChecked,
            setIsGradient9BtnChecked,
            setIsGradient10BtnChecked,
            setIsGradient11BtnChecked,
            setIsGradient12BtnChecked,
        ];

        // gradientButtons.forEach((btn, index) => btn(index === colorValue ?  true : false));
       

    }
    useEffect(() => {
        document.body.style.backgroundColor = backgroundColor;
        document.body.style.backgroundImage = backgroundImage;

        const homeHeaderText = document.querySelectorAll('.home-header-text');
        const textColor = backgroundColor === '#e7e7e7' ? '#000000' : '#ffffff';

        homeHeaderText.forEach(element => {
            element.style.color = textColor;
        });
      }, [backgroundColor, backgroundImage]);

    return (
        <>
            <div className='pt-4 d-none d-sm-block'>
                <div className='d-flex justify-content-between'>
                    <h2 className=' home-header-text home-text pt-2 m-0'> My Home</h2>
                    
                    <Button className='customize-bg' onClick={(event) => handleCustomizePopoverClick(event, )}>
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
                                <Button id="black-btn" className='customize-btn mx-1 ' onClick={(event) => handleBackgroundColor(event, "#1e1f21",null, null)}>
                                    <div className='d-flex justify-content-center'>
                                        {isBlackBtnChecked && <CheckIcon className=' background-color-check' id='black-btn-check' />}
                                    </div>
                                </Button>

                                <Button id="white-btn" className='customize-btn mx-1' onClick={handleBackgroundColor}>
                                    <div className="d-flex justify-content-center">
                                        {isWhiteBtnChecked && <CheckIcon className='background-color-check text-black' id='white-btn-check' />}
                                    </div>

                                </Button>
                                <Button id="blue-btn" className='customize-btn mx-1' onClick={handleBackgroundColor}>
                                    <div className="d-flex justify-content-center">
                                        {isBlueBtnChecked && <CheckIcon className='background-color-check' id='blue-btn-check' />}
                                    </div>
                                </Button>                        
                            </div>
                            <div className='mt-3'>
                                <Button id="gradient1-btn" className='customize-btn mx-1' onClick={handleBackgroundColor}>
                                    <div className="d-flex justify-content-center">
                                        {isGradient1BtnChecked && <CheckIcon className='background-color-check' id='gradient1-btn-check' />}
                                    </div>
                                </Button>
                                <Button id="gradient2-btn" className='customize-btn mx-1' onClick={handleBackgroundColor}>
                                    <div className="d-flex justify-content-center">
                                        {isGradient2BtnChecked && <CheckIcon className='background-color-check' id='gradient2-btn-check' />}
                                    </div>
                                </Button>
                                <Button id="gradient3-btn" className='customize-btn mx-1' onClick={handleBackgroundColor}>
                                    <div className="d-flex justify-content-center">
                                        {isGradient3BtnChecked && <CheckIcon className='background-color-check' id='gradient3-btn-check' />}
                                    </div>
                                </Button>

                            </div>
                            <div className='mt-3'>
                                <Button id="gradient4-btn" className='customize-btn mx-1' onClick={handleBackgroundColor}>
                                    <div className="d-flex justify-content-center">
                                        {isGradient4BtnChecked && <CheckIcon className='background-color-check' id='gradient4-btn-check' />}
                                    </div>
                                </Button>
                                <Button id="gradient5-btn" className='customize-btn mx-1' onClick={handleBackgroundColor}>
                                    <div className="d-flex justify-content-center">
                                        {isGradient5BtnChecked && <CheckIcon className='background-color-check' id='gradient5-btn-check' />}
                                    </div>
                                </Button>
                                <Button id="gradient6-btn" className='customize-btn mx-1' onClick={handleBackgroundColor}>
                                    <div className="d-flex justify-content-center">
                                        {isGradient6BtnChecked && <CheckIcon className='background-color-check' id='gradient6-btn-check' />}
                                    </div>
                                </Button>
                            </div>
                            <div className='mt-3'>
                                <Button id="gradient7-btn" className='customize-btn mx-1' onClick={handleBackgroundColor}>
                                    <div className="d-flex justify-content-center">
                                        {isGradient7BtnChecked && <CheckIcon className='background-color-check' id='gradient7-btn-check' />}
                                    </div>
                                </Button>
                                <Button id="gradient8-btn" className='customize-btn mx-1' onClick={handleBackgroundColor}>
                                    <div className="d-flex justify-content-center">
                                        {isGradient8BtnChecked && <CheckIcon className='background-color-check' id='gradient8-btn-check' />}
                                    </div>
                                </Button>
                                <Button id="gradient9-btn" className='customize-btn mx-1' onClick={handleBackgroundColor}>
                                    <div className="d-flex justify-content-center">
                                        {isGradient9BtnChecked && <CheckIcon className='background-color-check' id='gradient9-btn-check' />}
                                    </div>
                                </Button>
                            </div>
                            <div className='mt-3'>
                                <Button id="gradient10-btn" className='customize-btn mx-1' onClick={handleBackgroundColor}>
                                    <div className="d-flex justify-content-center">
                                        {isGradient10BtnChecked && <CheckIcon className='background-color-check' id='gradient10-btn-check' />}
                                    </div>
                                </Button>
                                <Button id="gradient11-btn" className='customize-btn mx-1' onClick={handleBackgroundColor}>
                                    <div className="d-flex justify-content-center">
                                        {isGradient11BtnChecked && <CheckIcon className='background-color-check' id='gradient11-btn-check' />}
                                    </div>
                                </Button>
                                <Button id="gradient12-btn" className='customize-btn mx-1' onClick={handleBackgroundColor}>
                                <div className="d-flex justify-content-center">
                                        {isGradient12BtnChecked && <CheckIcon className='background-color-check' id='gradient12-btn-check' />}
                                    </div>
                                </Button>
                            </div>
                            </Typography>
                    </Popover>
                </div>
                <hr className='home-header-text '/>
            </div>
            <div className='pt-5 pt-sm-3 home-header-text text-center'>
                <h2 className=' today'>{todays_date}</h2>
                <h2 className=' greeting pt-1'>{greeting}, <span>{firstName}</span> {timeEmoji}</h2> 
            </div>
        </>
    )
}

export default HomeHeader;