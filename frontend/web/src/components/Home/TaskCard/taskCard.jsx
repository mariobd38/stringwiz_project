import React, { useState } from 'react';


import { Table, Card, Text,SegmentedControl,Flex,Button, Box } from '@mantine/core';

import { getTagInfo } from '../../../DataManagement/Tags/getTags';

import TaskDetailsModal from '../TaskDetailsModal/taskDetailsModal';
import TaskCardContent from './TaskCardContent/taskCardContent';
import TaskCreationModal from '../taskCreationModal/taskCreationModal';

import { UpdateTaskInfoNew } from '../../../DataManagement/Tasks/updateTaskNew';

import checklist from '../../../assets/illustrations/home/checklist.png';

import './taskCard.css'
import Icons from '../../icons/icons';

const TaskCard = (props) => {

    const {userFullName, initials, userEmail, taskData, setTaskData, ongoingTasks, today, overdueTasks,
        completedTasks,userProfileDto,userProfilePicture} = props; 
    const [currentIndex, setCurrentIndex] = useState(null);

    //task attributes
    const [currentTaskName, setCurrentTaskName] = useState('');
    const [currentTaskCreationDate, setCurrentTaskCreationDate] = useState('');
    const [currentTaskLastUpdatedOn, setCurrentTaskLastUpdatedOn] = useState('');
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

    const handleTaskUpdateNew = (element,value, attribute, taskType,setTaskType,index) => {
        UpdateTaskInfoNew(
            element,
            value,
            attribute,
            taskType,
            setTaskType,
            index
        );
    }

    
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
    const renderTaskContent = (taskType,isCompleted) => (
        <TaskCardContent 
          today={today}
          taskType={taskType}
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
          setCurrentTaskDescriptionHtml={setCurrentTaskDescriptionHtml}
          setCurrentTaskLastUpdatedOn={setCurrentTaskLastUpdatedOn}
          setCurrentTaskStatus={setCurrentTaskStatus}
          setCurrentTaskPriority={setCurrentTaskPriority}
          dueDatePopoverIsOpen={dueDatePopoverIsOpen}
          setDueDatePopoverIsOpen={setDueDatePopoverIsOpen}
          setTaskType={setTaskType}
          isTaskTabCompleted={isCompleted}
          handleTaskUpdateNew={handleTaskUpdateNew}
        />
      );
    const [openTaskCreateModal, setOpenTaskCreateModal] = useState(false);

    return (

        <Box py={20} px={20} bg='#222529' style={{borderRadius: "10px"}}>
            <div className='d-flex align-items-center justify-content-between pb-2'>
                <div style={{ color: '#fafafa' }}>
                    <Text fz='18'  c='#e8eaed' ff='Lato'>My Tasks</Text>
                </div>

                <div>
                    {Icons('IconDots',24,24,'#fafafa')}
                </div> 
            </div>

            <Flex align='center' mt={5} mb={15} justify='space-between'>
                <SegmentedControl
                    className='task-card-segmented-control' 
                    color="#048369"
                    withItemsBorders={false}
                    data={segments}
                    value={activeSegment}
                    onChange={setActiveSegment}
                    radius={6}
                />

                <Button bd='1px solid #048369'  className='task-card-create-task-button' radius={8} p='0px 12px' bg='transparent' onClick={() => setOpenTaskCreateModal(true)}>
                    <div className='d-flex align-items-center'>
                        <div style={{marginRight: "7px"}}>
                        {Icons('IconPlus',15,15,'#fafafa')}
                        </div>
                        <span>Create task</span>
                    </div>
                </Button>
                
            </Flex>
            <Card className='task-card-card' >
                
                <div className='user-home-card-body'>
                    <div>
                        {activeSegment === '1' && (
                            <div className='table-container-wrapper mx-3 py-3'>
                                <Table>
                                    <Table.Tbody>
                                        {renderTaskContent(ongoingTasks,false)}
                                    </Table.Tbody>
                                </Table>
                            </div>
                        )}

                        {activeSegment === '2' && (
                            <div className='table-container-wrapper mx-3 py-3'>
                                <Table>
                                    <Table.Tbody>
                                    
                                        {renderTaskContent(overdueTasks,false)}

                                    </Table.Tbody>
                                </Table>
                            </div>
                        )}

                        {activeSegment === '3' && (
                            <div className='table-container-wrapper mx-3 py-3'>
                                {completedTasks.length > 0 ? (
                                    <Table>
                                        <Table.Tbody>
                                            {renderTaskContent(completedTasks,true)}
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
                dueDatePopoverIsOpen={dueDatePopoverIsOpen}
                setDueDatePopoverIsOpen={setDueDatePopoverIsOpen}
                setCurrentTaskStatus={setCurrentTaskStatus}
                userProfileDto={userProfileDto}
                userProfilePicture={userProfilePicture}
                handleTaskUpdateNew={(element,value, attribute, taskType,setTaskType,index) => handleTaskUpdateNew(element,value, attribute, taskType,setTaskType,index)}
            />

            <TaskCreationModal 
                openTaskCreateModal={openTaskCreateModal}
                setOpenTaskCreateModal={setOpenTaskCreateModal}
                taskData={taskData}
                setTaskData={setTaskData}
            />
        </Box>
    );
};

export default TaskCard;