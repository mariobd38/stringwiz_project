import React, { useState, useEffect } from 'react';
import { useLocalState } from "../../../utils/useLocalStorage";

import dayjs from 'dayjs';

import Card from 'react-bootstrap/Card';

import { ClickAwayListener } from '@mui/base/ClickAwayListener';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import LockIcon from '@mui/icons-material/Lock';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

import {createTaskInfo} from './../../../DataManagement/Tasks/createTask';
import {UpdateTaskInfo} from './../../../DataManagement/Tasks/updateTask';
import { getTagInfo } from '../../../DataManagement/Tags/getTags';
import { getAllTagsInfo } from '../../../DataManagement/Tags/getAllTags';
import { createTagInfo } from '../../../DataManagement/Tags/createTag';

import TaskDetailsModal from '../TaskDetailsModal/taskDetailsModal';
import TaskCardContent from './TaskCardContent/taskCardContent';

import checklist from '../../../assets/illustrations/home/checklist.png';

import './taskCard.css'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
        <div
            role="tabpanel"
            className='user-home-card-tabpanel'
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
  
function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const TaskCard = ({taskData, setTaskData, today, upcomingTasks, overdueTasks,
    completedTasks,
    allTagData, setAllTagData}) => {
    const [currentIndex, setCurrentIndex] = useState(null);
    const [newTaskRowOpen, setNewTaskRowOpen] = useState(false);
    const [userTasks, setUserTasks] = useLocalState([], "userTasks");

    const [currentTabValue, setCurrentTabValue] = React.useState(0);

    const handleTabChange = (event, newValue) => {
        setCurrentTabValue(newValue);
    };

    const handleTabChangeIndex = (index) => {
        setCurrentTabValue(index);
    };

    const handleNewTaskClick = () => {
        setNewTaskRowOpen((prev) => !prev);
    };

    const handleNewTaskClickAway = () => {
        setNewTaskRowOpen(false);
    };

    const handleTaskCreate = (event) => {
        if (event.key === 'Enter' && event.target.value.trim() !== '') {
            createTaskInfo(
                dayjs,
                event.target.value,
                null,
                null,
                null,
                null,
                null,
                setTaskData,
                setUserTasks,
                taskData,
                userTasks );
            setNewTaskRowOpen(false);
        }
    };

    //task attributes
    const [currentTaskName, setCurrentTaskName] = useState('');
    const [currentTaskCreationDate, setCurrentTaskCreationDate] = useState('');
    const [currentTaskLastUpdatedOn, setCurrentTaskLastUpdatedOn] = useState('');
    const [currentTaskDescription, setCurrentTaskDescription] = useState('');
    const [currentTaskDescriptionHtml, setCurrentTaskDescriptionHtml] = useState('');
    // const [currentTaskIdNumber, setCurrentTaskIdNumber] = useState('');
    const [currentTaskStatus, setCurrentTaskStatus] = useState('');
    const [currentTaskPriority, setCurrentTaskPriority] = useState('');
    const [currentTaskTags, setCurrentTaskTags] = useState([]);

    //due date popovers
    const [dueDatePopoverIsOpen, setDueDatePopoverIsOpen] = useState(false);
    const [currentTaskDueDate, setCurrentTaskDueDate] = useState(null);
    const [currentTaskDueDateTime, setCurrentTaskDueDateTime] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);

    const [taskType, setTaskType] = useState(null);
    //task details modal
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        if (!modalShow) {
            if(currentTabValue === 0) {
                setTaskType(upcomingTasks);
            } else if (currentTabValue === 1) {
                setTaskType(overdueTasks);
            } else {
                setTaskType(completedTasks);
            }
        }
    }, [currentTabValue, overdueTasks, upcomingTasks,completedTasks, modalShow, taskType])

    //update task call
    const handleTaskUpdate = (event) => {
        if (selectedDate === null && currentTaskDueDate !== null) {
            setSelectedDate(currentTaskDueDate);
        }
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

    };

    // TODO
    const handleTaskComplete = (event,index) => {
        UpdateTaskInfo(
            index,
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
    
    
    //tag related info
    const [nonIncludedTaskTags, setNonIncludedTaskTags] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            
            try {
                const allTagsData =  await getAllTagsInfo(setAllTagData);
                // const filteredTags = allTagsData.filter(tag => !currentTaskTags.includes(tag.name));
                const currentTaskTagsSet = new Set(currentTaskTags.map(tag => tag.name));
                const filteredTags = allTagsData.filter(tag => !currentTaskTagsSet.has(tag.name));
                setNonIncludedTaskTags(filteredTags);
                // console.log(filteredTags);
                setAllTagData(allTagsData);
            } catch(error) {
                //
            }
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex, currentTaskTags]);

    const updateTaskTags = (updatedTags) => {
        const updatedTasks = [...taskType];
        updatedTasks[currentIndex].tags = updatedTags;
        setTaskType(updatedTasks);
        setCurrentTaskTags([...updatedTags]);
    };

    const handleTagCreation = async (tagName) => {
        try {
            const newTag = await createTagInfo(taskType[currentIndex].id, tagName);
    
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

    const theme = useTheme();

    return (
        <>
            <Card
                className='task-card-card'
            >
                <Card.Header 
                    style={{
                        backgroundColor: '#1e1f21',
                        border: "none"
                    }} 
                    className='d-flex align-items-center py-3 d-flex justify-content-between px-4 user-home-card-header' >
                    <div className='d-flex align-items-center' style={{ color: '#fafafa' }}>
                        <span className='d-flex align-items-center'>
                            My Tasks
                            <LockIcon className='ms-2' style={{ width: "1.1rem" }}/>
                        </span>
                    </div>
                    <div className='me-2' style={{ color: "#fafafa" }}>
                        <MoreHorizRoundedIcon />
                    </div>
                </Card.Header>
                
                <Card.Body className='user-home-card-body'>
                    <Box sx={{ width: "100%" }} >
                        <AppBar className='user-home-card-task-tabs-appbar' position="static" sx={{backgroundColor: "#1e1f21", boxShadow: "none"}}>
                            <Tabs
                                value={currentTabValue}
                                onChange={handleTabChange}
                                indicatorColor="secondary"
                                textColor="inherit"
                                variant="fullWidth"
                                className='user-home-card-task-tabs'
                                aria-label="full width tabs example"
                            >
                            <Tab label={<>
                            <span>Ongoing {upcomingTasks.length > 0 &&
                                <span>({upcomingTasks.length})</span>}</span></>} className='user-home-card-task-tab' {...a11yProps(0)} />
                            <Tab label={<>
                            <span>Overdue {overdueTasks.length > 0 &&
                                <span>({overdueTasks.length})</span>}</span></>} className='user-home-card-task-tab' {...a11yProps(1)} />
                            <Tab label={<>
                            <span>Completed {completedTasks.length > 0 &&
                                <span>({completedTasks.length})</span>}</span></>} className='user-home-card-task-tab' {...a11yProps(2)} />
                            </Tabs>
                        </AppBar>
                        <SwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={currentTabValue}
                            onChangeIndex={handleTabChangeIndex}
                        >
                            <TabPanel value={currentTabValue} index={0} dir={theme.direction}>
                            <div className='table-container-wrapper'>
                                <TableContainer className='table-container p-0' >
                                    <Table>
                                        <TableBody >
                                            <ClickAwayListener onClickAway={handleNewTaskClickAway}>
                                                <Box sx={{ position: 'relative' }}>
                                                    <button className='user-home-create-task-button-dark d-flex align-items-center ms-2 mb-2'
                                                        style={{ color: "#919191" }} onClick={handleNewTaskClick}
                                                    >
                                                        <AddRoundedIcon className='me-1' style={{ width: "1rem", marginBottom: ".09rem" }}/>
                                                        <span className='me-1' style={{ fontSize: '0.95rem' }}>Create task</span>
                                                    </button>
                                                    {newTaskRowOpen ? (
                                                        <TableRow className='table-row-new-dark '>
                                                            <TableCell scope="row" className=' d-flex align-items-center justify-content-between table-cell'>
                                                                <div className='d-flex align-items-center mb-1 m-0' style={{color: "#fafafa"}}>
                                                                    <div>
                                                                        <CheckCircleOutlineRoundedIcon className='user-home-task-check-icon' />
                                                                    </div>
                                                                    <div>
                                                                        <input onKeyDown={handleTaskCreate} placeholder='Task name' autoFocus="autofocus" className={`ps-2 taskName-text user-home-new-task-input fafafa-color`} contentEditable={true} /> 
                                                                    </div>
                                                                </div>
                                                            </TableCell>
                                                        </TableRow>
                                                    ) : null}
                                            
                                                </Box>
                                            </ ClickAwayListener>

                                            <TaskCardContent 
                                                today={today}
                                                taskData={taskType}
                                                taskType={upcomingTasks}
                                                currentTaskDueDate={currentTaskDueDate}
                                                currentTaskDueDateTime={currentTaskDueDateTime}
                                                currentIndex={currentIndex}
                                                setCurrentIndex={setCurrentIndex}
                                                setCurrentTaskDueDate={setCurrentTaskDueDate}
                                                setCurrentTaskDueDateTime={setCurrentTaskDueDateTime}
                                                getTagInfo={getTagInfo}
                                                setCurrentTaskTags={setCurrentTaskTags}
                                                setModalShow={setModalShow}
                                                setCurrentTaskName={setCurrentTaskName}
                                                setCurrentTaskCreationDate={setCurrentTaskCreationDate}
                                                setCurrentTaskDescription={setCurrentTaskDescription}
                                                setCurrentTaskDescriptionHtml={setCurrentTaskDescriptionHtml}
                                                setCurrentTaskLastUpdatedOn={setCurrentTaskLastUpdatedOn}
                                                setCurrentTaskStatus={setCurrentTaskStatus}
                                                setCurrentTaskPriority={setCurrentTaskPriority}
                                                handleTaskComplete={(event,index) => handleTaskComplete(event,index)}
                                                dueDatePopoverIsOpen={dueDatePopoverIsOpen}
                                                setDueDatePopoverIsOpen={setDueDatePopoverIsOpen}
                                                setTaskType={setTaskType}
                                                isTaskTabCompleted={false}
                                            />
                                        </TableBody> 
                                    </Table>
                                </TableContainer>
                            </div>
                        </TabPanel>

                        <TabPanel value={currentTabValue} index={1} dir={theme.direction}>
                            <div className='table-container-wrapper'>
                                

                                <TableContainer className='table-container p-0' >
                                    <Table>
                                        <TableBody >
                                            <TaskCardContent 
                                                today={today}
                                                taskData={taskType}
                                                taskType={overdueTasks}
                                                currentTaskDueDate={currentTaskDueDate}
                                                currentTaskDueDateTime={currentTaskDueDateTime}
                                                currentIndex={currentIndex}
                                                setCurrentIndex={setCurrentIndex}
                                                setCurrentTaskDueDate={setCurrentTaskDueDate}
                                                setCurrentTaskDueDateTime={setCurrentTaskDueDateTime}
                                                getTagInfo={getTagInfo}
                                                setCurrentTaskTags={setCurrentTaskTags}
                                                setModalShow={setModalShow}
                                                setCurrentTaskName={setCurrentTaskName}
                                                setCurrentTaskCreationDate={setCurrentTaskCreationDate}
                                                setCurrentTaskDescription={setCurrentTaskDescription}
                                                setCurrentTaskDescriptionHtml={setCurrentTaskDescriptionHtml}
                                                setCurrentTaskLastUpdatedOn={setCurrentTaskLastUpdatedOn}
                                                setCurrentTaskStatus={setCurrentTaskStatus}
                                                setCurrentTaskPriority={setCurrentTaskPriority}
                                                handleTaskComplete={(event,index) => handleTaskComplete(event,index)}
                                                dueDatePopoverIsOpen={dueDatePopoverIsOpen}
                                                setDueDatePopoverIsOpen={setDueDatePopoverIsOpen}
                                                setTaskType={setTaskType}
                                                isTaskTabCompleted={false}
                                            />
                                        </TableBody> 
                                    </Table>
                                </TableContainer>
                            </div>
                        </TabPanel>

                        <TabPanel value={currentTabValue} index={2} dir={theme.direction}>
                        <div className='table-container-wrapper'>
                                {completedTasks.length > 0 ? 

                                <TableContainer className='table-container p-0' >
                                    <Table>
                                        <TableBody >
                                            <TaskCardContent 
                                                today={today}
                                                taskData={taskType}
                                                taskType={completedTasks}
                                                currentTaskDueDate={currentTaskDueDate}
                                                currentTaskDueDateTime={currentTaskDueDateTime}
                                                currentIndex={currentIndex}
                                                setCurrentIndex={setCurrentIndex}
                                                setCurrentTaskDueDate={setCurrentTaskDueDate}
                                                setCurrentTaskDueDateTime={setCurrentTaskDueDateTime}
                                                getTagInfo={getTagInfo}
                                                setCurrentTaskTags={setCurrentTaskTags}
                                                setModalShow={setModalShow}
                                                setCurrentTaskName={setCurrentTaskName}
                                                setCurrentTaskCreationDate={setCurrentTaskCreationDate}
                                                setCurrentTaskDescription={setCurrentTaskDescription}
                                                setCurrentTaskDescriptionHtml={setCurrentTaskDescriptionHtml}
                                                setCurrentTaskLastUpdatedOn={setCurrentTaskLastUpdatedOn}
                                                setCurrentTaskStatus={setCurrentTaskStatus}
                                                setCurrentTaskPriority={setCurrentTaskPriority}
                                                handleTaskComplete={(event,index) => handleTaskComplete(event,index)}
                                                dueDatePopoverIsOpen={dueDatePopoverIsOpen}
                                                setDueDatePopoverIsOpen={setDueDatePopoverIsOpen}
                                                setTaskType={setTaskType}
                                                isTaskTabCompleted={true}
                                            />
                                        </TableBody> 
                                    </Table>
                                </TableContainer> :
                                <div className='d-flex flex-column  p-0 justify-content-center align-items-center'>
                                <img style={{width: "14rem", }}  src={checklist} alt="" />
                                    <div className='fafafa-color pt-3 lato-font'>Your completed tasks will appear here ✅ </div>
                                </div>
                                }
                            </div>
                        </TabPanel>
                        </SwipeableViews>
                    </Box>
                </Card.Body>
            </Card>

            <TaskDetailsModal
                show={modalShow}
                onHide={() => 
                    setModalShow(false)
                }
                currentIndex={currentIndex}
                taskType={taskType}
                setTaskType={setTaskType}
                selectedDate={selectedDate}
                currentTaskName={currentTaskName}
                currentTaskCreationDate={currentTaskCreationDate}
                currentTaskLastUpdatedOn={currentTaskLastUpdatedOn}
                currentTaskDescription={currentTaskDescription}
                currentTaskDescriptionHtml={currentTaskDescriptionHtml}
                currentTaskDueDate={currentTaskDueDate}
                currentTaskDueDateTime={currentTaskDueDateTime}
                currentTaskStatus={currentTaskStatus}
                currentTaskPriority={currentTaskPriority}
                currentTaskTags={currentTaskTags}
                nonIncludedTaskTags={nonIncludedTaskTags}
                setCurrentTaskDueDate={setCurrentTaskDueDate}
                setCurrentTaskDueDateTime={setCurrentTaskDueDateTime}
                setCurrentIndex={setCurrentIndex}
                setCurrentTaskPriority={setCurrentTaskPriority}
                setCurrentTaskTags={setCurrentTaskTags}
                setSelectedDate={setSelectedDate}
                today={today}
                handleTaskUpdate={(event) => handleTaskUpdate(event)}
                allTagData={allTagData}
                handleTagCreation={handleTagCreation}
                completedTasks={completedTasks}
                dueDatePopoverIsOpen={dueDatePopoverIsOpen}
                setDueDatePopoverIsOpen={setDueDatePopoverIsOpen}
                setCurrentTaskStatus={setCurrentTaskStatus}
            />
        </>
    );
};

export default TaskCard;