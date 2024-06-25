import React, { useState } from 'react';


import {
    Avatar,
    Text,
    Button,
    Modal,
    Group,
    ColorSwatch,
    Divider,
} from '@mantine/core';

import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

import { IconCloudUpload } from '@tabler/icons-react';

import './onboardingProfileModal.css';


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

const OnboardingProfileModal = (props) => {
    const { opened,close, initials, setProfileOptions, activeFile, setActiveFile, customizedProfileColor, setCustomizedProfileColor } = props;

    const [colorSwatchList, setColorSwatchList] = useState(initialColorSwatchList);
    //upload
    const [fileList, setFileList] = useState([]);

    const handleSaveProfile = () => {
        setProfileOptions(prevOptions => {
            const newProfileOption = {
                option: (
                    <Avatar className='onboarding-new-profile-parent'
                            style={{ backgroundColor: customizedProfileColor && customizedProfileColor, overflow: "visible" }}>
                        <span className='onboarding-new-profile'>
                            {customizedProfileColor ? initials : <img src={activeFile.thumbUrl} alt="file" style={{ width: "6rem", height: "6rem", borderRadius: "50%" }} />} 
                        </span>
                    </Avatar>
                ),
                text: null, 
                color: customizedProfileColor, 
                avatarType: customizedProfileColor ? 'color' : 'image',
                thumbUrl: activeFile ? activeFile.thumbUrl : null, file: activeFile
            };
            const isDefaultProfile = prevOptions.length === 0 || prevOptions[prevOptions.length - 1].avatarType === 'default';

            if (isDefaultProfile) {
                // Append the new profile option
                return [...prevOptions, newProfileOption];
            } else {
                // Replace the last item with the new profile option
                return [...prevOptions.slice(0, prevOptions.length - 1), newProfileOption];
            }
        });

        if (!customizedProfileColor) {
            const updatedFileList = fileList.filter(file => file.uid !== activeFile.uid);
            setFileList(updatedFileList);
            
        } 
        close();
    }

    const onChange = ({ fileList: newFileList }) => {
        const updatedFileList = newFileList.map(file => {
            if (!file.thumbUrl && file.originFileObj) {
              file.thumbUrl = URL.createObjectURL(file.originFileObj);
            }
            return file;
        });
        setFileList(updatedFileList);
    };

    const onPreview = (index) => {
        const allItems = document.querySelectorAll('.ant-upload-list-item');
        allItems.forEach(item => item.classList.remove('selected'));

        colorSwatchList.forEach((item, i) => { item.active = false; });
        setCustomizedProfileColor(null);
        if (fileList[index]) {
            setActiveFile(fileList[index]);
        }
        
        allItems[index].classList.add('selected');
    };

    const onRemove = (index) => {
        if (activeFile && (activeFile.uid === fileList[index].uid)) {
            setActiveFile(null);
            const newColor = colorSwatchList.length > 0 && colorSwatchList[0].color;
            listUpdate(newColor, colorSwatchList);
        }
    }

    const handleColorClick = (color) => {
        listUpdate(color, colorSwatchList);
    };

    const listUpdate = (color, list) => {
        setCustomizedProfileColor(color);
        const updatedColorSwatchList = list.map((swatch) =>
            swatch.color === color ? { ...swatch, active: true } : { ...swatch, active: false }
        );

        setColorSwatchList(updatedColorSwatchList);
    }

    return (
        <Modal removeScrollProps={{ allowPinchZoom: true }} size='lg' opened={opened} onClose={close} className='onboarding-modal' title="Profile Picker" centered radius={12}>
            <div className='d-flex flex-column'>
                <div className='d-flex justify-content-center pt-2 pb-4'>
                    <span className='onboarding-customize-profile' style={{background: customizedProfileColor ? customizedProfileColor : '' }}>
                        {customizedProfileColor ? initials : <img src={activeFile.thumbUrl} alt="main-profile" style={{width: "7rem", height:"7rem", borderRadius: "50%"}}/>} 
                    </span>
                </div>

                <div className='d-flex justify-content-between'>
                    <div>
                        <Text fw={500} fz={17} c='#303030' pb={10}>Select an avatar color</Text>

                        <div className="d-flex justify-content-start pt-2">
                            <Group gap={15}>
                                {colorSwatchList.map((item) => (
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

                        <Divider my={20} label='OR'/>
                            
                        <div>
                                    
                            <Text fw={500} fz={17} c='#303030' pb={10} display='flex' justify='start'>Upload an image</Text>

                            <ImgCrop rotationSlider>
                                <Upload
                                    action="/api/upload"
                                    withCredentials={true}
                                    onChange={onChange}
                                    onPreview={(file) => {
                                        const index = fileList.findIndex(f => f.uid === file.uid);
                                        onPreview(index);
                                    }}
                                    listType='picture-card'
                                    defaultFileList={[...fileList]}
                                    showUploadList={{
                                        showPreviewIcon: true,
                                        previewIcon: <CheckRoundedIcon className='fafafa-color'/>,
                                    }}
                                    onRemove={(file) => {
                                        const index = fileList.findIndex(f => f.uid === file.uid);
                                        onRemove(index);
                                    }}
                                    style={{width: "calc(1.95rem * var(--mantine-scale))", height: "calc(1.95rem * var(--mantine-scale))"}}
                                    >

                                    {fileList.length < 4 &&
                                    <div className='onboarding-upload-image-button'>
                                        <IconCloudUpload style={{width: "2.2rem",height: "2.2rem", color: "#66686a"}} className='upload-icon'/> 
                                    </div>
                                    }

                                </Upload>
                            </ImgCrop>
                                    
                        </div>
                    </div>
                </div>

                        
                <div className='d-flex justify-content-end pt-3'>
                    <Button onClick={handleSaveProfile}>Save</Button>
                </div>
                        
            </div>
        </Modal>
    );
};

export default OnboardingProfileModal;