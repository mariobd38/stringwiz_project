import React, { useState, useEffect } from 'react';
import { useLocalState } from "../../../utils/useLocalStorage";

import dayjs from 'dayjs';

import Card from 'react-bootstrap/Card';

import { ClickAwayListener } from '@mui/base/ClickAwayListener';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import LockIcon from '@mui/icons-material/Lock';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

import {createTaskInfo} from './../../../DataManagement/Tasks/createTask';
import {updateTaskInfo} from './../../../DataManagement/Tasks/updateTask';
import { getTagInfo } from '../../../DataManagement/Tags/getTags';
import { getAllTagsInfo } from '../../../DataManagement/Tags/getAllTags';
import { createTagInfo } from '../../../DataManagement/Tags/createTag';

import TaskDetailsModal from '../TaskDetailsModal/taskDetailsModal';
import TaskCardContent from './TaskCardContent/taskCardContent';

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

const TaskCard = ({taskData, setTaskData, today, upcomingTasks, setUpcomingTasks, overdueTasks, setOverdueTasks,
    completedTasks, setCompletedTasks,
    allTagData, setAllTagData}) => {
    const [currentIndex, setCurrentIndex] = useState(null);
    const [newTaskRowOpen, setNewTaskRowOpen] = useState(false);
    const [userTasks, setUserTasks] = useLocalState([], "userTasks");

    const [currentTabValue, setCurrentTabValue] = React.useState(0);

    const handleTabChange = (event, newValue) => {
        setCurrentTabValue(newValue);
        console.log(newValue);
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
    // const [currentTaskIdNumber, setCurrentTaskIdNumber] = useState('');
    const [currentTaskStatus, setCurrentTaskStatus] = useState('');
    const [currentTaskPriority, setCurrentTaskPriority] = useState('');
    const [currentTaskTags, setCurrentTaskTags] = useState([]);

    //due date popovers
    const [dueDatePopoverAnchorEl, setDueDatePopoverAnchorEl] = useState(null);
    const [currentTaskDueDate, setCurrentTaskDueDate] = useState('');
    const [dueDateClockIsOpen, setDueDateClockIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDueDatePopoverClose = (event) => {
        setDueDatePopoverAnchorEl(null);
        setSelectedDate(false); 
        setCurrentTaskDueDate(null);
        setDueDateClockIsOpen(false);
    };

    const [taskType, setTaskType] = useState(null);
    useEffect(() => {
        if(currentTabValue === 0) {
            setTaskType(upcomingTasks);
        } else if (currentTabValue === 1) {
            setTaskType(overdueTasks);
        } else {
            setTaskType(completedTasks);
        }
    }, [setTaskType, completedTasks, currentTabValue, overdueTasks, upcomingTasks])

    //update task call
    const handleTaskUpdate = (event) => {
        if (selectedDate === null && currentTaskDueDate !== null) {
            setSelectedDate(currentTaskDueDate);
        }

        updateTaskInfo(
            currentIndex, 
            event,
            taskType,
            selectedDate,
            dayjs,
            false,
            handleDueDatePopoverClose,
            setCurrentTaskDueDate,
            null
        );

        setDueDateClockIsOpen(false);
    };

    const [taskJustCompleted, setTaskJustCompleted] = useState(false);
    
    // TODO
    const handleTaskComplete = (event,index) => {
        updateTaskInfo(
            index, 
            event,
            taskType,
            selectedDate,
            dayjs,
            false,
            handleDueDatePopoverClose,
            setCurrentTaskDueDate,
            null,
            setTaskJustCompleted
        );
    }
    
    //task details modal
    const [modalShow, setModalShow] = useState(false);
    
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
                console.log("new tag created!!");
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
                style={{ width:'85%', fontFamily: 'Nunito Sans', border: "2px solid #313234", borderRadius: "10px" }}
            >
                {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className='new-svg'
		xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice">
		<defs>
			<linearGradient id="bg">
				<stop offset="0%" style={{stopColor:"rgba(130, 158, 249, 0.06)"}}></stop>
				<stop offset="50%" style={{stopColor:"rgba(76, 190, 255, 0.6)"}}></stop>
				<stop offset="100%" style={{stopColor:"rgba(115, 209, 72, 0.2)"}}></stop>
			</linearGradient>
			<path id="wave" fill="url(#bg)" d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
	s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z" />
		</defs>
		<g>
			<use xlinkHref='#wave' opacity=".3">
				<animateTransform
          attributeName="transform"
          attributeType="XML"
          type="translate"
          dur="10s"
          calcMode="spline"
          values="270 230; -334 180; 270 230"
          keyTimes="0; .5; 1"
          keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
          repeatCount="indefinite" />
			</use>
			<use xlinkHref='#wave' opacity=".6">
				<animateTransform
          attributeName="transform"
          attributeType="XML"
          type="translate"
          dur="8s"
          calcMode="spline"
          values="-270 230;243 220;-270 230"
          keyTimes="0; .6; 1"
          keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
          repeatCount="indefinite" />
			</use>
			<use xlinkHref='#wave' opacity=".9">
				<animateTransform
          attributeName="transform"
          attributeType="XML"
          type="translate"
          dur="6s"
          calcMode="spline"
          values="0 230;-140 200;0 230"
          keyTimes="0; .4; 1"
          keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
          repeatCount="indefinite" />
			</use>
		</g>
	</svg> */}
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
                            <Tab label="Ongoing" className='user-home-card-task-tab' {...a11yProps(0)} />
                            <Tab label="Overdue" className='user-home-card-task-tab' {...a11yProps(1)} />
                            <Tab label="Completed" className='user-home-card-task-tab' {...a11yProps(2)} />
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
                                                    <Button className='user-home-create-task-button-dark d-flex align-items-center ms-2 mb-2'
                                                        style={{ color: "#919191" }} onClick={handleNewTaskClick}
                                                    >
                                                        <AddRoundedIcon className='me-1' style={{ width: "1rem", marginBottom: ".09rem" }}/>
                                                        <span className='me-1' style={{ fontSize: '0.95rem' }}>Create task</span>
                                                    </Button>
                                                    {newTaskRowOpen ? (
                                                        <TableRow className='table-row-new-dark '>
                                                            <TableCell scope="row" className=' d-flex align-items-center justify-content-between table-cell'>
                                                                <div className='d-flex align-items-center mb-1 m-0' style={{color: "#fafafa"}}>
                                                                    <div>
                                                                        <CheckRoundedIcon className='user-home-task-check-icon' />
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
                                                taskData={taskData}
                                                taskType={upcomingTasks}
                                                currentTaskDueDate={currentTaskDueDate}
                                                handleDueDatePopoverClose={(event) => handleDueDatePopoverClose(event)}
                                                setCurrentIndex={setCurrentIndex}
                                                setCurrentTaskDueDate={setCurrentTaskDueDate}
                                                handleTaskUpdate={(event) => handleTaskUpdate(event)}
                                                selectedDate={selectedDate}
                                                setSelectedDate={setSelectedDate}
                                                setDueDateClockIsOpen={setDueDateClockIsOpen}
                                                dueDateClockIsOpen={dueDateClockIsOpen}
                                                getTagInfo={getTagInfo}
                                                setCurrentTaskTags={setCurrentTaskTags}
                                                setModalShow={setModalShow}
                                                setCurrentTaskName={setCurrentTaskName}
                                                setCurrentTaskCreationDate={setCurrentTaskCreationDate}
                                                setCurrentTaskDescription={setCurrentTaskDescription}
                                                setCurrentTaskLastUpdatedOn={setCurrentTaskLastUpdatedOn}
                                                setCurrentTaskStatus={setCurrentTaskStatus}
                                                setCurrentTaskPriority={setCurrentTaskPriority}
                                                dueDatePopoverAnchorEl={dueDatePopoverAnchorEl}
                                                setDueDatePopoverAnchorEl={setDueDatePopoverAnchorEl}
                                                handleTaskComplete={(event,index) => handleTaskComplete(event,index)}
                                                taskJustCompleted={taskJustCompleted}
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
                                                taskData={taskData}
                                                taskType={overdueTasks}
                                                currentTaskDueDate={currentTaskDueDate}
                                                handleDueDatePopoverClose={(event) => handleDueDatePopoverClose(event)}
                                                setCurrentIndex={setCurrentIndex}
                                                setCurrentTaskDueDate={setCurrentTaskDueDate}
                                                handleTaskUpdate={(event) => handleTaskUpdate(event)}
                                                selectedDate={selectedDate}
                                                setSelectedDate={setSelectedDate}
                                                setDueDateClockIsOpen={setDueDateClockIsOpen}
                                                dueDateClockIsOpen={dueDateClockIsOpen}
                                                getTagInfo={getTagInfo}
                                                setCurrentTaskTags={setCurrentTaskTags}
                                                setModalShow={setModalShow}
                                                setCurrentTaskName={setCurrentTaskName}
                                                setCurrentTaskCreationDate={setCurrentTaskCreationDate}
                                                setCurrentTaskDescription={setCurrentTaskDescription}
                                                setCurrentTaskLastUpdatedOn={setCurrentTaskLastUpdatedOn}
                                                setCurrentTaskStatus={setCurrentTaskStatus}
                                                setCurrentTaskPriority={setCurrentTaskPriority}
                                                dueDatePopoverAnchorEl={dueDatePopoverAnchorEl}
                                                setDueDatePopoverAnchorEl={setDueDatePopoverAnchorEl}
                                                handleTaskComplete={(event,index) => handleTaskComplete(event,index)}
                                                taskJustCompleted={taskJustCompleted}
                                            />
                                        </TableBody> 
                                    </Table>
                                </TableContainer>
                            </div>
                        </TabPanel>

                        <TabPanel value={currentTabValue} index={2} dir={theme.direction}>
                        <div className='table-container-wrapper'>
                                

                                <TableContainer className='table-container p-0' >
                                    <Table>
                                        <TableBody >
                                            <TaskCardContent 
                                                today={today}
                                                taskData={taskData}
                                                taskType={completedTasks}
                                                currentTaskDueDate={currentTaskDueDate}
                                                handleDueDatePopoverClose={(event) => handleDueDatePopoverClose(event)}
                                                setCurrentIndex={setCurrentIndex}
                                                setCurrentTaskDueDate={setCurrentTaskDueDate}
                                                handleTaskUpdate={(event) => handleTaskUpdate(event)}
                                                selectedDate={selectedDate}
                                                setSelectedDate={setSelectedDate}
                                                setDueDateClockIsOpen={setDueDateClockIsOpen}
                                                dueDateClockIsOpen={dueDateClockIsOpen}
                                                getTagInfo={getTagInfo}
                                                setCurrentTaskTags={setCurrentTaskTags}
                                                setModalShow={setModalShow}
                                                setCurrentTaskName={setCurrentTaskName}
                                                setCurrentTaskCreationDate={setCurrentTaskCreationDate}
                                                setCurrentTaskDescription={setCurrentTaskDescription}
                                                setCurrentTaskLastUpdatedOn={setCurrentTaskLastUpdatedOn}
                                                setCurrentTaskStatus={setCurrentTaskStatus}
                                                setCurrentTaskPriority={setCurrentTaskPriority}
                                                dueDatePopoverAnchorEl={dueDatePopoverAnchorEl}
                                                setDueDatePopoverAnchorEl={setDueDatePopoverAnchorEl}
                                                handleTaskComplete={(event,index) => handleTaskComplete(event,index)}
                                            />
                                        </TableBody> 
                                    </Table>
                                </TableContainer>
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
                selectedDate={selectedDate}
                currentTaskName={currentTaskName}
                currentTaskCreationDate={currentTaskCreationDate}
                currentTaskLastUpdatedOn={currentTaskLastUpdatedOn}
                currentTaskDescription={currentTaskDescription}
                currentTaskDueDate={currentTaskDueDate}
                currentTaskStatus={currentTaskStatus}
                currentTaskPriority={currentTaskPriority}
                currentTaskTags={currentTaskTags}
                nonIncludedTaskTags={nonIncludedTaskTags}
                setCurrentTaskDueDate={setCurrentTaskDueDate}
                setCurrentIndex={setCurrentIndex}
                setCurrentTaskPriority={setCurrentTaskPriority}
                setCurrentTaskTags={setCurrentTaskTags}
                setSelectedDate={setSelectedDate}
                today={today}
                handleTaskUpdate={(event) => handleTaskUpdate(event)}
                allTagData={allTagData}
                handleTagCreation={handleTagCreation}
            />
        </>
    );
};

export default TaskCard;