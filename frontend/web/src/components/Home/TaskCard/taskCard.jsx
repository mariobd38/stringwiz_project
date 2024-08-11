import React, { useState, useEffect } from 'react';

import dayjs from 'dayjs';

import { useClickOutside } from '@mantine/hooks';
import { Table, Card, Text } from '@mantine/core';
import { IconPlus,IconCircle,IconLockFilled,IconDots } from '@tabler/icons-react';
import { Tabs } from "antd";

import {createTaskInfo} from './../../../DataManagement/Tasks/createTask';
import {UpdateTaskInfo} from './../../../DataManagement/Tasks/updateTask';
import { getTagInfo } from '../../../DataManagement/Tags/getTags';
import { getAllTagsInfo } from '../../../DataManagement/Tags/getAllTags';
import { createTagInfo } from '../../../DataManagement/Tags/createTag';

import TaskDetailsModal from '../TaskDetailsModal/taskDetailsModal';
import TaskCardContent from './TaskCardContent/taskCardContent';

import checklist from '../../../assets/illustrations/home/checklist.png';

import './taskCard.css'

const TaskCard = ({userFullName, userEmail, taskData, setTaskData, today, ongoingTasks, todaysTasks,unscheduledTasks, overdueTasks,
    completedTasks,
    allTagData, setAllTagData}) => {
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

    // const theme = useTheme();

    const items = [
        {
          key: '1',
          label: 'Ongoing',
          children: 
          <div className='table-container-wrapper'>
                <Table>
                    <Table.Tbody >
                        <div style={{ position: 'relative' }} ref={newTaskClickAway}>
                            <button className='user-home-create-task-button-dark d-flex align-items-center ms-2 mb-2'
                                style={{ color: "#919191" }} onClick={handleNewTaskClick}
                            >
                                <IconPlus className='me-1' style={{ width: "1rem", marginBottom: ".09rem" }}/>
                                <span className='me-1' style={{ fontSize: '0.95rem' }}>Create task</span>
                            </button>
                            {newTaskRowOpen ? (
                                <Table.Tr className='table-row-new-dark'>
                                    <Table.Td scope="row" className=' d-flex align-items-center justify-content-between table-cell'>
                                        <div className='d-flex align-items-center mb-1 m-0' style={{color: "#fafafa"}}>
                                            <div>
                                                <IconCircle className='user-home-task-check-icon' />
                                            </div>
                                            <div>
                                                <input onKeyDown={handleTaskCreate} placeholder='Task name' autoFocus="autofocus" className={`ps-2 taskName-text user-home-new-task-input fafafa-color`} contentEditable={true} /> 
                                            </div>
                                        </div>
                                    </Table.Td>
                                </Table.Tr>
                            ) : null}
                    
                        </div>

                        <TaskCardContent 
                            today={today}
                            taskType={ongoingTasks}
                            taskTypeObj = {{ongoingTasks, todaysTasks,unscheduledTasks}}
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
                            handleTaskUpdate={(event) => handleTaskUpdate(event)}
                            handleTaskComplete={(event,index,taskType) => handleTaskComplete(event,index,taskType)}
                            dueDatePopoverIsOpen={dueDatePopoverIsOpen}
                            setDueDatePopoverIsOpen={setDueDatePopoverIsOpen}
                            setTaskType={setTaskType}
                            isTaskTabCompleted={false}
                        />
                    </Table.Tbody> 
                </Table>
            </div>
          ,
        },
        {
          key: '2',
          label: 
            <> 
            <Text className='d-flex' c='#f5f6f9' ff='Nunito Sans'>Overdue<Text ms={15}  c='#959699'>{overdueTasks.length}</Text></Text>
            </>
          ,
          children: 
            <div className='table-container-wrapper'>
                <Table>
                    <Table.Tbody >
                        <TaskCardContent 
                            today={today}
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
                            handleTaskUpdate={(event) => handleTaskUpdate(event)}
                            handleTaskComplete={(event,index,taskType) => handleTaskComplete(event,index,taskType)}
                            dueDatePopoverIsOpen={dueDatePopoverIsOpen}
                            setDueDatePopoverIsOpen={setDueDatePopoverIsOpen}
                            setTaskType={setTaskType}
                            isTaskTabCompleted={false}
                        />
                    </Table.Tbody> 
                </Table>
            </div>
          ,
        },
        {
          key: '3',
          label: 
            <> 
            <Text className='d-flex' c='#f5f6f9' ff='Nunito Sans'>Completed<Text ms={15}  c='#959699'>{completedTasks.length}</Text></Text>
            </>
          ,
          children: 
            <div className='table-container-wrapper'>
                {completedTasks.length > 0 ? 
                    <Table>
                        <Table.Tbody >
                            <TaskCardContent 
                                today={today}
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
                                handleTaskUpdate={(event) => handleTaskUpdate(event)}
                                handleTaskComplete={(event,index,taskType) => handleTaskComplete(event,index,taskType)}
                                dueDatePopoverIsOpen={dueDatePopoverIsOpen}
                                setDueDatePopoverIsOpen={setDueDatePopoverIsOpen}
                                setTaskType={setTaskType}
                                isTaskTabCompleted={true}
                            />
                        </Table.Tbody> 
                    </Table>
                :
                <div className='d-flex flex-column  p-0 justify-content-center align-items-center'>
                <img style={{width: "14rem", }}  src={checklist} alt="" />
                    <div className='fafafa-color pt-3 lato-font'>Your completed tasks will appear here ✅ </div>
                </div>
                }
            </div>
          
          ,
        },
    ];

    return (
        <>
            <Card className='task-card-card' >
                <div 
                    style={{
                        backgroundColor: '#1e1f21',
                        border: "none",
                        borderRadius: "8px"
                    }} 
                    className='d-flex align-items-center pt-3 pb-2 d-flex justify-content-between px-4 user-home-card-header' >
                    <div className='d-flex align-items-center' style={{ color: '#fafafa' }}>
                        <span className='d-flex align-items-center'>
                            My Tasks
                            <IconLockFilled className='ms-2' style={{ width: "1.1rem" }}/>
                        </span>
                    </div>
                    <div className='me-2' style={{ color: "#fafafa" }}>
                        <IconDots />
                    </div>
                </div>
                
                <div className='user-home-card-body'>
                    <Tabs defaultActiveKey="1" items={items} className='user-home-task-card-tabs'/>
                </div>
            </Card>

            <TaskDetailsModal
                userFullName={userFullName}
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
                nonIncludedTaskTags={nonIncludedTaskTags}
                setCurrentTaskDueDate={setCurrentTaskDueDate}
                setCurrentTaskDueDateTime={setCurrentTaskDueDateTime}
                setCurrentIndex={setCurrentIndex}
                setCurrentTaskPriority={setCurrentTaskPriority}
                setCurrentTaskDescriptionHtml={setCurrentTaskDescriptionHtml}
                setCurrentTaskTags={setCurrentTaskTags}
                setSelectedDate={setSelectedDate}
                today={today}
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