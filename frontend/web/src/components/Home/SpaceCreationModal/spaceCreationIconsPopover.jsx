import React, { useMemo, isValidElement, useState } from 'react';

import {Icons} from '../../icons/icons';
import { IconsFilled, GetAllFilledIcons } from '../../icons/iconsFilled';

import { Button,Flex,Divider,Avatar,ColorInput,Group,ColorSwatch } from '@mantine/core';
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";


const HexColorInput = ({ value, onChange, spaceIcon, setSpaceIcon, setColor, ...props }) => {
    const handleChange = (newValue) => {
        // Ensure the value starts with '#'
        if (!newValue.startsWith('#')) {
            newValue = '#' + newValue;
        }
        // Limit to 7 characters (# + 6 hex digits)
        newValue = newValue.slice(0, 7);
        // Only allow valid hex characters
        newValue = newValue.replace(/[^#0-9A-Fa-f]/g, '');

        if (isValidElement(spaceIcon.props.children)) {
            const props = spaceIcon.props.children.props;
            setTimeout(() => setSpaceIcon(<Avatar color={newValue} bg='#313b3f' radius="md" w={18}>
                <svg xmlns={props.xmlns} width={props.width} height={props.height} viewBox={props.viewBox}  fill={newValue} className={props.className}>{props.children}</svg>
            </Avatar>),30);
            } else {
                setTimeout(() => setSpaceIcon(<Avatar color={newValue} bg='#313b3f' radius="md" w={18}>M</Avatar>),30);
            }
        setColor(newValue);
        onChange(newValue);
    };
  
    return (
      <ColorInput
        className='space-creation-color-input'
        value={value}
        w='140'
        onChange={handleChange}
        withPicker={false}
        withEyeDropper={false}
        {...props}
      />
    );
};

const MemoizedIconButtons = ({ filledIcons, color, handleSpaceIconClick,activeIndex }) => {
    const memoizedButtons = useMemo(() => {
      return filledIcons.map((icon,index) => (
        <Avatar 
            style={{cursor: "pointer"}} 
            key={icon.key} 
            onClick={() => handleSpaceIconClick(icon.key,index)} 
            variant={`${index === activeIndex ? 'light' : 'transparent'}`}  
            color={color}  
            radius="md" 
            w={18}
            className={`${activeIndex !== index && 'space-creation-icon-button'}`}
        >
            {IconsFilled(icon.key, 18, 18, color)}
        </Avatar>
      ));
    }, [filledIcons, color, handleSpaceIconClick,activeIndex]);
  
    return <>{memoizedButtons}</>;
};

const SpaceCreationIconsPopover = (props) => {
    const { color, setColor, spaceIcon, setSpaceIcon } = props;

    const [colorSwatchActive, setColorSwatchActive] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);
    const filledIcons = useMemo(() => GetAllFilledIcons(), []);

    const handleSpaceIconClick = (key,index) => {
        setActiveIndex(index);
        const icon = key ? IconsFilled(key,25,25,color) : 'M';
        setTimeout(() => setSpaceIcon(<Avatar color={color} bg='#313b3f' radius="md" w={18}>{icon}</Avatar>),30);
    }

    const handleIconColorChange = (newColor) => {
        if (isValidElement(spaceIcon.props.children)) {
            const props = spaceIcon.props.children.props;

            setTimeout(() => setSpaceIcon(<Avatar color={newColor} bg='#313b3f' radius="md" w={18}>
                <svg xmlns={props.xmlns} width={props.width} height={props.height} viewBox={props.viewBox}  fill={newColor} className={props.className}>{props.children}</svg>
            </Avatar>),30);
        } else {
            setTimeout(() => setSpaceIcon(<Avatar color={newColor} bg='#313b3f' radius="md" w={18}>M</Avatar>),30);
        }
        setColor(newColor);
    }

    return (
        <Popover 
            placement="bottom-start" 
            className='space-creation-icon-popover-parent'
        >

            <PopoverTrigger >
                <Button h={40} radius="md" p={0} bg='transparent'>
                    {spaceIcon}
                </Button>
                
            </PopoverTrigger>
            <PopoverContent>
                <Flex mb={10} w='97%' justify='space-between' >
                    {/* <div className='d-flex'> */}
                    {colorSwatchActive ? 
                        <>
                        <Group>
                            <ColorSwatch style={{cursor: "pointer"}} color="#d9d9d9" size={22} onClick={() => handleIconColorChange("#d9d9d9")} />
                            <ColorSwatch style={{cursor: "pointer"}} color="#ffd6ba" size={22} onClick={() => handleIconColorChange("#ffd6ba")}/>
                            <ColorSwatch style={{cursor: "pointer"}} color="#009790" size={22} onClick={() => handleIconColorChange("#009790")}/>
                            <ColorSwatch style={{cursor: "pointer"}} color="#0077b6" size={22} onClick={() => handleIconColorChange("#0077b6")}/>
                            <ColorSwatch style={{cursor: "pointer"}} color="#80ed99" size={22} onClick={() => handleIconColorChange("#80ed99")}/>
                            <ColorSwatch style={{cursor: "pointer"}} color="#e9c46a" size={22} onClick={() => handleIconColorChange("#e9c46a")}/>
                            <ColorSwatch style={{cursor: "pointer"}} color="#e76f51" size={22} onClick={() => handleIconColorChange("#e76f51")}/>
                        </Group>
                            <Divider size="sm" orientation="vertical" h={30} ms='14' m='auto' bd='.1 solid #e7e7e7' />
                        </>
                        :
                        <HexColorInput value={color} onChange={setColor} spaceIcon={spaceIcon} setSpaceIcon={setSpaceIcon} setColor={setColor} />
                    }
                    {/* <HexColorInput value={color} onChange={setColor}  /> */}
                    <div className='d-flex align-items-center'>
                        <Button h={30} p='2px 6px' bg='transparent' bd='.1px solid #e7e7e7' className='space-creation-color-swatch-button' 
                        onClick={() => setColorSwatchActive(!colorSwatchActive)}>
                            {colorSwatchActive ? 
                                Icons('IconHash',21,21,'#fafafa')
                            :
                                Icons('IconColorFilter',21,21,'#fafafa')
                            }
                        </Button>
                    </div>
                    {/* </div> */}
                </Flex>

                <Flex wrap='wrap' justify='center' gap={2} h={280} style={{overflowY: "auto"}}>
                    {/* <Avatar w={20} h={40} variant="transparent" color={color} radius="md"  onClick={() => handleSpaceIconClick(null,-1)} className={`space-creation-icon-button ${activeIndex === -1 ? 'active-icon' : ''}`}>
                        M
                    </Avatar> */}
                    <Avatar 
                        // bg='red'
                        style={{cursor: "pointer"}} 
                        onClick={() => handleSpaceIconClick(null,-1)} 
                        variant={`${activeIndex === -1 ? 'light' : 'transparent'}`}  
                        color={color}  
                        radius="md" 
                        w={18}
                        className={`${!activeIndex === -1 && 'space-creation-icon-button'}`}
                    >
                        M
                    </Avatar>

                    {/* {filledIcons.map((icon) => (
                        <Button key={icon.key} radius='md' onClick={() => handleSpaceIconClick(icon.key)}
                        className='space-creation-icon-button'>
                            {IconsFilled(icon.key,18,18,color)}
                        </Button>
                    ))} */}
                    <MemoizedIconButtons
                        filledIcons={filledIcons}
                        color={color}
                        handleSpaceIconClick={handleSpaceIconClick}
                        activeIndex={activeIndex}
                    />
                </Flex>

            </PopoverContent>
        </Popover>
    );
};

export default SpaceCreationIconsPopover;