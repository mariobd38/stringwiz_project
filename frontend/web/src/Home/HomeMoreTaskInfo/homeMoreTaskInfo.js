import React, { useState } from 'react';
import { useLocalState } from "../../utils/useLocalStorage";

import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';

import { TextareaAutosize } from '@mui/base/TextareaAutosize';

import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EventIcon from '@mui/icons-material/Event';
import FlagIcon from '@mui/icons-material/Flag';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PaletteIcon from '@mui/icons-material/Palette';

import FormControl from '@mui/material/FormControl';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import Select from '@mui/material/Select';
import Tooltip from '@mui/material/Tooltip';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { updateTaskInfo } from '../../DataManagement/Tasks/updateTask';
import { createTagInfo } from '../../DataManagement/Tags/createTag';
import { removeTagInfo } from '../../DataManagement/Tags/removeTag';
import { deleteTagInfo } from '../..//DataManagement/Tags/deleteTag';
import './homeMoreTaskInfo.css'



const HomeMoreTaskInfo = ((props)  => {
    const { moreTaskModalOpen, setMoreTaskModalOpen, dayjs, jwt, taskData, tagData, setTagData, allTagData, currentIndex, setCurrentIndex, currentTaskName, currentTaskDescription, setCurrentTaskDescription,
        currentTaskStatus, setCurrentTaskStatus, currentTaskPriority, setCurrentTaskPriority, currentTaskIdNumber, currentTaskCreatedOn, currentTaskUpdatedOn, currentTaskDueDate, setCurrentTaskDueDate, 
        handleUpdateTask, handleDeleteTask, setAllTagData, addExistingTagInfo, setUpcomingTasks, setTaskData } = props;
    


    const defaultStatuses = ['Stuck', 'To Do', 'In Progress', 'Completed'];
    const defaultPriorities = ['Critical', 'High', 'Medium', 'Low'];
    let userStatuses = defaultStatuses;
    let userPriorities = defaultPriorities;
    let [otherStatusesArray, setOtherStatusesArray] = useState(userStatuses);
    const [userFullName] = useLocalState('', 'userFullName');
    const [firstName, lastName] = userFullName.split(' ');
    const initials = (firstName[0] + lastName[0]).toUpperCase();


    const handleMoreTaskModalClose = () => {
        setTaskData(taskData);

        setOtherStatusesArray(defaultStatuses);
        setMoreTaskModalOpen(false);
        setTaskDescriptionInputValue(null);
    };

    //name related
    const handleInputTaskNameChange = (event) => {
        if (event.type === 'input') {
            if (event.currentTarget.textContent === '') {
                console.log('empty!');
            }
            handleUpdateTask(event);
        } 
        else if (event.type === 'keydown' && event.key === 'Enter') {
            event.preventDefault();
        }
        
    };
    //description related
    const [isInputFocused, setInputFocused] = useState(false);
    const [taskDescriptionInputValue, setTaskDescriptionInputValue] = useState('');

    const handleFocus = () => {
        setInputFocused(true);
    };

    const handleBlur = () => {
        setInputFocused(false);
    };

    const handleInputTaskDescriptionChange = (event) => {
        setTaskDescriptionInputValue(event.target.value);
        setCurrentTaskDescription(event.target.value);
        handleUpdateTask(event);
    };

    //status related
    const [menuStatusanchorEl, setMenuStatusAnchorEl] = React.useState(null);
    const openMenuStatus = Boolean(menuStatusanchorEl);
    const handleMenuStatusBtnClick = (event) => {
        setMenuStatusAnchorEl(event.currentTarget);
    };
    const handleMenuStatusBtnClose = (otherStatus, event) => {
        if (userStatuses.includes(otherStatus)) {
            otherStatusesArray = userStatuses;
        // setOtherStatusesArray(userStatuses);


            otherStatusesArray.splice(otherStatusesArray.indexOf(otherStatus), 1);
            setOtherStatusesArray(otherStatusesArray);

            setCurrentTaskStatus(otherStatus);
            
            handleUpdateTask(event);

        }

        setMenuStatusAnchorEl(null);
    };

    const handleSetTaskCompleteBtn = (event) => {
        // setOtherStatusesArray(userStatuses);
        otherStatusesArray = userStatuses;

        otherStatusesArray.splice(otherStatusesArray.indexOf('Completed'), 1);
        setOtherStatusesArray(otherStatusesArray);

        setCurrentTaskStatus('Completed');
        
        handleUpdateTask(event);

    }

    //priority related
    const [menuPriorityanchorEl, setMenuPriorityAnchorEl] = React.useState(null);
    const openMenuPriority = Boolean(menuPriorityanchorEl);
    const handleMenuPriorityBtnClick = (event) => {
        
        setMenuPriorityAnchorEl(event.currentTarget);
    };
    const handleMenuPriorityBtnClose = (userPriority, event) => {
        if (userPriorities.includes(userPriority)) {
            setCurrentTaskPriority(userPriority);
            handleUpdateTask(event);
        }
        setMenuPriorityAnchorEl(null);
    };

    //settings related
    const [menuSettingsanchorEl, setMenuSettingsAnchorEl] = React.useState(null);
    const openMenuSettings = Boolean(menuSettingsanchorEl);
    const handleMenuSettingsBtnClick = (event) => {
        setMenuSettingsAnchorEl(event.currentTarget);
    };
    const handleMenuSettingsBtnClose = (event) => {
        setMenuSettingsAnchorEl(null);
    };
    const handleDeleteTaskBtnClick = (event) => {
        setCurrentIndex(currentIndex);
        handleDeleteTask(event);
        setMoreTaskModalOpen(false);
    };

    //due date related
    const handleRemoveDueDateClick = (event) => {
        setCurrentTaskDueDate(null);
        handleUpdateTask(event);
    }
    const [dueDatePopoverAnchorEl2, setDueDatePopoverAnchorEl2] = useState(null);

    const handleDueDatePopoverClick2 = (event, index) => {
        setDueDatePopoverAnchorEl2(event.currentTarget);
        setCurrentIndex(index);
    };

    const [selectedDate2, setSelectedDate2] = useState(null);

    const handleDueDatePopoverClose2 = () => {
        setDueDatePopoverAnchorEl2(null);
        setSelectedDate2(false);
    };

    const openDueDatePopover2 = Boolean(dueDatePopoverAnchorEl2);
    const dueDatePopOverId2 = openDueDatePopover2 ? 'simple-popover' : undefined;

    const handleDateSelection2 = (date) => {
        setSelectedDate2(date);
      };


    const handleDueDateUpdateTask = (event) => {
        updateTaskInfo(
            currentIndex, 
            event,
            taskData,
            selectedDate2,
            dayjs,
            moreTaskModalOpen,
            null,
            handleDueDatePopoverClose2,
            setCurrentTaskDueDate,
            null,
            null,
            jwt )
        setUpcomingTasks(taskData);
    };
    //item type
    const [itemType, setItemType] = React.useState('Task');

    const handleItemTypeChange = (event) => {
        setItemType(event.target.value);
    };
    

    //tag related
    const [currentTag, setCurrentTag] = useState(null);
    const [menuTagsAnchorEl, setMenuTagsAnchorEl] = React.useState(null);
    const openMenuTags = Boolean(menuTagsAnchorEl);
    const handleMenuTagBtnClick = (event, index) => {
        setMenuTagsAnchorEl(event.currentTarget);
        setCurrentTag(tagData[index]);
    };
    const handleMenuTagBtnClose = (event) => {
        setMenuTagsAnchorEl(null);
        setCurrentTag(null);
    };

    const TagMenuCustomToggle = React.forwardRef(({ children, onClick }, ref) => {
        const delayedClick = (e, currentIndex ) => {
            if(tagNameAbsent) setTagNameAbsent(false);
            setTagInputValue('');
            console.log(tagData);
            taskData[currentIndex].tags = tagData;
            e.preventDefault();
            setTimeout(() => {
                onClick(e);
            }, 80); 
        };
    
        return (
            <Tooltip
                title={<span className='create-tag-tooltip-menu-text'>{[`Create Tag`]}</span>}
                arrow
                className='create-tag-tooltip menu-tooltip'
            >
                <LocalOfferIcon
                    ref={ref}
                    className='tag-icon'
                    onClick={(event) => delayedClick(event, currentIndex)}
                >
                    {children}
                </LocalOfferIcon>
            </Tooltip> 
        );
    });
    const [tagInputValue, setTagInputValue] = useState('');
    const [tagNameAbsent, setTagNameAbsent] = useState(false);
    
      const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      
          return (
            <div 
              ref={ref}
              style={style}
              className={className}
              aria-labelledby={labeledBy}

            >
              <Form.Control
                autoFocus
                className="my-2 m-auto menu-tag-form-control"
                placeholder="Search or Create New Tag"
                onChange={(e) => setTagInputValue(e.target.value)}
                onKeyDown={handleTagInputChange}
                value={tagInputValue}
                open={handleTagInputChange}
                />
                <ul className="list-unstyled">
                {React.Children.toArray(children).filter((child) => {
                    const childText = child.props.children.toLowerCase();
                    const inputValue = tagInputValue.toLowerCase();
                    return !inputValue || childText.startsWith(inputValue);
                })}
                </ul>
            </div>
          );
        },
      );
      const handleTagInputChange = (event) => {

        setTagNameAbsent(false);
        console.log("current tag name:" + tagInputValue);
        // handleGetTags();
        if (event.key === 'Enter') {
            if (tagInputValue === '') {
                setTagNameAbsent(true);
            } else {

                setTagNameAbsent(false);
                console.log("my entire tag data right here");
                console.log(allTagData);
                console.log(taskData[currentIndex]);
                for(let i = 0; i < allTagData.length;i++) {
                    if(allTagData[i].name === tagInputValue) {
                        const existingTag = allTagData[i];
                        addExistingTagInfo(jwt, existingTag, tagData, setTagData, taskData[currentIndex]);
                        taskData[currentIndex].tags = existingTag;
                        setTaskData(taskData);
                        return;
                    }
                }
                createTagInfo(jwt, taskData, currentIndex, tagInputValue, taskData[currentIndex], tagData, setTagData, allTagData, setAllTagData);
                setTaskData(taskData);
                // handleCreateTag();
                setTagInputValue('');
            }
        }
    };

    const handleRemoveTag = (index) => {
        // taskData[currentIndex].tags = tagData[index];
        taskData[currentIndex].tags.push(tagData[index]);
        taskData[currentIndex].tags.tasks = [];
        const tagToRemove = tagData[index];
        console.log("removing tag logs");
        console.log(tagData[index]);
        console.log(taskData);
        console.log(taskData[currentIndex]);
        removeTagInfo(jwt, tagToRemove, taskData[currentIndex], tagData, setTagData, allTagData, setAllTagData);
    }

    const handleDeleteTag = () => {
        const tagToDelete = currentTag;
        deleteTagInfo(jwt, tagToDelete, tagData, setTagData, allTagData, setAllTagData);
    }


    return (
        <div>
            <Modal
                moreTaskModalOpen={moreTaskModalOpen}
                show={moreTaskModalOpen}
                onHide={handleMoreTaskModalClose}
                onClose={handleMoreTaskModalClose}
            >
                <div className='modal-parent row '>
                    <Nav className='upper_more_task_nav m-0 b-0 d-flex justify-content-end'>
                            <Modal.Header closeButton>
                            </Modal.Header>
                    </Nav>
                    <Nav className=' more_task_nav row'>
                        

                        <div className='my-3 d-flex  justify-content-md-between row'>
                            
                            <div className='col-12 col-lg-8'>
                                <Button className={`ms-0 ms-md-2 lato-font ${currentTaskStatus === 'Completed' ? 'menu-current-status-isCompleted' : ''}`} id="menu-current-status-btn"
                                    aria-controls={openMenuStatus ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={openMenuStatus ? 'true' : undefined}
                                    onClick={handleMenuStatusBtnClick}>
                                    {currentTaskStatus} 
                                </Button>

                                <Menu
                                    id="basic-menu"
                                    anchorEl={menuStatusanchorEl}
                                    open={openMenuStatus}
                                    onClose={handleMenuStatusBtnClose}
                                    MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    {otherStatusesArray.map((otherStatuses) => (
                                        <MenuItem onClick={(event) => handleMenuStatusBtnClose(otherStatuses, event)} className='menu-change-status-btn'>{otherStatuses}</MenuItem>
                                    ))}
                                </Menu>
                                <Tooltip title={<span className='lato-font'>{[`Mark as complete`]}</span>} arrow className='set-complete-tooltip d-none d-sm-inline menu-tooltip'>
                                    <CheckIcon className={`mx-2 mx-lg-3 set-task-complete-btn ${currentTaskStatus === 'Completed' ? 'set-task-complete-true-btn' : ''}`}  onClick={(event) => handleSetTaskCompleteBtn(event)}></CheckIcon>
                                </Tooltip>
                                

                                <Menu
                                    id="basic-menu"
                                    anchorEl={menuPriorityanchorEl}
                                    open={openMenuPriority}
                                    onClose={handleMenuPriorityBtnClose}
                                    MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    {userPriorities.map((userPriority) => (
                                        <MenuItem onClick={(event) => handleMenuPriorityBtnClose(userPriority, event)} className='menu-change-priority-btn lato-font'>
                                            <span className={`m-0 ${userPriority === 'Critical' ? 'more-task-priority-critical-btn' : ''}
                                                                    ${userPriority === 'High' ? 'more-task-priority-high-btn' : ''}
                                                                    ${userPriority === 'Medium' ? 'more-task-priority-medium-btn' : ''}
                                                                    ${userPriority === 'Low' ? 'more-task-priority-low-btn' : ''}`}>
                                                <FlagIcon className='me-3'></FlagIcon>
                                            </span>
                                            {userPriority} {userPriority === currentTaskPriority && <CheckIcon className='ms-2'></CheckIcon>}
                                        </MenuItem>
                                    ))}
                                </Menu>

                                {currentTaskPriority === null ? 
                                <Tooltip title={<span className='lato-font'>{[`Set priority`]}</span>} arrow className='task-priority-tooltip menu-tooltip'>
                                    <FlagIcon className='more-task-priority-btn mx-2 mx-md-5' variant="contained" onClick={handleMenuPriorityBtnClick} ></FlagIcon>
                                </Tooltip> 
                                :
                                <Tooltip title={<span className='lato-font'>{[`${currentTaskPriority} priority`]}</span>} arrow className='task-priority-tooltip menu-tooltip '>
                                    <span className='more-task-current-priority-btn mx-2 mx-lg-3' onClick={handleMenuPriorityBtnClick}><FlagIcon className={`me-2   ${
                                currentTaskPriority === 'Critical' ? 'more-task-priority-critical-btn' :
                                currentTaskPriority === 'High' ? 'more-task-priority-high-btn' :
                                currentTaskPriority === 'Medium' ? 'more-task-priority-medium-btn' :
                                currentTaskPriority === 'Low' ? 'more-task-priority-low-btn' : ''
                                }`}
                                    variant="contained"></FlagIcon><span className='nunito-sans-font-600'>{currentTaskPriority} priority</span></span>
                                </Tooltip> }
                                
                                <Button className="btn px-0 px-md-1 py-1 py-md-0 more-task-user-button">
                                        <p className='m-auto text-white initials'>{initials}</p>
                                        <Tooltip title={<span className='lato-font'>{[`Remove asignee`]}</span>} arrow className='remove-asignee-tooltip menu-tooltip'>
                                            <CancelIcon className="remove-user-cancel-icon " />
                                        </Tooltip>
                                </Button>

                                <Menu
                                    id="basic-menu"
                                    anchorEl={menuSettingsanchorEl}
                                    open={openMenuSettings}
                                    onClose={handleMenuSettingsBtnClose}
                                    MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                    }}
                                >
                                        <MenuItem onClick={handleDeleteTaskBtnClick} className='menu-delete-task-btn'>
                                            Delete task
                                        </MenuItem>
                                </Menu>
                                <Tooltip title={<span className='lato-font'>{[`Task Settings`]}</span>} arrow className='task-settings-tooltip menu-tooltip'>
                                    <MoreHorizIcon className='task-settings-btn mx-1  ms-md-3 me-md-5' onClick={handleMenuSettingsBtnClick}></MoreHorizIcon>
                                </Tooltip>
                            </div>
                            <div className='mt-3 mt-lg-0 col-12 col-lg-4  d-flex justify-content-start justify-content-lg-end'>
                                <Tooltip title={<span className=' created-date-tooltip-text lato-font'>{[`Created by  ${userFullName} on ${currentTaskCreatedOn}`,<br />,`Last Updated on ${currentTaskUpdatedOn}`]}</span>} arrow className='created-date-tooltip menu-tooltip'>
                                    <div className=' mx-2  mx-md-2'>
                                        <div className='created-text'>Created</div>
                                        <div className='created-date-text'>{currentTaskCreatedOn}</div>
                                    </div>
                                </Tooltip>

                                <div className="divider"></div>
                                <div className='created-date-div me-2 me-md-0 me-lg-5' >
                                    {currentTaskDueDate && currentTaskDueDate!=='Invalid Date' ? 
                                        <div>
                                            <div className='created-text'>Due Date</div>
                                            <div className='created-date-text'>
                                                    <CancelIcon className='remove-due-date-btn' onClick={handleRemoveDueDateClick}></CancelIcon>
                                                {currentTaskDueDate}
                                            </div>
                                        </div>
                                    :
                                    <>
                                        <Tooltip title={<span className='lato-font'>{[`Set due date`]}</span>} arrow className='due-date-create-tooltip menu-tooltip'>
                                            <div><EventIcon className='due-date-create-btn' onClick={(event) => handleDueDatePopoverClick2(event, currentIndex)} ></EventIcon></div>
                                        </Tooltip>

                                        <Popover
                                        id={dueDatePopOverId2}
                                        open={openDueDatePopover2}
                                        anchorEl={dueDatePopoverAnchorEl2}
                                        onClose={handleDueDatePopoverClose2}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                        >
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DateCalendar onChange={handleDateSelection2} />
                                            <div className={`pb-2 d-flex justify-content-around `}> 
                                                <Button className='date-calendar-btn2' onClick={handleDueDatePopoverClose2}>CANCEL</Button>
                                                <Button className='date-calendar-btn2' onClick={handleDueDateUpdateTask} disabled={!selectedDate2} >OK</Button>
                                            </div>
                                            
                                        </LocalizationProvider>
                                        </Popover>
                                    </>
                                    
                                    }
                                </div> 
                            </div>                             
                            
                        </div>
                    </Nav>
                    <div className="container mt-4">
                        <div className="row ">
                            <div className="col-xl-7">
                                <div className='ms-xl-3'>
                                    <div className='update-task-name-content' contentEditable={true}  onInput={handleInputTaskNameChange} onKeyDown={handleInputTaskNameChange} suppressContentEditableWarning={true}
                                    >
                                        <h1 className='update-task-name nunito-sans-font-600'>{currentTaskName}</h1>
                                    </div>
                                    <div className='mt-3 '>

                                        <Dropdown className='d-inline me-2'>
                                            <Dropdown.Toggle as={TagMenuCustomToggle} id="dropdown-custom-components" >
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu as={CustomMenu} className='tag-dropdown-menu tag-search-wrapper' >
                                                {tagNameAbsent && <p className='ms-3 pt-1 error-message'>Oops! Tag Name is required</p>}

                                                    {allTagData && allTagData.map((tagRow, index) => (
                                                        <Dropdown.Item eventKey={`${tagRow.name}`} className='tag-dropdown-item lato-font'>{tagRow.name}</Dropdown.Item>

                                                    ))}                                            

                                            </Dropdown.Menu>
                                        </Dropdown>

                                        

                                        <FormControl className='mx-2'>
                                            <Select className='item-type-form'
                                            // defaultValue={"task"}
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={itemType}
                                                onChange={handleItemTypeChange}
                                            >
                                                <MenuItem value={'Task'} default >Task</MenuItem>
                                                <MenuItem value={'Subtask'} default>Subtask</MenuItem>
                                                <MenuItem value={'Project'}>Project</MenuItem>
                                            </Select>
                                        </FormControl>
                                        {currentTaskIdNumber && <Tooltip title={<span className='copy-task-id-tooltip'>{[`Copy task ID`]}</span>} arrow className='copy-task-id-tooltip mx-3 menu-tooltip'>
                                            <Button className='ms-2 current-task-id-number-btn' onClick={() => {navigator.clipboard.writeText(currentTaskIdNumber)}}>{currentTaskIdNumber}</Button>
                                        </Tooltip>}

                                    </div>

                                    <div className=' '>


                                    <Menu
                                        id="basic-menu"
                                        anchorEl={menuTagsAnchorEl}
                                        open={openMenuTags}
                                        onClose={handleMenuTagBtnClose}
                                        MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                        }}
                                        anchorOrigin={{
                                            vertical: 'bottom'
                                        }}
                                        className='mt-2'
                                    >
                                            <MenuItem onClick={(event) => handleMenuTagBtnClose(event)} className='menu-tag-btn'>
                                            <span className={`nunito-sans-font`}><EditIcon className='me-1 mb-1 tag-menu-icon tag-dropdown-item'></EditIcon>Rename</span>
                                            </MenuItem>
                                            <MenuItem   className='menu-tag-btn'>
                                                <span className={`nunito-sans-font`}><PaletteIcon className='me-1 mb-1 tag-menu-icon tag-dropdown-item'></PaletteIcon>Change color</span>
                                            </MenuItem>
                                            <MenuItem onClick={handleDeleteTag} className='menu-tag-btn'>
                                                <span className={`nunito-sans-font`}><DeleteIcon className='me-1 mb-1 tag-menu-icon tag-dropdown-item'></DeleteIcon>Delete</span>
                                            </MenuItem>
                                            
                                        
                                    </Menu>
                                
                                    {tagData && tagData.map((r, index) => (
                                            <Button className='me-2 mt-3 menu-tag-button' onClick={(event) => handleMenuTagBtnClick(event, index)}><span><LocalOfferIcon className='tag-icon-span me-1'></LocalOfferIcon></span>{r.name}<CloseIcon className='remove-tag-icon ms-1 pb-1 d-none' onClick={() => handleRemoveTag(index)}></CloseIcon></Button>
                                        ))}
                                    </div>
                                    <div className='my-4 pt-2'>
                                        <TextareaAutosize
                                        placeholder={!isInputFocused && !taskDescriptionInputValue && !currentTaskDescription ? 'Add description' : undefined}
                                        
                                        className='more-task-description ps-3'
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        onChange={handleInputTaskDescriptionChange}
                                        value={taskDescriptionInputValue ? taskDescriptionInputValue : currentTaskDescription}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 comment-section ps-3">
                                <div className='bg  d-flex justify-content-start '>
                                    <h4 className='nunito-sans-font-600 mt-2'>Comment Section</h4>

                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
});

export default HomeMoreTaskInfo;