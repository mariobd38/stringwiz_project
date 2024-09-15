import React, { useState, useEffect } from 'react';

import dayjs from 'dayjs';

import { useClickOutside } from '@mantine/hooks';
import { Table, Card, Text, Input,SegmentedControl,Flex,Button,Tooltip, Box } from '@mantine/core';
import { IconPlus,IconCircle,IconLockFilled,IconEye,IconDots } from '@tabler/icons-react';

import { createTaskInfo } from './../../../DataManagement/Tasks/createTask';
import { UpdateTaskInfo } from './../../../DataManagement/Tasks/updateTask';
import { getTagInfo } from '../../../DataManagement/Tags/getTags';

import TaskDetailsModal from '../TaskDetailsModal/taskDetailsModal';
import TaskCardContent from './TaskCardContent/taskCardContent';

import { UpdateTaskInfoNew } from '../../../DataManagement/Tasks/updateTaskNew';

import checklist from '../../../assets/illustrations/home/checklist.png';

import './taskCard.css'

const TaskCard = (props) => {

    const {userFullName, initials, userEmail, taskData, setTaskData, ongoingTasks, today, upcomingTasks, todaysTasks,unscheduledTasks, overdueTasks,
        completedTasks,userProfileDto,userProfilePicture} = props; 
    const [currentIndex, setCurrentIndex] = useState(null);
    const [newTaskRowOpen, setNewTaskRowOpen] = useState(false);

    const handleNewTaskClick = () => {
        setNewTaskRowOpen((prev) => !prev);
    };

    const newTaskClickAway = useClickOutside(() => setNewTaskRowOpen(false));

    const handleTaskCreate = (event) => {
        if (event.key === 'Enter' && event.target.value.trim() !== '') {
            createTaskInfo(
                dayjs,
                event.target.value,
                null,
                null,
                null,
                null,
                setTaskData,
                taskData
            );
            setNewTaskRowOpen(false);
        }
    };

    //task attributes
    const [currentTask, setCurrentTask] = useState(null);
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
    const handleTaskComplete = (event,index,taskType) => {
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
    

    const handleTaskUpdateNew = (element,value, attribute, taskType,setTaskType,index) => {
        UpdateTaskInfoNew(
            element,
            value,
            attribute,
            taskType,
            setTaskType,
            index
        );
        setCurrentTask(taskType[currentIndex]);
    }

    const [inputWidth, setInputWidth] = useState('100%');

    useEffect(() => {
        const updateWidth = () => {
            if (newTaskClickAway.current) {
                const width = newTaskClickAway.current.offsetWidth - 80;
                setInputWidth(`${width}px`);
            }
        };
    
        updateWidth();
    
        window.addEventListener('resize', updateWidth);
    
        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, [newTaskClickAway]);

    
    const [activeSegment, setActiveSegment] = useState('1');

    const segments = [
        { value: '1', label: <> {
            <Text className='d-flex align-items-center task-card-segment' c='#f5f6f9' ff='Nunito Sans' fz='15'>Upcoming<Text className='d-flex align-items-center text' ms={10}>{ongoingTasks.length}</Text></Text>
            }
        </> },
        { value: '2', label: <> {
            <Text className='d-flex align-items-center task-card-segment' c='#f5f6f9' ff='Nunito Sans' fz='15'>Overdue<Text className='d-flex align-items-center text' ms={10}>{overdueTasks.length}</Text></Text>
            }
        </> },
        // { value: '3', label: `Completed (${completedTasks.length})` },
        { value: '3', label: <> {
            <Text className='d-flex align-items-center task-card-segment' c='#f5f6f9' ff='Nunito Sans' fz='15'>Done<Text className='d-flex align-items-center text' ms={10}>{completedTasks.length}</Text></Text>
            }
        </> },

    ];
    const renderTaskContent = (taskType, taskTypeObj,isCompleted) => (
        <TaskCardContent 
          today={today}
          taskType={taskType}
          taskTypeObj={taskTypeObj}
          currentTaskDueDate={currentTaskDueDate}
          currentTaskDueDateTime={currentTaskDueDateTime}
          currentIndex={currentIndex}
          setCurrentTask={setCurrentTask}
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
          handleTaskUpdate={handleTaskUpdate}
          handleTaskComplete={handleTaskComplete}
          dueDatePopoverIsOpen={dueDatePopoverIsOpen}
          setDueDatePopoverIsOpen={setDueDatePopoverIsOpen}
          setTaskType={setTaskType}
          isTaskTabCompleted={isCompleted}
          handleTaskUpdateNew={handleTaskUpdateNew}
        />
      );

    return (

        <Box py={20} px={20} bg='#222529' style={{borderRadius: "10px"}}>
            <div className='d-flex align-items-center justify-content-between pb-2'>
                <div style={{ color: '#fafafa' }}>
                    <Text fz='18'  c='#d4d6d8' ff='Lato'>My Tasks</Text>
                </div>
                <div style={{ color: "#fafafa" }}>
                    <IconDots />
                </div> 
            </div>


            <Flex align='center' mt={5} mb={15} justify='space-between'>

                <SegmentedControl
                    className='task-card-segmented-control' 
                    color="blue"
                    withItemsBorders={false}
                    data={segments}
                    value={activeSegment}
                    onChange={setActiveSegment}
                    radius={6}
                />


                <Button bd='1px solid blue' radius={8} p='0px 12px' onClick={() => {setActiveSegment('1'); handleNewTaskClick();}}>
                    <IconPlus width={18} height={15} style={{marginRight: "5px"}}/>Create task
                </Button>
                
            </Flex>
            <Card className='task-card-card' >
                
                <div className='user-home-card-body'>
                    <div className=''>
                        {activeSegment === '1' && (
                        <div className='table-container-wrapper mx-3 py-3'>
                        <Table>
                            <Table.Tbody>
                            <div style={{ position: 'relative', margin: "0 calc(0.57rem * var(--mantine-scale))" }} ref={newTaskClickAway}>
                                

                                {newTaskRowOpen ? (
                                <Table.Tr className='table-row-new-dark w-100'>
                                    <Table.Td scope="row" className='w-100 d-flex align-items-center justify-content-between'>
                                    <div className='w-100 d-flex align-items-center mb-1 m-0' style={{ color: "#fafafa" }}>
                                        <IconCircle className='user-home-task-check-icon' />
                                        <Input
                                        style={{ width: inputWidth }}
                                        onKeyDown={handleTaskCreate}
                                        placeholder='Task name'
                                        autoFocus
                                        className={`ps-2 task-name-text user-home-new-task-input fafafa-color`}
                                        />
                                    </div>
                                    </Table.Td>
                                </Table.Tr>
                                ) : null}
                            </div>

                            
                            {renderTaskContent(ongoingTasks,null,false)}
                            </Table.Tbody>
                        </Table>
                        </div>
                    )}

                    {activeSegment === '2' && (
                        <div className='table-container-wrapper mx-3 py-3'>
                        <Table>
                            <Table.Tbody>
                            
                            {renderTaskContent(overdueTasks,null,false)}

                            </Table.Tbody>
                        </Table>
                        </div>
                    )}

                    {activeSegment === '3' && (
                        <div className='table-container-wrapper mx-3 py-3'>
                        {completedTasks.length > 0 ? (
                            <Table>
                            <Table.Tbody>
                                {renderTaskContent(completedTasks,null,true)}
                            </Table.Tbody>
                            </Table>
                        ) : (
                            <div className='d-flex flex-column  p-0 justify-content-center align-items-center'>
                            <img style={{ width: "14rem" }} src={checklist} alt="" />
                            <div className='fafafa-color pt-3 lato-font'>Your completed tasks will appear here ✅</div>
                            </div>
                        )}
                        </div>
                    )}
                    </div>
                </div>

                
            </Card>

            <TaskDetailsModal
                userFullName={userFullName}
                initials={initials}
                userEmail={userEmail}
                show={modalShow}
                onHide={() => setModalShow(false)}
                currentIndex={currentIndex}
                taskType={taskType}
                setTaskType={setTaskType}
                selectedDate={selectedDate}
                currentTaskName={currentTaskName}
                currentTaskCreationDate={currentTaskCreationDate}
                currentTaskLastUpdatedOn={currentTaskLastUpdatedOn}
                currentTaskDescriptionHtml={currentTaskDescriptionHtml}
                currentTaskDueDate={currentTaskDueDate}
                currentTaskDueDateTime={currentTaskDueDateTime}
                currentTaskStatus={currentTaskStatus}
                currentTaskPriority={currentTaskPriority}
                currentTaskTags={currentTaskTags}
                setCurrentTaskName={setCurrentTaskName}
                setCurrentTaskDueDate={setCurrentTaskDueDate}
                setCurrentTaskDueDateTime={setCurrentTaskDueDateTime}
                setCurrentIndex={setCurrentIndex}
                setCurrentTaskPriority={setCurrentTaskPriority}
                setCurrentTaskDescriptionHtml={setCurrentTaskDescriptionHtml}
                setCurrentTaskTags={setCurrentTaskTags}
                setSelectedDate={setSelectedDate}
                today={today}
                completedTasks={completedTasks}
                dueDatePopoverIsOpen={dueDatePopoverIsOpen}
                setDueDatePopoverIsOpen={setDueDatePopoverIsOpen}
                setCurrentTaskStatus={setCurrentTaskStatus}
                userProfileDto={userProfileDto}
                userProfilePicture={userProfilePicture}
                handleTaskUpdateNew={(element,value, attribute, taskType,setTaskType,index) => handleTaskUpdateNew(element,value, attribute, taskType,setTaskType,index)}
            />
        </Box>
    );
};

export default TaskCard;