import React, { useState,useEffect } from 'react';

import { Input } from '@mantine/core';

import { getAllTagsInfo } from '../../../DataManagement/Tags/getAllTags';
import { addExistingTagInfo } from '../../../DataManagement/Tags/addExistingTag';
import { createTagInfo } from '../../../DataManagement/Tags/createTag';
import { TagOptionsDropdown } from '../TaskDetailsModal/TagOptionsDropdown/tagOptionsDropdown';

import './dropdownContent.css';
    
const TagsDropdownContent = (props) => {
    const {task, taskType,setTaskType,idx,setCurrentTaskTags,currentTaskTags,childDropdownOpened,setChildDropdownOpened } = props;

    const [allTagData, setAllTagData] = useState([]);
    const [tagItems, setTagItems] = useState(allTagData);
    const [tagInputValue, setTagInputValue] = useState('');
    const tagNames = allTagData.map(item => item.name);
    const [nonIncludedTaskTags, setNonIncludedTaskTags] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const allTagsData =  await getAllTagsInfo(setAllTagData);
                // const filteredTags = allTagsData.filter(tag => !currentTaskTags.includes(tag.name));
                const currentTaskTagsSet = new Set(currentTaskTags.map(tag => tag.name));
                const filteredTags = allTagsData.filter(tag => !currentTaskTagsSet.has(tag.name));
                setNonIncludedTaskTags(filteredTags);
                setAllTagData(allTagsData);
            } catch(error) {
                //
            }
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idx, currentTaskTags]);

    const updateTaskTags = (updatedTags) => {
        const updatedTasks = [...taskType];
        updatedTasks[idx].tags = updatedTags;
        setTaskType(updatedTasks);
        setCurrentTaskTags([...updatedTags]);
    };

    const handleTagCreation = async (tagName) => {
        try {
            const newTag = await createTagInfo(task.id, tagName);
    
            if (newTag) {
                const updatedTags = [...currentTaskTags, newTag];
                setCurrentTaskTags(updatedTags);
                updateTaskTags(updatedTags);
            } else {
                console.error('Error creating tag: Tag data is null');
            }
        } catch (error) {
            console.error('Error creating tag:', error);
        }
    };
    
    async function handleTagSearch(event) {
        const tagInput = event.target.value;
        console.log(tagInput);
        if (event.key === 'Enter' && !/^\s*$/.test(tagInput)) {
            if (tagNames.filter(item => item.name === tagInput.trim())) {
                const tagEntered = tagItems.find(item => item.name === tagInput.trim());
                console.log(tagNames);
                console.log(tagEntered);
                console.log(currentTaskTags);
                if (tagEntered !== undefined) {
                    handleAddTag(tagEntered);
                } else {
                    handleTagCreation(tagInput);
                    setTagInputValue('');
                }
                return;
            }
        }
        setTagInputValue(tagInput);
    }

    useEffect(() => {
        const filteredItems = tagInputValue === ""
            ? nonIncludedTaskTags
            : nonIncludedTaskTags.filter((item) =>
                item.name.toLowerCase().startsWith(tagInputValue.toLowerCase().trim())
            );
        
        setTagItems(filteredItems);
    }, [tagInputValue,allTagData,nonIncludedTaskTags]);

    
    async function handleAddTag (item) {
        try {
            const addedTag = await addExistingTagInfo(task.id,item.id);
            if (addedTag) {
                const updatedTags = [...currentTaskTags, addedTag];
                setCurrentTaskTags(updatedTags);
                setTagInputValue('');
            } else {
                console.error('Error creating tag: Tag data is null');
            }
        } catch (error) {
            console.error('Error creating tag:', error);
        }
    }


    return (
        <>
            <div className='model-dropdown-search-wrapper'>
                <div className='d-flex align-items-center' style={{borderBottom: "1px solid #898989"}}>
                    <form className="model-dropdown-search" role='search' onSubmit={(event) => {event.preventDefault(); return false;}}>
                        <Input
                            className="form-control model-dropdown-search-input"
                            type="text"
                            placeholder={`Search or create a new tag`}                                               
                            onChange={handleTagSearch}
                            onKeyDown={handleTagSearch}
                            value={tagInputValue}
                        />
                    </form>
                </div> 
            </div>
            <TagOptionsDropdown 
                tagItems = {tagItems}
                allTagData={allTagData}
                handleAddTag={handleAddTag}
                childDropdownOpened={childDropdownOpened}
                setChildDropdownOpened={setChildDropdownOpened}
            />
        </>
    );
};

export default TagsDropdownContent;