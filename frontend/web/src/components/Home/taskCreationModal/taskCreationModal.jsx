import React, { useState, useRef, useEffect } from 'react';

import dayjs from 'dayjs';

import { Modal } from "antd";

import { Text,Textarea,Button,Box,Flex,Divider } from '@mantine/core';
import { Popover, PopoverContent, PopoverTrigger,Calendar} from "@nextui-org/react";

import {
    IconPlus,IconCalendarMonth,IconFlag3,IconCalendarDue,IconUser,IconLoader } from '@tabler/icons-react';

import {parseDate} from '@internationalized/date';

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
    
    const [selectedDate, setSelectedDate] = useState(dayjs()); // Initialize with current date using Day.js

    const handleDateChange = (newDate) => {
        setSelectedDate(dayjs(newDate).add(1, 'day')); // Update the date using Day.js
    };

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
                                    <IconUser width={14} color='#e0e2e6' />
                                    <Text ms='8' ff='Inter' fz='12.5' c='#e0e2e6'>Assignee</Text>
                                </Button>
                                {/* <Button radius={5} h='30' p='0 8px' bg='transparent' bd='.1px solid #048369'>
                                    <IconLoader width={14} color='#e0e2e6' />
                                    <Text ms='8' ff='Inter' fz='12.5' c='#e0e2e6'>Status</Text>
                                </Button> */}

                                <MantineDropdown 
                                    target={
                                        <Button c='#e0e2e6' radius={5} h='30' p='0 8px' bg='transparent' bd='.1px solid #048369'>
                                            <IconLoader width={14} />
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
                                            <IconFlag3 width={14} color={newTaskPriority ? getPriorityProperty(newTaskPriority).icon.props.style.color : '#e0e2e6'}/>
                                            <Text ms='8' ff='Inter' fz='12.5' >{newTaskPriority ? newTaskPriority : 'Priority'}</Text>
                                        </Button>
                                    }
                                    width={180} 
                                    dropdown={<PriorityDropdownContent element={newTaskPriority} setCurrentTaskPriority={setNewTaskPriority} existingTask={false}/> }
                                    position='bottom-start'
                                />
                                {/* <Menu position='bottom-start'>
                                    <Menu.Target>
                                        <Button radius={5} h='30' p='0 8px' bg='transparent' bd='.1px solid #048369'>
                                            <IconFlag3 width={14} color='#e0e2e6' />
                                            <Text ms='8' ff='Inter' fz='12.5' c='#e0e2e6'>{newTaskPriority ? newTaskPriority : 'Priority'}</Text>
                                        </Button>
                                    </Menu.Target>

                                    <Menu.Dropdown style={{zIndex: "1001",boxShadow: "0 14px 28px rgba(0, 0, 0, 0.35)"}} bg='#232527' bd='none' w={190}>
                                    {itemsToRender.map((item, index) => (
                                        <React.Fragment key={index}>
                                            {index === itemsToRender.length - 1 && itemsToRender.priority && <Divider my="xs" color='grey' />}
                                            <Menu.Item
                                                onClick={() => {
                                                    setNewTaskPriority && setNewTaskPriority(item.name === 'None' ? null : item.name)
                                                }}
                                                
                                                bg='#232527'
                                                className='task-card-content-dropdown-item'
                                                leftSection={item.icon}
                                                rightSection={newTaskPriority === item.name && <IconCheck color='teal' width={20} height={20} className='m-0'/>}
                                            >
                                                {item.name}
                                            </Menu.Item>
                                        </React.Fragment>
                                    ))}
                                </Menu.Dropdown>
                                    
                                </Menu>  */}
                                <Popover placement="bottom">
                                    <PopoverTrigger >
                                        <Button fw={300} c='#e0e2e6' className='nextui-calendar-popover-trigger-button' radius={5} h='30' p='0 8px' bg='transparent' bd='.1px solid #048369' >
                                            <IconCalendarMonth width={14} />
                                            <Text ms='8' ff='Inter' fz='12.5' >{selectedDate && selectedDate.isValid() ? selectedDate.format('MMM D') : 'Due Date'}</Text>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className='p-0 bg-transparent' >
                                        {/* <div> */}
                                            <NextUICalendar 
                                                selectedDate={selectedDate}
                                                setSelectedDate={setSelectedDate}
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
                                <IconPlus width={14} style={{marginRight: "5px"}}/>Create
                            </Button>
                        </Flex>
                    </Box>
                </div>
            </div>
        </Modal>
    );
};

export default TaskCreationModal;