import React, { useState } from 'react';

import SignUpHeader from '../../../src/components/SignUp/signupHeader';

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';


import { IconCloudUpload } from '@tabler/icons-react';

import {
    Text,
    Button,
    Modal,
    Group,
    Avatar,
    ColorSwatch,
    Image,
    SimpleGrid
} from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { useDisclosure } from '@mantine/hooks';

import { readLocalStorageValue } from '@mantine/hooks';

import '@mantine/dropzone/styles.css';
import './onboarding.css';


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
    const fullName = readLocalStorageValue({ key: 'userFullName' });
    const firstName = fullName.split(' ')[0];
    const lastName = fullName.split(' ')[fullName.split(' ').length-1];
    const initials = firstName[0] + lastName[0];
    const profile = readLocalStorageValue({ key: 'userProfile' });
    
    const [customizedProfileColor, setCustomizedProfileColor] = useState("#414141");
    const [colorSwatchList, setColorSwatchList] = useState(initialColorSwatchList);
    const [opened, { open, close }] = useDisclosure(false);

    const midIndex = Math.ceil(colorSwatchList.length / 2);
    const [firstRow, setFirstRow] = useState(colorSwatchList.slice(0, midIndex));
    const [secondRow, setSecondRow] = useState(colorSwatchList.slice(midIndex));

    const [hoveredIndex, setHoveredIndex] = useState(null);

const handleMouseEnter = (index) => {
    setHoveredIndex(index);
};

const handleMouseLeave = () => {
    setHoveredIndex(null);
};

const handleAvatarClick = (index) => {
    const updatedProfileOptions = profileOptions.map((item, i) =>
        i === index
            ? {
                ...item,
                option: (
                    <Avatar className='onboarding-new-profile-parent' style={{ backgroundColor: item.color, overflow: "visible" }}>
                        <span className='onboarding-new-profile'>{initials}</span>
                        <div className="onboarding-profile-selected">
                            <CheckRoundedIcon className="onboarding-profile-selected-icon" />
                        </div>
                    </Avatar>
                )
            }
            : {
                ...item,
                option: (
                    <Avatar className='onboarding-new-profile-parent' style={{ backgroundColor: item.color, overflow: "visible" }}>
                        <span className='onboarding-new-profile'>{initials}</span>
                    </Avatar>
                )
            }
    );

    setProfileOptions(updatedProfileOptions);
};

    const [profileOptions, setProfileOptions] = useState(profile !== undefined ? [
        { option: 
            <Avatar className='onboarding-new-profile-parent'
                            style={{ backgroundImage: `url(${profile})`, backgroundSize: 'cover',overflow: "visible"}}>
 
                        <div className="onboarding-profile-selected">
                            <CheckRoundedIcon className="onboarding-profile-selected-icon" />
                        </div> 
                    </Avatar>
        // <Avatar src={profile} alt="google profile" className='onboarding-new-profile-parent'  style={{ borderRadius: "50%", width: "5rem",height: "5rem" }}>

        // </Avatar>
        ,
        text: <Text pt={10} fw={500} fz={17}>Default</Text>,
        color: null }
    ] : []);

    const handleColorClick = (color) => {
        setCustomizedProfileColor(color);
        const updatedColorSwatchList = colorSwatchList.map((swatch) =>
            swatch.color === color ? { ...swatch, active: true } : { ...swatch, active: false }
        );
        setColorSwatchList(updatedColorSwatchList);
        const midIndex = Math.ceil(updatedColorSwatchList.length / 2);
        setFirstRow(updatedColorSwatchList.slice(0, midIndex));
        setSecondRow(updatedColorSwatchList.slice(midIndex));
    };


    const handleSaveProfile = () => {
        setProfileOptions([...profileOptions, 
            { option: <Avatar className='onboarding-new-profile-parent' 
                            style={{ backgroundColor: customizedProfileColor,overflow: "visible" }}>
                        <span className='onboarding-new-profile'>
                            {initials}
                        </span>
                        {/* <div className="onboarding-profile-selected">
                            <CheckRoundedIcon className="onboarding-profile-selected-icon" />
                        </div>  */}
                    </Avatar>,
                text: null, color: customizedProfileColor }]);

        const updatedColorSwatchList = colorSwatchList.filter(swatch => swatch.color !== customizedProfileColor);
        

        const newColor = updatedColorSwatchList.length > 0 && updatedColorSwatchList[0].color;
        setCustomizedProfileColor(newColor);
        const newColorSwatchList = updatedColorSwatchList.map((swatch) =>
            swatch.color === newColor ? { ...swatch, active: true } : { ...swatch, active: false }
        );


        const midIndex = Math.ceil(newColorSwatchList.length / 2);
        setColorSwatchList(newColorSwatchList);
        setFirstRow(newColorSwatchList.slice(0, midIndex));
        setSecondRow(newColorSwatchList.slice(midIndex));
        close();
    }



    //upload
    const [fileList, setFileList] = useState([
      ]);
      const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
      };
      const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
          src = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file.originFileObj);
            reader.onload = () => resolve(reader.result);
          });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
      };


    const [files, setFiles] = useState([]);

    const previews = files.map((file, index) => {
        const imageUrl = URL.createObjectURL(file);
        return  <div key={index} className='d-flex align-items-center justify-content-center' style={{width: "6rem",height: "6rem", borderRadius: "50%"}}>
                    <img style={{width: "6rem",height: "6rem", borderRadius: "50%"}}  src={imageUrl} onLoad={() => URL.revokeObjectURL(imageUrl)} alt={`Preview ${index}`} />
                </div>;
    });

    const handleFilesChange = (event) => {
        setFiles(Array.from(event.target.files));
    };


    return (
        <div className='w-100'>
            <SignUpHeader />
            {/* <div className='d-flex justify-content-between'> */}
                <div >
                    {/* <div className=''> */}
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
                                    <span className='d-flex gap-5'>
                                        <div className='d-flex flex-column align-items-center'>
                                            <span className='onboarding-add-new-profile-button' onClick={open}>
                                                <AddRoundedIcon style={{width: "2.5rem",height: "2.5rem"}}/>
                                            </span>
                                            <Text pt={10} fw={500} align='center' fz={17}>Customize</Text>
                                        </div>

                                        <div className='d-flex flex-column align-items-center'>
                                            {/* <span className='onboarding-add-new-profile-button'>
                                                <IconCloudUpload style={{width: "2.5rem",height: "2.5rem"}}/>
                                            </span> */}


                                            <Upload
                                                action="/api/upload"
                                                withCredentials={true}
                                                onChange={onChange}
                                                onPreview={onPreview}
                                                className='onboarding-upload-file-wrapper'
                                            >
                                                <span className='onboarding-add-new-profile-button'>
                                                    <IconCloudUpload style={{width: "2.5rem",height: "2.5rem"}}/>
                                                </span>
                                                <Text pt={10} fw={500} fz={17}>Upload</Text>
                                            </Upload>


                                            {/* <Dropzone className='p-0' style={{border: "none"}} accept={IMAGE_MIME_TYPE} onDrop={setFiles}>
                                                <span className='onboarding-add-new-profile-button'>
                                                    <IconCloudUpload style={{width: "2.5rem",height: "2.5rem"}}/>
                                                </span>
                                            </Dropzone>
                                            <Text pt={10} fw={500} fz={17}>Upload</Text>

                                                <SimpleGrid cols={{ base: 1, sm: 4 }} mt={previews.length > 0 ? 'xl' : 0}>
                                                    {previews}
                                                </SimpleGrid> */}

                                        </div>
                                    </span>
                                    
                                    }

                                    <Modal removeScrollProps={{ allowPinchZoom: true }} size='lg' opened={opened} onClose={close} className='onboarding-modal' title="Profile Picker" centered radius={12}>
                                        <div className='d-flex flex-column '>
                                            <div className='d-flex justify-content-center pt-3 pb-4'>
                                                <span className='onboarding-customize-profile' style={{background: customizedProfileColor }}>
                                                    {initials}
                                                </span>
                                            </div>

                                            <div className='d-flex justify-content-between'>
                                                <div>
                                                    <Text fw={500} fz={17} c='#303030' pb={10}>Select an avatar color</Text>

                                                    <div className="d-flex justify-content-start">
                                                        <Group gap={15}>

                                                            {firstRow.map((item) => (
                                                                <div key={item.color} onClick={() => handleColorClick(item.color)}
                                                                    className={`onboarding-color-swatch-highlight ${!item.active && 'notActive'} `} 
                                                                    style={{borderColor: item.active ? item.color : 'white', cursor: item.active ? 'default' : 'pointer'}}>

                                                                    <ColorSwatch
                                                                        className='onboarding-color-swatch'
                                                                        color={item.color}
                                                                    >
                                                                        {item.active && <CheckRoundedIcon style={{ padding: "2px", color: "#fafafa" }} />}
                                                                    </ColorSwatch>
                                                                </div>
                                                            ))}
                                                        </Group>
                                                    </div>
                                                    <div className="d-flex justify-content-start pt-2">
                                                        <Group gap={15}>
                                                            {secondRow.map((item) => (
                                                                <div key={item.color} onClick={() => handleColorClick(item.color)}
                                                                    className={`onboarding-color-swatch-highlight ${!item.active && 'notActive'} `} 
                                                                    style={{borderColor: item.active ? item.color : 'white', cursor: item.active ? 'default' : 'pointer'}}>

                                                                    <ColorSwatch
                                                                        className='onboarding-color-swatch'
                                                                        color={item.color}
                                                                    >
                                                                        {item.active && <CheckRoundedIcon style={{ padding: "2px", color: "#fafafa" }} />}
                                                                    </ColorSwatch>
                                                                </div>
                                                            ))}
                                                        </Group>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='pt-4 d-flex justify-content-end'>
                                                <Button onClick={handleSaveProfile}>Save</Button>
                                            </div>
                                            
                                        </div>
                                    </Modal>

                                    {/* {colorSwatchList.length > 0 && <Text pt={10} fw={500} fz={17}>Customize</Text>
                                        
                                    } */}
                                </div>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center pt-5'>
                                <Button px={20} py={3}>Continue</Button>
                            </div>
                        </div>

                        {/* <div className="col-12 col-xl-5 bg-primary pt-5">a</div> */}
                    {/* </div> */}
                </div>
            {/* </div> */}
            {/* {fullName}
                <img src={profile} alt="" style={{borderRadius: "50%"}}/> */}
            
        </div>
    );
};

export default Onboarding;