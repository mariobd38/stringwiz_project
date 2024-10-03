import React, { useState, useRef, useEffect } from 'react';

import { Modal } from "antd";

import { Text,Textarea,Button,Box,Flex,Divider } from '@mantine/core';
import { Popover, PopoverContent, PopoverTrigger} from "@nextui-org/react";

import Icons from '../../icons/icons';

import getPriorityProperty from '../../../utils/getPriorityProperty';

import { MantineDropdown } from '../../models/ModelDropdown2/mantineDropdown';
import PriorityDropdownContent from '../DropdownContent/priorityDropdownContent';
import StatusDropdownContent from '../DropdownContent/statusDropdownContent';
import NextUICalendar from '../../models/NextUICalendar/nextUICalendar';
import TaskDescriptionTipTap from '../TaskDetailsModal/TaskDescriptionTipTap/taskDescriptionTipTap';

// import {parseDate, getLocalTimeZone} from "@internationalized/date";

import './taskCreationModal.css';

const TaskCreationModal = (props) => {
    const {openTaskCreateModal,setOpenTaskCreateModal} = props;

    const textareaRef = useRef(null);

    useEffect(() => {
        if (openTaskCreateModal && textareaRef.current) {
            const textarea = textareaRef.current;
            textarea.focus(); // Focus the textarea
            textarea.setSelectionRange(textarea.value.length, textarea.value.length); // Set cursor to the end
        }
    }, [openTaskCreateModal]);

    const [newTaskPriority, setNewTaskPriority] = useState(null);
    const [newTaskStatus, setNewTaskStatus] = useState(null);
    
    const [selectedDate, setSelectedDate] = useState(undefined); // Initialize with current date using Day.js
    const [selectedDateTime, setSelectedDateTime] = useState(undefined);

    return (
        <Modal open={openTaskCreateModal} onCancel={() => {setOpenTaskCreateModal(false) }} className='task-creation-modal' width={650} >
            <div style={{margin: "auto",width: "100%"}}>
                <Box p='20px' w='100%'>
                    <Textarea
                        ref={textareaRef}
                        className='mt-1 mb-3 py-2 title'
                        p={0}
                        m={0}
                        w='100%'
                        minRows={1}
                        autosize
                        placeholder='Issue title'
                        // defaultValue={taskType && taskType[currentIndex].name}
                        // onChange={(event) => setNewTaskName(event.currentTarget.value)}
                    />
                    <Textarea
                        className='mt-1 mb-5 description'
                        radius={0}
                        p={0}
                        bg='transparent'
                        m={0}
                        w='100%'
                        minRows={2}
                        autosize
                        placeholder='Description'
                    />
    
                    <Box>
                        <Flex justify='space-between' align='center'>
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
                                <Popover placement="bottom">
                                    <PopoverTrigger >
                                        <Button fw={300} c='#e0e2e6' className='nextui-calendar-popover-trigger-button' radius={5} h='30' p='0 8px' bg='transparent' bd='.1px solid #048369' >
                                            {Icons('IconCalendarMonth',14,14,'#e0e2e6')}
                                            <Text ms='8' ff='Inter' fz='12.5' >{selectedDate && selectedDate.isValid() ? `${selectedDate.format('MMM D')} ` : 'Due Date'}</Text>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className='p-0 bg-transparent' >
                                        {/* <div> */}
                                            <NextUICalendar 
                                                selectedDate={selectedDate}
                                                setSelectedDate={setSelectedDate}
                                                selectedDateTime={selectedDateTime}
                                                setSelectedDateTime={setSelectedDateTime}
                                            />
                                        {/* </div> */}
                                    </PopoverContent>
                                </Popover>
                            </Flex>
                        </Flex>
                    </Box>
                </Box>
                <Divider size={1} color='#57585a'/>
                <div style={{margin: "auto",width: "100%"}}>
                    <Box p='15px 20px' w='100%'>
                        <Flex justify='end' align='center'>
                            <Button bd='1px solid #048369' className='task-card-create-task-button' radius={8} p='0px 12px' bg='#048369' onClick={() => setOpenTaskCreateModal(false)}>
                                <div className='d-flex align-items-center'>
                                    <div style={{marginRight: "5px"}}>
                                        {Icons('IconPlus',14,14,'#fafafa')}
                                    </div>
                                    <span>Create</span>
                                </div>
                            </Button>
                        </Flex>
                    </Box>
                </div>
            </div>
        </Modal>
    );
};

export default TaskCreationModal;