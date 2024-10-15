import React, { useState, useRef, useEffect } from 'react';

import { Modal } from "antd";

import { Text,Textarea,Button,Box,Flex,Divider } from '@mantine/core';
import { Popover, PopoverContent, PopoverTrigger} from "@nextui-org/react";

import {Icons} from '../../icons/icons';

import getPriorityProperty from '../../../utils/getPriorityProperty';

import { MantineDropdown } from '../../models/ModelDropdown2/mantineDropdown';
import PriorityDropdownContent from '../DropdownContent/priorityDropdownContent';
import StatusDropdownContent from '../DropdownContent/statusDropdownContent';
import NextUICalendar from '../../models/NextUICalendar/nextUICalendar';
import { createTaskInfo } from '../../../DataManagement/Tasks/createTaskv2';
import TaskDescriptionTipTap from '../TaskDetailsModal/TaskDescriptionTipTap/taskDescriptionTipTap';

// import {parseDate, getLocalTimeZone} from "@internationalized/date";

import './taskCreationModal.css';
import dayjs from 'dayjs';

const TaskCreationModal = (props) => {
    const {openTaskCreateModal,setOpenTaskCreateModal, taskData, setTaskData} = props;
    
    const [newTaskName, setNewTaskName] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');
    const [newTaskPriority, setNewTaskPriority] = useState(null);
    const [newTaskStatus, setNewTaskStatus] = useState(null);
    const [selectedDate, setSelectedDate] = useState(undefined); // Initialize with current date using Day.js
    const [selectedDateTime, setSelectedDateTime] = useState(undefined);
    const [dueDatePopoverOpened, setDueDatePopoverOpened] = useState(false);
    const textareaRef = useRef(null);
    const newTaskNameDisabled = newTaskName.trim() === '';

    useEffect(() => {
        if (openTaskCreateModal && textareaRef.current) {
            const textarea = textareaRef.current;
            textarea.focus(); // Focus the textarea
            textarea.setSelectionRange(textarea.value.length, textarea.value.length); // Set cursor to the end
        }
    }, [openTaskCreateModal]);

    const handleTaskCreation = async () => {
        try {
            const newTask = await createTaskInfo(
                newTaskName,
                newTaskDescription,
                newTaskStatus,
                newTaskPriority,
                selectedDate,
                selectedDateTime
                // selectedDateTime !== undefined ? dayjs(selectedDateTime) : selectedDate !== undefined ? dayjs(selectedDate) : null,
                // selectedDateTime !== undefined ? dayjs(selectedDateTime) : selectedDate !== undefined ? dayjs(selectedDate) : null
            );
    
            setTaskData([...taskData, newTask]);
            setOpenTaskCreateModal(false);
        } catch (error) {
            console.error("Error creating task:", error);
        }
    };


    return (
        <Modal open={openTaskCreateModal} onCancel={() => {setOpenTaskCreateModal(false) }} className='task-creation-modal' width={650} >
            <div style={{margin: "auto",width: "100%"}}>
                <Box p='15px 20px' w='100%'>
                    <Textarea
                        ref={textareaRef}
                        className='title'
                        p='8px 0'
                        m='4px 0px'
                        w='100%'
                        minRows={1}
                        autosize
                        placeholder='Issue title'
                        value={newTaskName}
                        onChange={(event) => {
                            setNewTaskName(event.currentTarget.value);
                        }}
                    />
                    {/* <Textarea
                        className='mt-1 mb-5 description'
                        radius={0}
                        p={0}
                        bg='transparent'
                        m={0}
                        w='100%'
                        minRows={2}
                        autosize
                        placeholder='Description'
                        value={newTaskDescription}
                        onChange={(event) => {
                            setNewTaskDescription(event.currentTarget.value);
                        }}
                    /> */}
                    <Box className='task-creation-tiptap' mt={20} mb={40}>
                        <TaskDescriptionTipTap 
                            setNewTaskDescription={setNewTaskDescription}
                        />
                    </Box>
    
                    <Box>
                        <Flex justify='space-between' align='center' >
                            <Flex gap='10'>
                                <Button radius={5} h='30' p='0 8px' bg='transparent' bd='.1px solid #048369'>
                                    {Icons('IconUser',14,14,'#e0e2e6')}
                                    <Text ms='8' ff='Inter' fz='12.5' c='#e0e2e6'>Assignee</Text>
                                </Button>
                                {/* <Button radius={5} h='30' p='0 8px' bg='transparent' bd='.1px solid #048369'>
                                    <IconLoader width={14} color='#e0e2e6' />
                                    <Text ms='8' ff='Inter' fz='12.5' c='#e0e2e6'>Status</Text>
                                </Button> */}

                                <MantineDropdown 
                                    target={
                                        <Button c='#e0e2e6' radius={5} h='30' p='0 8px' bg='transparent' bd='.1px solid #048369'>
                                            {Icons('IconLoader',14,14,'#e0e2e6')}
                                            <Text ms='8' ff='Inter' fz='12.5' >{newTaskStatus ? newTaskStatus : 'Status'}</Text>
                                        </Button>
                                    }
                                    width={190}
                                    dropdown={<StatusDropdownContent element={newTaskStatus} setCurrentTaskStatus={setNewTaskStatus} existingTask={false} /> }
                                    position='bottom-start'
                                />

                                <MantineDropdown 
                                    target={
                                        <Button c='#e0e2e6' radius={5} h='30' p='0 8px' bg='transparent' bd='.1px solid #048369'>
                                            {Icons('IconFlag3',14,14,newTaskPriority ? getPriorityProperty(newTaskPriority).icon.props.fill : '#e0e2e6')}
                                            <Text ms='8' ff='Inter' fz='12.5' >{newTaskPriority ? newTaskPriority : 'Priority'}</Text>
                                        </Button>
                                    }
                                    width={180} 
                                    dropdown={<PriorityDropdownContent element={newTaskPriority} setCurrentTaskPriority={setNewTaskPriority} existingTask={false}/> }
                                    position='bottom-start'
                                />
                                <Popover placement="bottom" isOpen={dueDatePopoverOpened} onOpenChange={(open) => setDueDatePopoverOpened(open)}>
                                    <PopoverTrigger onClick={() => setDueDatePopoverOpened}>
                                        <Button fw={300} c='#e0e2e6' className='nextui-calendar-popover-trigger-button' radius={5} h='30' p='0 8px' bg='transparent' bd='.1px solid #048369' 
                                        >
                                            {Icons('IconCalendarMonth',14,14,'#e0e2e6')} 
                                            <Text ms='8' ff='Inter' fz='12.5' >
                                                {/* {selectedDate && selectedDate.isValid() ? `${selectedDate.format('MMM D')} ` : 'Due Date'} */}
                                                {selectedDateTime && selectedDateTime.isValid() 
                                                    ? selectedDateTime.format(`MMM D, h${selectedDateTime.minute() !== 0 ? ':mm' : ''}a`)
                                                    : selectedDate && dayjs(selectedDate).isValid() ? `${dayjs(selectedDate).format('MMM D')} ` : 'Due Date'
                                                }
                                            </Text>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className='p-0 bg-transparent' >
                                        <NextUICalendar 
                                            selectedDate={selectedDate}
                                            setSelectedDate={setSelectedDate}
                                            selectedDateTime={selectedDateTime}
                                            setSelectedDateTime={setSelectedDateTime}
                                        />
                                    </PopoverContent>
                                </Popover>
                            </Flex>
                        </Flex>
                    </Box>
                </Box>
                <Divider size={1} color='#57585a'/>
                <div style={{margin: "auto",width: "100%"}}>
                    <Box p='13px 20px' w='100%'>
                        <Flex justify='end' align='center'>
                            <Button disabled={newTaskNameDisabled} bd={`1px solid ${newTaskNameDisabled ? '#434446 ' : '#048369'}`} className={`${newTaskName && 'task-card-create-task-button'}`} radius={8} p='0px 12px' c={newTaskNameDisabled ? '#838486 ' : '#fafafa'} bg={newTaskNameDisabled ? '#434446 ' : '#048369'} onClick={handleTaskCreation}>
                                <div className='d-flex align-items-center'>
                                    <div style={{marginRight: "5px"}}>
                                        {Icons('IconPlus',14,14)}
                                    </div>
                                    <span>Create</span>
                                </div>
                            </Button>
                            {/* disabled={!newTaskName && newTaskName.length !== '' && newTaskName.trim() !== ''} */}
                        </Flex>
                    </Box>
                </div>
            </div>
        </Modal>
    );
};

export default TaskCreationModal;