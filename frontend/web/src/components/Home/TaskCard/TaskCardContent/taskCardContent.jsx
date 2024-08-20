import React, { useState } from 'react';

import { Link, useLocation } from 'react-router-dom';
 
import dayjs from 'dayjs';

import { Tooltip,Accordion, Table, Center, Text } from '@mantine/core';
import {
    IconChevronDown,IconCircle,IconCircleCheck,IconCalendarMonth,IconCircleCheckFilled,IconFlag3Filled,IconLoader,IconUser,IconTrash
  } from '@tabler/icons-react';

import NewHomeDueDatePopover from '../../newHomeDueDatePopover';
import { MantineDropdown } from '../../../models/ModelDropdown2/mantineDropdown';
import PriorityDropdownContent from '../../DropdownContent/priorityDropdownContent';
import StatusDropdownContent from '../../DropdownContent/statusDropdownContent';

import './taskCardContent.css';

const TaskCardContent = (props) => {
    const {today,taskType,taskTypeObj,currentTaskDueDate, currentTaskDueDateTime, currentIndex, setCurrentIndex, setCurrentTaskDueDate,
        setCurrentTaskDueDateTime, getTagInfo,setCurrentTaskTags,setModalShow,setCurrentTaskName,setCurrentTaskCreationDate,setCurrentTaskDescription,
        setCurrentTaskLastUpdatedOn,setCurrentTaskStatus,setCurrentTaskPriority,handleTaskComplete,dueDatePopoverIsOpen,setDueDatePopoverIsOpen,
        setTaskType,isTaskTabCompleted, setCurrentTaskDescriptionHtml,handleTaskUpdateNew
    } = props;

    const location = useLocation();

    const handleDueDatePopoverClick = (event,index,task) => {
        setCurrentIndex(index);
        setCurrentTaskDueDate(task.dueDate);
        setCurrentTaskDueDateTime(task.dueDateTime);
        //setDueDatePopoverIsOpen(!dueDatePopoverIsOpen); //todo
    };

    const OpenTaskDetailsModal = async (event, taskType,index) => {
        try {
            const currentTags = await getTagInfo(taskType[index].id);
            setTaskType(taskType);
            setCurrentTaskTags(currentTags);
            setCurrentTaskName(taskType[index].name);
            setCurrentTaskCreationDate(taskType[index].createdOn);
            setCurrentTaskLastUpdatedOn(taskType[index].lastUpdatedOn);
            setCurrentTaskDescription(taskType[index].description);
            setCurrentTaskDescriptionHtml(taskType[index].descriptionHtml);
            setCurrentTaskDueDate(taskType[index].dueDate);
            setCurrentTaskDueDateTime(taskType[index].dueDateTime);
            setCurrentTaskStatus(taskType[index].status);
            setCurrentTaskPriority(taskType[index].priority);
            setCurrentIndex(index);
            setModalShow(true);
        } catch(error) {
            console.error('Error opening task details modal:', error);
        }
    }
    
    const formatDate = (dateString) => {
        const dueDateDiffFromToday = dayjs(dateString).startOf('day').diff(dayjs(today).startOf('day'), 'day');

        if (dueDateDiffFromToday < 6) {
            if (dueDateDiffFromToday < 0)
                return `${dayjs(dateString).format('MMMM D')}`;
            if (dueDateDiffFromToday === 0)
                return 'Today';
            if (dueDateDiffFromToday === 1)
                return 'Tomorrow';
            return `${dayjs(dateString).format('dddd')}`;
        }

        if (dayjs(dateString).year() === dayjs().year()) {
            return `${dayjs(dateString).format('MMM D')}`;
        } else {
            return `${dayjs(dateString).format('MMM D, YYYY')}`;
        }
    };
      
    const [hoveredTableCellIndex, setHoveredTableCellIndex] = useState(null);

    const handleTableCellMouseEnter = (index) => {
        setHoveredTableCellIndex(index);
    };

    const handleTableCellMouseLeave = () => {
        setHoveredTableCellIndex(null);
    };


    const [openMenuRowIndex, setOpenMenuRowIndex] = useState(null);
    const [activeTaskType, setActiveTaskType] = useState(null);


    const handleMenuToggle = (isOpened, rowIndex) => {
        if (isOpened) {
            setOpenMenuRowIndex(rowIndex);
        } else {
            setOpenMenuRowIndex(null);
        }
    };


    const rows = (taskTypeName,taskType) => {
        return taskType.map((element, index) => (
          <Table.Tr key={index} className='table-row-dark' bd='none'>
            <Table.Td className={`d-flex align-items-center justify-content-between table-cell ${taskTypeName === activeTaskType && openMenuRowIndex === index ? 'active' : ''}`}
            onClick={() => {
                setActiveTaskType(taskTypeName);
            }}
            >
              <div className='d-flex justify-content-between w-100 align-items-center'>
                <div className="d-flex" style={{ color: "#fafafa" }}>
                  <div className='align-items-center d-flex'>
                    {isTaskTabCompleted ?
                      <IconCircleCheckFilled
                        onClick={(event) => handleTaskComplete(event, index,taskType)}
                        style={{ color: "#048a66" }}
                        className='user-home-task-check-icon user-home-task-set-complete'
                      />
                      : hoveredTableCellIndex === index ? (
                        <IconCircleCheck
                          width={16}
                          onClick={(event) => handleTaskComplete(event, index,taskType)}
                          className="user-home-task-set-complete"
                          onMouseLeave={handleTableCellMouseLeave}
                        />
                      ) : (
                        <IconCircle
                          onClick={(event) => handleTaskComplete(event, index,taskType)}
                          width={16}
                          className="user-home-task-set-complete"
                          onMouseEnter={() => handleTableCellMouseEnter(index)}
                        />
                      )
                    }
                  </div>
                  <Link className='ps-2' to={{ pathname: '/home/modal' }} state={{ background: location }} onClick={(e) => OpenTaskDetailsModal(e, taskType, index)}>
                    <div style={{ outline: "none" }}>
                      <button className='task-name-link'>
                        <span className={`ps-2 taskName-text`}>
                          {element.name}
                        </span>
                      </button>
                    </div>
                  </Link>
                </div>


                <div className='d-flex gap-2'>
                    <span className='table-cell-icon' >
                            <Tooltip label="Delete task" position="top" offset={8} withArrow openDelay={400} className='fafafa-color lato-font'
                            style={{ backgroundColor: "#338b6f", borderRadius: "6px" }}>
                                <div className='user-home-calendar-icon-div'>
                                    <IconTrash className='user-home-calendar-icon' />
                                </div>
                            </Tooltip>
                        
                        </span>
                        <span className='table-cell-icon'>
                            <Tooltip label="Change assignee" position="top" offset={8} withArrow openDelay={400} className='fafafa-color lato-font'
                            style={{ backgroundColor: "#338b6f", borderRadius: "6px" }}>
                                <div className='user-home-calendar-icon-div'>
                                    <IconUser className='user-home-calendar-icon' />
                                </div>
                            </Tooltip>
                        </span>

                        <span className='table-cell-icon'>
                            <MantineDropdown 
                                target={
                                    <Tooltip label="Set status" position="top" offset={8} withArrow openDelay={400} className='fafafa-color lato-font'
                                    style={{ backgroundColor: "#338b6f", borderRadius: "6px" }}>
                                        <div className='user-home-calendar-icon-div'>
                                            <IconLoader className='user-home-calendar-icon' />
                                        </div>
                                    </Tooltip>
                                }
                                width={190} dropdown={<StatusDropdownContent element={element} handleTaskUpdateNew={handleTaskUpdateNew} taskType={taskType} setTaskType={setTaskType} idx={index}/> }
                                rowIndex={index} onMenuToggle={handleMenuToggle} position='bottom-end'
                            />
                        </span>

                        <span className='table-cell-icon'>
                            <MantineDropdown 
                                target={
                                    <Tooltip label="Set priority" position="top" offset={8} withArrow openDelay={400} className='fafafa-color lato-font'
                                    style={{ backgroundColor: "#338b6f", borderRadius: "6px" }}>
                                        <div className='user-home-calendar-icon-div'>
                                            <IconFlag3Filled className='user-home-calendar-icon' />
                                        </div>
                                    </Tooltip>
                                }
                                width={210} dropdown={<PriorityDropdownContent element={element} handleTaskUpdateNew={handleTaskUpdateNew} taskType={taskType} setTaskType={setTaskType} idx={index} /> }
                                rowIndex={index} onMenuToggle={handleMenuToggle} position='bottom-end'
                            />
                        </span>

                        <NewHomeDueDatePopover
                            popoverTarget={

                            <>{element.dueDate &&
                                <span style={{ color: "#a7a7a7" }} className={`lato-font, user-home-chosen-due-date-text`}>
                                        <span style={{ color: dayjs(element.dueDate).startOf('day').diff(dayjs(today).startOf('day'), 'day') < 0 ? "#e10845cf" : "#e5e5e5" }} 
                                        >
                                        {formatDate(element.dueDate)}
                                    </span>
                                </span>}

                                <span className='table-cell-icon'>
                                    <Tooltip label="Add due date" position="top" offset={8} withArrow openDelay={400} className='fafafa-color lato-font'
                                    style={{ backgroundColor: "#338b6f", borderRadius: "6px" }}>
                                        <div className='user-home-calendar-icon-div' onClick={(event) => handleDueDatePopoverClick(event, index,element)}>
                                            <IconCalendarMonth className='user-home-calendar-icon' />
                                        </div>
                                    </Tooltip>
                                </span>
                            </>} 

                            currentTaskDueDate={currentTaskDueDate} setCurrentTaskDueDate={setCurrentTaskDueDate}
                            currentTaskDueDateTime={currentTaskDueDateTime} setCurrentTaskDueDateTime={setCurrentTaskDueDateTime}
                            today={today} dueDatePopoverIsOpen={dueDatePopoverIsOpen} setDueDatePopoverIsOpen={setDueDatePopoverIsOpen}
                            currentIndex={currentIndex} taskType={taskType} setTaskType={setTaskType}
                        />
                </div>
              </div>
            </Table.Td>
          </Table.Tr>
        ));
      };

    const ongoingAccordion = taskTypeObj && [
        {
            title: 
            <> {taskTypeObj &&
                <Text className='d-flex' c='#f5f6f9' ff='Nunito Sans'>Today<Text ms={20}  c='#959699'>{taskTypeObj["todaysTasks"].length}</Text></Text>
                }
            </>,
            description:
            <>
            {taskTypeObj &&
            <Table bd='none'>
                <Table.Tbody bd='0px'>{rows('todaysTasks',taskTypeObj["todaysTasks"])}</Table.Tbody>
            </Table>}
            </>
        },
        
        {
            title: <> {taskTypeObj &&
                <Text className='d-flex' c='#f5f6f9' ff='Lato'>Upcoming<Text ms={20} c='#959699' >{taskTypeObj["ongoingTasks"].length}</Text></Text>
                }
            </>,
            description:
            <>
            <Table bd='none'>
                <Table.Tbody bd='0px'>{rows('ongoingTasks',taskTypeObj["ongoingTasks"])}</Table.Tbody>
            </Table>
            </>
            ,
        },
        {
            title: <> {taskTypeObj &&
                <Text className='d-flex' c='#f5f6f9' ff='Nunito Sans'>Unscheduled<Text ms={20}  c='#959699'>{taskTypeObj["unscheduledTasks"].length}</Text></Text>
                }
            </>,
            description:
            <>
            <Table bd='none'>
                <Table.Tbody bd='0px'>{rows('unscheduledTasks',taskTypeObj["unscheduledTasks"])}</Table.Tbody>
            </Table>
            </>
        },
      ];

    const [chevronRotations, setChevronRotations] = useState({});
    const handleAccordionChange = (value) => {
        setChevronRotations((prevRotations) => {
        const newRotations = { ...prevRotations };
        value.forEach((item) => {
            if (newRotations[item]) {
            newRotations[item] = false;
            } else {
            newRotations[item] = true;
            }
        });
        return newRotations;
        });
    };

    const items = taskTypeObj && ongoingAccordion.map((item, index) => (
        <Accordion.Item
          key={index} // Use index as a key if titles are not unique
          value={`accordion-item-${index}`} // Ensure a unique string value for each item
          bd="none"
          m="20px 10px"
        >
            <Center w="max-content">
                <Accordion.Control
                chevron={
                    <IconChevronDown
                    style={{
                        transform: chevronRotations[`accordion-item-${index}`] ? 'rotate(-90deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                    }}
                    />
                }
                onClick={() => handleAccordionChange([`accordion-item-${index}`])}
                c="#d6d7d9"
                className="task-card-content-accordion"
                icon={item.title}
                />
            </Center>
            <Accordion.Panel className="task-card-content-accordion-panel" c="#d6d7d9" ff="Lato" w="100%">
                {item.description}
            </Accordion.Panel>
        </Accordion.Item>
      ));

    return (
        <>
            {taskTypeObj ? (
                <Accordion defaultValue={['accordion-item-0', 'accordion-item-1', 'accordion-item-2']} disableChevronRotation multiple chevronPosition="left" w="100%" p={0}>
                    {items}
                </Accordion>
                ) : (
                <Table bd="none">
                    <Table.Tbody bd="0px">
                        {rows(null,taskType)}
                    </Table.Tbody>
                </Table>
            )}
        </>
      );
};

export default TaskCardContent;