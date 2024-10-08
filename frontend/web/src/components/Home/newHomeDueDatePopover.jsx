import React, { useMemo } from 'react';

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import { Popover } from 'antd';

import NextUICalendar from '../models/NextUICalendar/nextUICalendar';

import './newHomeDueDatePopover.css';

const NewHomeDueDatePopover = (props) => {

    const {popoverTarget, currentTaskDueDate, setCurrentTaskDueDate, currentTaskDueDateTime, setCurrentTaskDueDateTime,
        currentIndex,taskType,setTaskType, dueDatePopoverIsOpen, setDueDatePopoverIsOpen,handleTaskUpdateNew} = props;

    dayjs.extend(customParseFormat);
    const dateFormatList = ['YYYY-MM-DD', 'M-D-YY', 'M-D-YYYY', 'MM-DD-YY', 'MM-DD-YYYY'];

    const content = (
        <NextUICalendar 
            selectedDate={currentTaskDueDate}
            setSelectedDate={setCurrentTaskDueDate}
            selectedDateTime={currentTaskDueDateTime}
            setSelectedDateTime={setCurrentTaskDueDateTime}
            handleTaskUpdateNew={handleTaskUpdateNew}
            taskType={taskType}
            currentIndex={currentIndex}
            setTaskType={setTaskType}
        />
    );

    const mergedArrow = useMemo(() => {
        return false;
    }, []);
    
    return (
        <div>
            <Popover arrow={mergedArrow} content={content} trigger="click" opened={dueDatePopoverIsOpen} onOpenChange={() => setDueDatePopoverIsOpen((o) => !o)}
            className='h-100'
            style={{borderRadius: "10px",backgroundColor: "#222529", border: "none", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)" }}>
                {popoverTarget}
            </Popover>
        </div>
    );
};

export default NewHomeDueDatePopover;