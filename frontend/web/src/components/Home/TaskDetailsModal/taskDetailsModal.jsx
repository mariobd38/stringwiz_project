import React, { useEffect, useState, useRef,createRef } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';
import { useClickAway } from 'react-use';

import dayjs from 'dayjs';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded';
import NotInterestedRoundedIcon from '@mui/icons-material/NotInterestedRounded';
import RadioButtonCheckedRoundedIcon from '@mui/icons-material/RadioButtonCheckedRounded';

import {
    IconDots,IconCheck,IconX,IconFlag3Filled
} from '@tabler/icons-react';

import NewHomeDueDatePopover from '../newHomeDueDatePopover';
import { TagOptionsDropdown } from './TagOptionsDropdown/tagOptionsDropdown';
import { UpdateTaskInfo } from '../../../DataManagement/Tasks/updateTask';
import { removeTagInfo } from '../../../DataManagement/Tags/removeTag';
import { ModelDropdown } from '../../models/ModelDropdown/modelDropdown';
import { ProfileCard } from './ProfileCard/profileCard';
import { TagColorDropdown } from './TagColorDropdown/tagColorDropdown';
import TaskDetailsModalSubheader from './taskDetailsModalSubheader';
import { updateTagInfo } from '../../../DataManagement/Tags/updateTag';
import { deleteTagInfo } from '../../../DataManagement/Tags/deleteTag';
import TaskDeletionModal from './TaskDeletionModal/taskDeletionModal';
import TaskDetailsModalHeader from './TaskDetailsModalHeader/taskDetailsModalHeader';

import { RichTextEditor, Link } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import Placeholder from '@tiptap/extension-placeholder';


import '@mantine/tiptap/styles.css';
import './taskDetailsModal.css';


const TaskDetailsModal = (props) => {
    const { 
            userFullName, userEmail, currentIndex, currentTaskName, currentTaskPriority, currentTaskDueDate, currentTaskStatus, currentTaskCreationDate, currentTaskLastUpdatedOn,
            nonIncludedTaskTags, setCurrentTaskDueDate, setCurrentIndex, setCurrentTaskPriority, setSelectedDate, currentTaskTags, setCurrentTaskTags,setCurrentTaskDescriptionHtml,
            taskType, setTaskType,selectedDate, today, currentTaskDueDateTime, setCurrentTaskDueDateTime,
            onHide, show, allTagData,handleTagCreation,completedTasks,dueDatePopoverIsOpen,setDueDatePopoverIsOpen,setCurrentTaskStatus, currentTaskDescriptionHtml
         } = props;
    
    const content = currentTaskDescriptionHtml;

    // const [userFullName] = useLocalState("", "userFullName");
    const [firstName, lastName] = userFullName.split(' ');
    const initials = (firstName[0] + lastName[0]).toUpperCase();

    const navigate = useNavigate();
    const location = useLocation();

    const currentTaskDateFormatter = (dateString) => {
        if (dateString === null)
            return 'None';
        if (dayjs(dateString).year() === dayjs().year() && currentTaskDueDateTime) {
            return `${dayjs(dateString).format('MMM D, h:mm a')}`;
        } else {
            return `${dayjs(dateString).format('MMM D[,] YYYY')}`;
        }
    }

    const handleTaskDetailsModalClose = () => {
        const modalBackdrop = document.querySelector('.modal-dialog');
        if (modalBackdrop) {
            modalBackdrop.remove();
        }
        setCurrentTaskDescriptionHtml(null);
        onHide();
        navigate(-1);
    }

    useEffect(() => {
        if (location.pathname === '/home/modal' && !show) {

            const timeout = setTimeout(() => {
                // const newUrl = '/home';
                // window.history.replaceState(null, null, newUrl);
                navigate('/home');
            }, 300);
            return () => clearTimeout(timeout);
                // navigate('/home');
        }
    }, [location.pathname, show, navigate]);
    

    //task description
    const handleTaskUpdate = (event) => {
        UpdateTaskInfo(
            currentIndex, 
            event,
            taskType,
            setTaskType,
            selectedDate,
            dayjs,
            setCurrentTaskDueDate,
            setCurrentTaskDueDateTime,
            completedTasks,
        );
    }

    //task due date
    const handleDueDatePopoverClick = (event, index) => {
        setCurrentIndex(index);
        setCurrentTaskDueDate(taskType[index].dueDate);
        // if (taskType[index].dueDate) {
        //     setCurrentTaskDueDateTime(dayjs(taskType[index].dueDate).format('HH:mm'));
        // }
        setCurrentTaskDueDateTime(taskType[index].dueDateTime);
    };

    const handleDueDatePopoverClose = (event) => {
        setSelectedDate(false);
        setCurrentTaskDueDate(taskType[currentIndex].dueDate);
        // if (taskType[currentIndex].dueDate) {
        //     setCurrentTaskDueDateTime(dayjs(taskType[currentIndex].dueDate).format('HH:mm'));
        // }
        setCurrentTaskDueDateTime(taskType[currentIndex].dueDateTime);

    };

    //assignee profile card
    const [openAssigneeProfileCard, setOpenAssigneeProfileCard] = useState(false);
    const hoverTimeoutRef = useRef(null);

    const handleAssigneeProfileCardHover = (isHovering) => {
        clearTimeout(hoverTimeoutRef.current); // Clear any existing timeout
    
        if (isHovering) {
            const hoverTimeout = setTimeout(() => {
                setOpenAssigneeProfileCard(true);
            }, 850); 
            hoverTimeoutRef.current = hoverTimeout;
        } else {
            setOpenAssigneeProfileCard(false);
        }
    };

    const assigneeContent = (
        <div className='d-flex align-items-center user-home-task-details-modal-assignee-div'>
            <div className='me-2 user-home-task-details-modal-assignee-initials-circle'>
                <CircleRoundedIcon className="assignee-circle-icon-hider" />
                    <IconX className="assignee-circle-icon-remove"/>
                {initials}

            </div>
            <span className='lato-font'>
                {userFullName}
            </span>
        </div>
    );

    const handleTagRemoval = (currentTagIndex) => {
        removeTagInfo(currentTaskTags[currentTagIndex].id,taskType[currentIndex].id,currentTaskTags, setCurrentTaskTags);
    }


    //tag dropdown logic
    const [tagDropdownStates, setTagDropdownStates] = useState(() => {
        const initialState = {};
        currentTaskTags.forEach((_, index) => {
            initialState[index] = false;
        });
        return initialState;
    });
    
    const handleTagOptionsDropdownMouseLeave = (event, index) => {
        setTagDropdownStates((prevState) => {
            if(prevState[index]) {
                return { ...prevState };
            }
            let anyOtherDropdownOpen = false;
            Object.keys(prevState).forEach((key) => {
                if (prevState[key] && key !== index) {
                    anyOtherDropdownOpen = true;
                }
            });

            if (!anyOtherDropdownOpen) {
                const newState = { ...prevState };
                Object.keys(newState).forEach((key) => {
                    newState[key] = key === index;
                });
                return newState;
            }
            return { ...prevState };
        });
    };

    const tagButtonTextRefs = useRef([]);
    tagButtonTextRefs.current = Array(currentTaskTags.length)
            .fill()
            .map((_, index) => tagButtonTextRefs.current[index] || createRef());
    const tagButtonOptionRefs = useRef([]);
    tagButtonOptionRefs.current = Array(currentTaskTags.length)
            .fill()
            .map((_, index) => tagButtonOptionRefs.current[index] || createRef());
    
    const tagButtonRefs = useRef([]);
    tagButtonRefs.current = Array(currentTaskTags.length)
            .fill()
            .map((_, index) => tagButtonRefs.current[index] || createRef());
        

    const[trueIndex, setTrueIndex] = useState(-1);
    useEffect(() => {
        const newTrueIndex = Object.keys(tagDropdownStates).find(key => tagDropdownStates[key]);
        setTrueIndex(newTrueIndex !== undefined ? newTrueIndex : -1);
    }, [tagDropdownStates, trueIndex]);

    const [tagNameRenameButtonClicked, setTagNameRenameButtonClicked] = useState(false);

    useClickAway(trueIndex !== -1 && tagButtonRefs.current[trueIndex],() => {
        setTagDropdownStates((prevState) => {
            const newState = { ...prevState };
            newState[trueIndex] = false;
            return newState;
        });
    });

    //tag rename logic
    const [tagNameRenameButtonClickedIndex, setTagNameRenameButtonClickedIndex] = useState(-1);

    const onTagNameRenameButtonClick = (index) => {
        setTagNameRenameButtonClickedIndex(index);
    };

    useClickAway(tagNameRenameButtonClickedIndex !== -1 && tagButtonTextRefs.current[tagNameRenameButtonClickedIndex], () => {
        setTagNameRenameButtonClicked(false);
    })

    // const [updatedTagName, setUpdatedTagName] = useState(null);
    const handleTagRename = (event,oldTagName) => {
        if (event.key === 'Enter') {
            const newTagName = event.target.value;
            
            updateTagInfo(
                event,
                allTagData,
                currentTaskTags,
                tagNameRenameButtonClickedIndex,
                oldTagName,
                newTagName,
                null,
                allTagData.find(tag => tag.name === oldTagName),
            );
            setTagNameRenameButtonClicked(false);
        }
    }

    //tag color logic
    const tagColorChangeDropdownRef = useRef(null);
    const [tagColorButtonSelected, setTagColorButtonSelected] = useState(false);
    const [tagColorChangeButtonClicked, setTagColorChangeButtonClicked] = useState(false);
    const [tagColorChangeButtonClickedIndex, setTagColorChangeButtonClickedIndex] = useState(-1);
    const [tagColorDropdownOpen, setTagColorDropdownOpen] = useState(false);

    const onTagColorChangeButtonClick = (index) => {
        setTagColorChangeButtonClickedIndex(index);
        setTimeout(() => {
            setTagColorDropdownOpen(true);
        },350);
    };

    const onTagColorButtonSelected = () => {
        setTagColorButtonSelected(true);
    };
    
    useClickAway(tagColorButtonSelected && tagColorChangeButtonClickedIndex !== -1 && tagButtonTextRefs.current[tagColorChangeButtonClickedIndex], () => {
        if (!tagColorButtonSelected) {
            setTagColorChangeButtonClicked(false);
            setTagColorDropdownOpen(false);
        }
    });
    
    useClickAway(tagColorChangeDropdownRef,() => {
        setTagColorChangeButtonClicked(false);
        setTagColorDropdownOpen(false);
    })

    //tag delete logic
    const [tagDeleteButtonClicked, setTagDeleteButtonClicked] = useState(false);
    const [tagDeleteButtonClickedIndex, setTagDeleteButtonClickedIndex] = useState(false);


    const onTagDeleteButtonClicked = (index) => {
        setTagDeleteButtonClickedIndex(index);
    };
    const onTagDeleteDropdownHide = () => {
        setTagDeleteButtonClicked(false);
    };

    const handleConfirmDeleteTagButtonClick = () => {
        deleteTagInfo(currentTaskTags,setCurrentTaskTags,tagDeleteButtonClickedIndex);
        setTagDeleteButtonClicked(false);
    }
    
    const taskTypeRef = useRef(taskType);
    const currentIndexRef = useRef(currentIndex);
    useEffect(() => {
        taskTypeRef.current = taskType;
        currentIndexRef.current = currentIndex;
      }, [taskType,currentIndex]);

    const editor = useEditor({
        extensions: [
          StarterKit,
          Underline,
          Link,
          Superscript,
          SubScript,
          Highlight.configure({ multicolor: true }),
          TextAlign.configure({ types: ['heading', 'paragraph'] }),
          Placeholder.configure(
            { placeholder: "Write your task description"  }),
        ],
        content,
        onUpdate(props) {
            const description = props.editor.getHTML();
            UpdateTaskInfo(
                currentIndexRef.current, 
                "description",
                taskTypeRef.current,
                setTaskType,
                selectedDate,
                dayjs,
                setCurrentTaskDueDate,
                setCurrentTaskDueDateTime,
                completedTasks,
                description
            );
            
        }
      });

      useEffect(() => {
        editor?.commands.setContent(content || "", false, {
            preserveWhitespace: true,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [content]);


    return (
        <>
            <Modal
                enforceFocus={false}
                show={show}
                onHide={handleTaskDetailsModalClose}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='resizable-modal-container d-flex align-items-center'
            >
                <TaskDetailsModalHeader 
                    userFullName={userFullName}
                    currentTaskDateFormatter={currentTaskDateFormatter}
                    currentTaskCreationDate={currentTaskCreationDate}
                    currentTaskLastUpdatedOn={currentTaskLastUpdatedOn}
                    handleTaskDetailsModalClose={handleTaskDetailsModalClose}
                />
                
                <Modal.Body className='user-home-task-details-modal-body'>
                    <div className='d-flex justify-content-between pb-4' style={{height: "auto"}}>
                        <div style={{width: "100%"}}>
                            <h2 className='py-3 nunito-sans-600-font user-home-task-details-modal-name' suppressContentEditableWarning={true} contentEditable={true} style={{fontSize: "2.5rem", width: "80%"}} onInput={handleTaskUpdate}>
                                {currentTaskName}
                            </h2>

                                <div className='d-flex gap-3 my-3'>
                                    <TaskDetailsModalSubheader 
                                        taskType={taskType}
                                        currentIndex={currentIndex}
                                        handleTaskUpdate={(event) => handleTaskUpdate(event)}
                                        allTagData={allTagData}
                                        nonIncludedTaskTags={nonIncludedTaskTags}
                                        handleTagCreation={handleTagCreation}
                                        currentTaskPriority={currentTaskPriority}
                                        setCurrentTaskPriority={setCurrentTaskPriority}
                                        currentTaskTags={currentTaskTags}
                                        setCurrentTaskTags={setCurrentTaskTags}
                                    />
                                </div>

                            <div className='d-flex flex-wrap column-gap-5 row-gap-2 lato-font'>
                                <div className='example d-flex flex-column' style={{ fontSize: "1.06rem"}} >
                                    <span className='user-home-task-details-modal-head-text'>Assignee</span>
                                    <div
                                        onMouseEnter={() => handleAssigneeProfileCardHover(true)}
                                        onMouseLeave={() => handleAssigneeProfileCardHover(false)}
                                    >
                                        <ProfileCard
                                            showProfileCard={openAssigneeProfileCard}
                                            assigneeContent={assigneeContent}
                                            initials={initials}
                                            userFullName={userFullName}
                                            userEmail={userEmail}
                                        />
                                    </div>
                                </div>
                                <div className='d-flex flex-column' style={{ fontSize: "1.06rem"}}>
                                        <span className='user-home-task-details-modal-head-text ps-2 me-3'>Due Date</span>
                                        <NewHomeDueDatePopover 
                                        popoverTarget={
                                            <div className='d-flex align-items-center user-home-task-details-modal-due-date-div' onClick={(event) => handleDueDatePopoverClick(event, currentIndex)}>
                                                <span className='lato-font user-home-task-details-modal-due-date-actual'>
                                                    {currentTaskDateFormatter(currentTaskDueDate)}
                                                </span>
                                                {currentTaskDateFormatter(currentTaskDueDate) !== 'None' &&
                                                <span className='user-home-task-details-modal-due-date-remove d-flex justify-content-center ms-4 me-3' onClick={(event) => { event.stopPropagation(); handleTaskUpdate(event); }}>
                                                    <CloseRoundedIcon className='user-home-task-details-modal-due-date-remove-icon'/>
                                                </span>}
                                        </div>
                                        } 
                                        currentIndex={currentIndex} taskType={taskType} setTaskType={setTaskType}
                                        currentTaskDueDate={currentTaskDueDate} setCurrentTaskDueDate={setCurrentTaskDueDate} 
                                        currentTaskDueDateTime={currentTaskDueDateTime} setCurrentTaskDueDateTime={setCurrentTaskDueDateTime}
                                        dueDatePopoverIsOpen={dueDatePopoverIsOpen} setDueDatePopoverIsOpen={setDueDatePopoverIsOpen}
                                        handleDueDatePopoverClose={handleDueDatePopoverClose} today={today} 
                                    />
                                        
                                </div>

                                <div className='me-3 d-flex flex-column' style={{ fontSize: "1.06rem" }}>
                                    <div className=' user-home-task-details-modal-head-text' style={{width: "7rem"}}>Status</div>
                                    <div>
                                        <span className='lato-font d-flex align-items-center' style={{marginLeft: "0.45rem"}}>

                                            <ModelDropdown 
                                                items={[
                                                    { name: "To Do", icon: <RadioButtonCheckedRoundedIcon />, isActualOption: true },
                                                    { name: "In Progress", icon: <RadioButtonCheckedRoundedIcon />, isActualOption: true },
                                                    { name: "Completed", icon: <IconCheck />, isActualOption: true },
                                                ]}
                                                initialNameValue={currentTaskStatus} initialIconValue={currentTaskStatus==='Completed' ? <IconCheck /> : <RadioButtonCheckedRoundedIcon />}
                                                handleTaskUpdate={(event) => handleTaskUpdate(event)}
                                                hasSearchBar={true} isStatusBtn={true} currentTaskStatus={currentTaskStatus}
                                                taskType={taskType} currentIndex={currentIndex} setCurrentTaskStatus={setCurrentTaskStatus}
                                            />
                                        </span>
                                    </div>
                                </div>

                                {currentTaskPriority &&
                                <div className='d-flex flex-column' style={{ fontSize: "1.06rem" }}>
                                    <div className='me-3 user-home-task-details-modal-head-text d-flex align-items-center'>Priority</div>
                                    <div>
                                        <span className='lato-font d-flex align-items-center' style={{marginLeft: "0.45rem"}}>
                                            
                                            <ModelDropdown 
                                                items={[
                                                    { name: "Critical", icon: <IconFlag3Filled />, isActualOption: true },
                                                    { name: "High", icon: <IconFlag3Filled />, isActualOption: true },
                                                    { name: "Medium", icon: <IconFlag3Filled />, isActualOption: true },
                                                    { name: "Low", icon: <IconFlag3Filled />, isActualOption: true },
                                                    { name: "Clear", icon: <NotInterestedRoundedIcon />, isActualOption: false },
                                                ]}
                                                initialNameValue={currentTaskPriority} initialIconValue={<IconFlag3Filled />}
                                                handleTaskUpdate={(event) => handleTaskUpdate(event)}
                                                hasClearBtn={true} 
                                                isPriorityDropdown={true} setCurrentTaskPriority={setCurrentTaskPriority}
                                                taskType={taskType} currentIndex={currentIndex}
                                            />
                                        </span>
                                    </div>
                                </div>}

                                {currentTaskTags !== null && currentTaskTags !== undefined && currentTaskTags.length > 0 &&
                                <div className='d-flex flex-column' style={{ fontSize: "1.06rem" }}>
                                    <div className='me-3 user-home-task-details-modal-head-text d-flex align-items-center' style={{width: "5rem"}}>
                                        Tags
                                    </div>

                                    <div>
                                        <span className='lato-font d-flex align-items-center user-home-task-details-modal-tags-group' >
                                        
                                            {currentTaskTags.map((tag, index) => (
                                                <Button key={index} style={{backgroundColor: tag.color ? tag.color : '#0d6efd', border: "none"}} className={`mx-1 user-home-task-details-modal-tags-button ${tagNameRenameButtonClicked && index === tagNameRenameButtonClickedIndex? 'focused' : 'unfocused'}`}
                                                    ref={tagButtonRefs.current[index]}
                                                    
                                                    onMouseLeave={() => handleTagOptionsDropdownMouseLeave(index)}
                                                >
                                                    <span className='d-flex'>
                                                        {tagNameRenameButtonClicked && index === tagNameRenameButtonClickedIndex ?  
                                                            <input autoFocus='true' defaultValue={`${tag.name}`} className={`align-middle user-home-task-details-modal-tags-button-text-input`} 
                                                            ref={tagButtonTextRefs.current[index]} onKeyDown={(event) => handleTagRename(event,tag.name)}>
                                                            </input> :
                                                            <span className={`align-middle user-home-task-details-modal-tags-button-text ${tagNameRenameButtonClicked ? 'focused' : 'unfocused'}`} 
                                                            ref={tagButtonTextRefs.current[index]} contentEditable="false" suppressContentEditableWarning={true}>
                                                                {tag?.name ? tag.name : ''}
                                                            </span>
                                                            }
                                                    </span>
                                                    <span>
                                                        <TagOptionsDropdown
                                                            items={[
                                                                { name: "Rename", icon: <DriveFileRenameOutlineRoundedIcon/> },
                                                                { name: "Change color", icon: <ColorLensRoundedIcon/> },
                                                                { name: "Delete", icon: <DeleteOutlineOutlinedIcon /> },
                                                            ]}
                                                            initialIconValue={<IconDots />}
                                                            isDropdownOnRightSide={false}
                                                            tagDropdownStates={tagDropdownStates}
                                                            setTagDropdownStates={setTagDropdownStates}
                                                            index={index}
                                                            tagButtonRef={tagButtonRefs.current[index]}
                                                            tagButtonTextRef={tagButtonTextRefs.current[index]}
                                                            tagButtonOptionRef={tagButtonOptionRefs.current[index]}
                                                            tagNameRenameButtonClicked={tagNameRenameButtonClicked}
                                                            setTagNameRenameButtonClicked={setTagNameRenameButtonClicked}
                                                            onTagNameRenameButtonClick={() => onTagNameRenameButtonClick(index)}
                                                            setTagColorChangeButtonClicked={setTagColorChangeButtonClicked}
                                                            onTagColorChangeButtonClick={() => onTagColorChangeButtonClick(index)}
                                                            setTagDeleteButtonClicked={setTagDeleteButtonClicked}
                                                            onTagDeleteButtonClicked={() => onTagDeleteButtonClicked(index)}
                                                        />
                                                    </span>

                                                    {tagColorChangeButtonClicked && index === tagColorChangeButtonClickedIndex &&
                                                    <span>
                                                        <TagColorDropdown 
                                                            allTagData={allTagData}
                                                            currentTaskTags={currentTaskTags}
                                                            tagColorChangeDropdownRef={tagColorChangeDropdownRef}
                                                            isDropdownOnRightSide={false}
                                                            tagColorDropdownOpen={tagColorDropdownOpen}
                                                            setTagColorButtonSelected={setTagColorButtonSelected}
                                                            onTagColorButtonSelected={() => onTagColorButtonSelected()}
                                                            tagIndex={index}
                                                        />
                                                    </span>}
                                                    <span className={`align-middle user-home-task-details-modal-tags-button-close ${tagNameRenameButtonClicked ? 'focused' : 'unfocused'}`} 
                                                    onClick={() => handleTagRemoval(index)}>
                                                        <CloseRoundedIcon style={{width: "1.2rem"}}/>
                                                    </span>
                                                </Button>
                                            ))}
                                        </span>
                                    </div>
                                </div>
                                }
                            </div>
                        
                        </div>
                    </div> 

                    <div className='mt-3'>
                        {/* <div className="user-home-task-details-modal-description m-0 p-0">
                            <TextareaAutosize
                                placeholder='Write a description for your task'
                                className='form-control user-home-task-details-modal-description-textarea'
                                onChange={handleTaskUpdate}
                                defaultValue={`${currentTaskDescription !== null ? currentTaskDescription : ''}`}
                            />
                        </div> */}
                        <div className="rich-text-editor-wrapper">
                            <RichTextEditor editor={editor} 
                            style={{borderRadius: "8px"}} className='user-home-task-details-rte'>
                                <RichTextEditor.Toolbar sticky stickyOffset={60} className='user-home-task-details-modal-rte-toolbar' >
                                    <RichTextEditor.ControlsGroup className='user-home-task-details-modal-rte-controls-group'>
                                        {/* <RichTextEditor.Bold /> */}
                                        {/* <RichTextEditor.Italic />
                                        <RichTextEditor.Underline /> */}
                                        <RichTextEditor.Strikethrough />
                                        <RichTextEditor.ClearFormatting />
                                        <RichTextEditor.Highlight />
                                        <RichTextEditor.Code />
                                    </RichTextEditor.ControlsGroup>

                                    <RichTextEditor.ControlsGroup className='user-home-task-details-modal-rte-controls-group'>
                                    <RichTextEditor.H1 />
                                    <RichTextEditor.H2 />
                                    <RichTextEditor.H3 />
                                    <RichTextEditor.H4 />
                                    </RichTextEditor.ControlsGroup>

                                    <RichTextEditor.ControlsGroup className='user-home-task-details-modal-rte-controls-group'>
                                    <RichTextEditor.Blockquote />
                                    {/* <RichTextEditor.Hr /> */}
                                    {/* <RichTextEditor.OrderedList /> */}
                                    <RichTextEditor.Subscript />
                                    <RichTextEditor.Superscript />
                                    </RichTextEditor.ControlsGroup>

                                    <RichTextEditor.ControlsGroup className='user-home-task-details-modal-rte-controls-group'>
                                    <RichTextEditor.Link />
                                    <RichTextEditor.Unlink />
                                    </RichTextEditor.ControlsGroup>

                                    <RichTextEditor.ControlsGroup className='user-home-task-details-modal-rte-controls-group'>
                                    <RichTextEditor.AlignLeft />
                                    <RichTextEditor.AlignCenter />
                                    <RichTextEditor.AlignJustify />
                                    <RichTextEditor.AlignRight />
                                    </RichTextEditor.ControlsGroup>

                                    <RichTextEditor.ControlsGroup className='user-home-task-details-modal-rte-controls-group'>
                                    <RichTextEditor.Undo />
                                    <RichTextEditor.Redo />
                                    </RichTextEditor.ControlsGroup>
                                </RichTextEditor.Toolbar>

                                <RichTextEditor.Content bg='#222325' content={content}
                                className='user-home-task-details-modal-rte-content'
                                />
                            </RichTextEditor>
                        </div>
                    </div>   

                    <TaskDeletionModal 
                        show={tagDeleteButtonClicked}
                        handleClose={onTagDeleteDropdownHide}
                        handleConfirmDeleteTagButtonClick={handleConfirmDeleteTagButtonClick}
                    />
                                        
                </Modal.Body>
                
            </Modal>
        </>
    );
};

export default TaskDetailsModal;