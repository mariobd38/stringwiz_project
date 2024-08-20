import React, { useState } from 'react';

import { Menu,Text, Input } from '@mantine/core';
import { Divider } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconDots,IconTrash } from '@tabler/icons-react';

import { updateTagInfo } from '../../../../DataManagement/Tags/updateTag';
import { MantineDropdown } from '../../../models/ModelDropdown2/mantineDropdown';

import "./tagOptionsDropdown.css";

const tagColors = [
    {color: '#fb7185', name: 'Rose'},
    {color: '#f472b6', name: 'Pink'},
    {color: '#c084fc', name: 'Purple'},
    {color: '#60a5fa', name: 'Blue'},
    {color: '#22b3be', name: 'Cyan'},
    {color: '#2da49f', name: 'Teal'},
    {color: '#4abe60', name: 'Green'},
    {color: '#daac15', name: 'Yellow'},
    {color: '#fb923c', name: 'Orange'},
    {color: '#9ca3af', name: 'Gray'}
];

export const TagOptionsDropdown = (props) => {
    const { tagItems, allTagData,handleAddTag,childDropdownOpened,setChildDropdownOpened
    } = props;

    const [activeChildDropdownIndex, setActiveChildDropdownIndex] = useState(null);

    const handleCloseChildDropdown = () => {
        setChildDropdownOpened(false);
    };

    const handleTagRename = (event,tagItem) => {
        if (event.key === 'Enter') {
            const newTagName = event.target.value;
            updateTagInfo(
                event,
                allTagData,
                tagItem.name,
                newTagName,
                null,
                tagItem
            );
        }
    }

    const handleOpenTagsOptionsMenu = (event, index) => {
        event.stopPropagation();
        event.preventDefault();
        setActiveChildDropdownIndex(index);
        setChildDropdownOpened(true);
    };

    const handleTagColorChange = (tagItem,colorItem) => {
        updateTagInfo(
            null,
            allTagData,
            null,
            null,
            colorItem.color,
            tagItem
        );
    }

    return (
        <div className='model-dropdown-items '>

            {tagItems.map((tagItem, index) => (
                
                <Menu.Item
                    key={index}
                    className='task-card-content-dropdown-item'
                    onClick={() => handleAddTag(tagItem)}
                    rightSection={
                        <MantineDropdown 
                            target={
                                <div className='tag-options-button-div' onClick={(event) => handleOpenTagsOptionsMenu(event, index)}>
                                    <IconDots color='#fafafa' width='17' />
                                </div>
                            }
                            width={240} 
                            dropdown={
                                <div>
                                    <div className='px-1'>
                                        <Menu.Label className='ps-0' w='auto' m='auto'>Tag Name</Menu.Label>
                                        <Input 
                                            placeholder="Name" 
                                            defaultValue={tagItems[index] && tagItems[index].name} 
                                            onKeyDown={(event) => handleTagRename(event,tagItem)}
                                            className='tag-options-input'
                                        />
                                    </div>
                                    <div className='px-1'>
                                        <Menu.Label className='ps-0' w='auto' m='auto'>Colors</Menu.Label>
                                        {tagColors.map((colorItem, index) => (
                                            <Menu.Item w='87%' key={index} onClick={() => handleTagColorChange(tagItem,colorItem)}>
                                                <div className='d-flex gap-3 align-items-center'>
                                                    <div style={{backgroundColor: colorItem.color, width: "20px",height: "20px", borderRadius: "3px" }} />
                                                    <span className='fafafa-color'>{colorItem.name}</span>
                                                </div>
                                                
                                            </Menu.Item>
                                        ))}
                                    </div>
                                    <Divider />
                                    <div className="px-1">
                                        <Menu.Item w='87%' color='#fafafa'>
                                            <div className='d-flex align-items-center gap-3'>
                                                <IconTrash width={20}/>
                                                <span>Delete</span>
                                            </div>
                                        </Menu.Item>
                                    </div>
                                </div>
                                
                            }
                            childDropdownOpened={childDropdownOpened && activeChildDropdownIndex === index}
                            isChild={true} isParent={false} handleCloseChildDropdown={handleCloseChildDropdown} position='top-start'
                        />
                    }
                >
                    <Text w='fit-content' className='user-home-task-details-modal-head-text-dropdown-value' bg={`${tagItem.color}`}>{tagItem.name}</Text>
                </Menu.Item>
            ))}
            </div>
    );
};