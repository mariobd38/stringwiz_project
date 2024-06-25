import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import SignUpHeader from '../../../src/components/SignUp/signupHeader';

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

import {
    Text,
    Button,
    Avatar,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import './onboarding.css';
import { getUserInfo } from '../../DataManagement/Users/getUserInfo';
import { selectProfile } from '../../DataManagement/Users/selectProfile';
import OnboardingProfileModal from './OnboardingProfileModal/onboardingProfileModal';

const initialColorSwatchList = [
    { color: "#414141", active: true },
    { color: "#767e86", active: false },
    { color: "#fa5252", active: false },
    { color: "#d63970", active: false },
    { color: "#be4bdb", active: false },
    { color: "#8960f2", active: false },
    { color: "#4c6ef5", active: false },
    { color: "#228be6", active: false },
    { color: "#15aabf", active: false },
    { color: "#12b886", active: false },
    { color: "#40c057", active: false },
    { color: "#82c91e", active: false },
    { color: "#fab005", active: false },
    { color: "#fd7e14", active: false },
]

const Onboarding = () => {
    const [userInfo, setUserInfo] = useState({ email: '', fullName: '', picture: null, profile: null});
    const navigate = useNavigate();
    
    const [customizedProfileColor, setCustomizedProfileColor] = useState("#414141");
    const [colorSwatchList, setColorSwatchList] = useState(initialColorSwatchList);
    const [opened, { open, close }] = useDisclosure(false);

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const location = useLocation();
    const [picture, setPicture] = useState(location.state && location.state.picture ? location.state.picture : null);
    const [initials, setInitials] = useState('')
    useEffect(() => {
        // getUserInfo(setUserInfo);
        const fetchUserData = async () => {
            await getUserInfo(setUserInfo);
            // setLoading(false); // Set loading to false after data is fetched
        };
        fetchUserData();
    },[]);

    useEffect(() => {
        if (userInfo.fullName) {
            const nameParts = userInfo.fullName.split(' ');
            const firstName = nameParts[0];
            const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';
            setInitials(firstName[0] + (lastName[0] || ''));
        }
    }, [userInfo.fullName]);


    useEffect(() => {
        if (location.state && location.state.picture) {
            setPicture(location.state.picture);
            console.log(location.state.picture);
        }
    }, [location.state]);

    const listUpdate = (color, list) => {
        setCustomizedProfileColor(color);
        const updatedColorSwatchList = list.map((swatch) =>
            swatch.color === color ? { ...swatch, active: true } : { ...swatch, active: false }
        );

        setColorSwatchList(updatedColorSwatchList);
    }

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const defaultProfileOption = {
        option: (
            <Avatar className='onboarding-new-profile-parent'
                    style={{ backgroundImage: `url(${picture})`, backgroundSize: 'cover', overflow: "visible" }}>
                
                <div className="onboarding-profile-selected">
                    <CheckRoundedIcon className="onboarding-profile-selected-icon" />
                </div>
            </Avatar>
        ),
        text: <Text pt={10} fw={500} fz={17}>Default</Text>,
        color: null, avatarType: 'default', thumbUrl: null, file: null
    };

    const onOpen = () => {
        open();
        if (activeFile != null) {
            const newColor = colorSwatchList.length > 0 && colorSwatchList[0].color;
            listUpdate(newColor, colorSwatchList);
        }
    };

    const [profileOptions, setProfileOptions] = useState(picture ? [defaultProfileOption] : []);
    const [selectedProfile, setSelectedProfile] = useState(picture ? profileOptions[0] : []);
    
    const handleAvatarClick = (index) => {

        const updatedProfileOptions = profileOptions.map((item, i) => ({
            ...item,
            option: (
                <Avatar className='onboarding-new-profile-parent'
                        style={{ backgroundColor: item.color && item.color, 
                            backgroundImage: item.avatarType === 'default' ? `url(${picture})` : (item.avatarType === 'image' ? `url(${item.thumbUrl})` : 'none'),
                            backgroundSize: 'cover', overflow: "visible" }}>
                    
                    {/* <span className='onboarding-new-profile'>{(i !== 0 && item.avatarType === 'color') && initials}</span> */}
                    <span className='onboarding-new-profile'>{(item.avatarType === 'color') && initials}</span>
                    {i === index && (
                        <div className="onboarding-profile-selected">
                            <CheckRoundedIcon className="onboarding-profile-selected-icon" />
                        </div>
                    )}
                </Avatar>
            )
        }));
        setSelectedProfile(profileOptions[index]);
        console.log(profileOptions);
        setProfileOptions(updatedProfileOptions);
    };

    //upload
    const [activeFile, setActiveFile] = useState(null);


    const handleContinueWithProfileAvatar = () => {
        selectProfile(selectedProfile,setUserInfo);
        navigate('/home', { state: { userInfo }});
    }

    return (
        <div className='w-100'>
            <SignUpHeader />

            <div>
                <div className="pt-4 px-5">
                    <div style={{minHeight: "54px"}}>
                        <Text fw={690} fz={35} c='#222222' ta='center'>Welcome to Cocollabs!</Text>
                    </div>
                    <Text fw={500} fz={25} c='#2a2b2d' ta='center' pt={60}>Select a profile avatar</Text>

                    <div className={`d-flex w-100 flex-wrap pt-5 justify-content-center ${profileOptions.length !== 0 && 'gap-5'}`}>
                        <div className='d-flex flex-column align-items-center'>
                            <span className='d-flex gap-5 flex-wrap justify-content-center'>
                                
                                {profileOptions.map((item, index) => (
                                    
                                    <div
                                        key={index}
                                        className='d-flex flex-column align-items-center'
                                        style={{
                                            borderRadius: "50%",
                                            cursor: "pointer",
                                            transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
                                            transition: "transform 0.3s ease"
                                        }}
                                        onClick={() => handleAvatarClick(index)}
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <span>{item.option}</span>
                                        {item.text}
                                    </div>
                                ))}
                            </span>
                        </div>
                            
                        <div className='d-flex flex-column align-items-center'>
                            {colorSwatchList.length > 0 && 
                            <span className='d-flex'>
                                <div className='d-flex flex-column align-items-center'>
                                    <span className='onboarding-add-new-profile-button' onClick={onOpen}>
                                        <AddRoundedIcon style={{width: "2.5rem",height: "2.5rem"}}/>
                                    </span>
                                    <Text pt={10} fw={500} align='center' fz={17}>Customize</Text>
                                </div>

                                <div className='d-flex flex-column align-items-center'>
                                </div>
                            </span>
                            }

                            <OnboardingProfileModal 
                                opened={opened}
                                close={close}
                                initials={initials}
                                setProfileOptions={setProfileOptions}
                                activeFile={activeFile}
                                setActiveFile={setActiveFile}
                                customizedProfileColor={customizedProfileColor}
                                setCustomizedProfileColor={setCustomizedProfileColor}
                            />

                        </div>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center pt-5'>
                        <Button px={20} py={3} radius='md' onClick={handleContinueWithProfileAvatar}>Continue</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Onboarding;