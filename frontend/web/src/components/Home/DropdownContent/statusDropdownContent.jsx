import React, { useState,useEffect } from 'react';

import { Menu,rem, Input } from '@mantine/core';
import {
    IconCheck,IconProgress,IconCircle,IconCircleCheckFilled
  } from '@tabler/icons-react';

import './dropdownContent.css';

const StatusDropdownContent = (props) => {
    const {element,handleTaskUpdateNew, taskType,setTaskType,idx,setCurrentTaskStatus } = props;
    const originalStatusItems = [
        {icon: <IconCircle style={{ width: rem(14), height: rem(14) }} />, name: 'To Do'},
        {icon: <IconProgress style={{ width: rem(14), height: rem(14) }} />, name: 'In Progress'},
        {icon: <IconCircleCheckFilled style={{ width: rem(14), height: rem(14) }} />, name: 'Completed'},
    ];

    const statusNames = originalStatusItems.map(item => item.name);
    const [statusItems, setStatusItems] = useState(statusNames);
    const [statusInputValue, setStatusInputValue] = useState('');
    
    async function handleStatusSearch(event) {
        const statusInput = event.target.value;
        if (event.key === 'Enter' && !/^\s*$/.test(statusInput)) {
            if (statusNames.filter(item => item.name === statusInput.trim())) {
                const tagEntered = statusNames.find(item => item.name === statusInput.trim());
                if (tagEntered !== undefined) {
                    try {
                        // const addedTag =  await addExistingTagInfo(taskType[currentIndex].id,tagEntered.id);
                        // if (addedTag) {
                        //     const updatedTags = [...currentTaskTags, addedTag];
                        //     setCurrentTaskTags(updatedTags);
                        // } else {
                        //     console.error('Error creating tag: Tag data is null');
                        // }
                    } catch (error) {
                        console.error('Error creating tag:', error);
                    }
                } else {
                    // handleTagCreation(tagName);
                }
                // setIsDropdownOpen(!isDropdownOpen);
            }
        }
        

        setStatusInputValue(statusInput);
    }

    useEffect(() => {
        const filteredItems = statusInputValue === ""
            ? originalStatusItems
            : originalStatusItems.filter((item) =>
                item.name.toLowerCase().startsWith(statusInputValue.toLowerCase().trim())
            );
        
        setStatusItems(filteredItems);
    }, [statusInputValue]);

    return (
        <>
            <div className='d-flex align-items-center' style={{borderBottom: "1px solid #898989"}}>
                <form className="model-dropdown-search" role='search' onSubmit={(event) => {event.preventDefault(); return false;}}>
                    <Input
                        className="model-dropdown-search-input"
                        type="text"
                        placeholder={`Search`}                                               
                        onChange={handleStatusSearch}
                        onKeyDown={handleStatusSearch}
                        value={statusInputValue}
                    />
                </form>
            </div> 
            {statusItems.map((item, index) => (
                
                <Menu.Item
                    onClick={() => {handleTaskUpdateNew(element,item.name, 'status', taskType,setTaskType,idx);
                        setCurrentTaskStatus && setCurrentTaskStatus(item.name);}
                    }
                    key={index}
                    className='task-card-content-dropdown-item'
                    leftSection={item.icon}
                    rightSection={element.status === item.name && <IconCheck style={{ color: "teal" }} />}
                >
                    {item.name}
                </Menu.Item>
            ))}
        </>
    );
};

export default StatusDropdownContent;