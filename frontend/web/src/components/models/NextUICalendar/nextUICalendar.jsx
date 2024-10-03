import React, { useState } from 'react';

import dayjs from 'dayjs';

import { Box,Flex,Select,Button } from '@mantine/core';
import Icons from '../../icons/icons';

import { parseDate } from '@internationalized/date';
import { Calendar } from "@nextui-org/react";

import { DatePicker as AntDatePicker }  from 'antd';

import './nextUICalendar.css';

const generateTimeIntervals = () => {
    const times = [];
    let start = 0;
    
    for (let i = 0; i < 48; i++) { // 48 intervals in a day (30 minutes each)
        const hours = Math.floor(start / 60);
        const minutes = start % 60;
  
        const formattedTime = `${hours % 12 === 0 ? 12 : hours % 12}:${minutes === 0 ? '00' : minutes} ${hours < 12 ? 'AM' : 'PM'}`;
        times.push(formattedTime);
    
        start += 30; // increment by 30 minutes
    }
    return times;
  };

const NextUICalendar = (props) => {
    const { selectedDate, setSelectedDate,selectedDateTime, setSelectedDateTime } = props;

    const [open, setOpen] = useState(false);

    const handleSelectedDateChange = (date) => {
        if (date === null) {
            setSelectedDate(null);
        } else {
            const updatedDate = dayjs(selectedDate)
            .set('year', dayjs(date).year())
            .set('month', dayjs(date).month())
            .set('date', dayjs(date).date()+1); // Update the date but keep the time intact

            setSelectedDate(updatedDate); // Set the updated date
            console.log(updatedDate);
        }
    }
    const timeOptions = generateTimeIntervals().map((time) => ({ value: time, label: time }));

    const normalizeText = (text) => {
        return text
            .toLowerCase() // Convert to lowercase
            .replace(/\s+/g, '') // Remove all spaces
            .replace(/[^\w]/g, ''); // Remove all non-alphanumeric characters (punctuation, etc.)
    };
      
    const optionsFilter = ({ options, search }) => {
        const normalizedSearch = normalizeText(search);
      
        return options.filter((option) => {
            const normalizedLabel = normalizeText(option.label);
            return normalizedLabel.includes(normalizedSearch);
        });
    };

    const presetOptions = [
        {name: 'Today'},
        {name: 'Tomorrow'},
        {name: 'Next week'},
        {name: 'Next month'},
    ]

    const handleDateTimeChange = (time) => {
        if (time !== null) {
            const [timePart, period] = time.split(' '); // Split by space, giving you "12:30" and "PM"
            const [hour, minute] = timePart.split(':'); // Split the hour and minute by colon

            let parsedHour = parseInt(hour, 10);

            // Adjust hour for AM/PM
            if (period.toLowerCase() === 'pm' && parsedHour < 12) {
                parsedHour += 12; // Convert PM hour to 24-hour format
            } else if (period.toLowerCase() === 'am' && parsedHour === 12) {
                parsedHour = 0; // Midnight case
            }

            // Set the parsed hour and minute into the selected date
            const updatedDateTime = dayjs(selectedDate)
                .set('hour', parsedHour)
                .set('minute', parseInt(minute, 10))
                .set('second',0);

            // console.log(updatedDateTime.format('YYYY-MM-DD HH:mm'));
            setSelectedDate(updatedDateTime);
            setSelectedDateTime(updatedDateTime);
        } else {
            setSelectedDateTime(undefined);
        }
    }
    // console.log(selectedDate);

    return (
        <Box bg='#232426' p='10px 5px' className='nextui-calendar-parent'>
            <Box p='5px 15px'>
                <Flex gap={15} justify='center'>
                    <AntDatePicker 
                        // defaultValue={currentTaskDueDate ? dayjs(currentTaskDueDate) : undefined}
                        value={selectedDate ? dayjs(selectedDate) : undefined}
                        placeholder={'Select date'} 
                        className='user-home-calendar-date-input user-home-calendar-time-picker' 
                        open={open}
                        variant="filled"
                        onClick={() => setOpen(false)} 
                        style={{backgroundColor: "#323539"}} 
                        // onKeyDown={handleDueDateInputChange}
                        format='MM/DD/YYYY' 
                        suffixIcon={Icons('IconCalendarMonth',17,17,'#fafafa')} 
                        onChange={handleSelectedDateChange}
                    />

                    <Select
                        placeholder="Select time"
                        className='date-time-picker-select' 
                        data={timeOptions}
                        // rightSection={
                        //       <IconClock color='white' style={{width: "17px"}} />
                        //   }
                        clearable
                        // rightSection={selectHover && selectedDateTime && selectedDateTime.isValid() ? <IconPlaystationX onClick={(e) => {e.preventDefault(); console.log("close");}} color='white' style={{width: "17px"}} /> : <IconClock color='white' style={{width: "17px"}} />}
                        comboboxProps={{ withinPortal: false }}
                        searchable
                        limit={12}
                        checkIconPosition="right"
                        w='49%'
                        defaultValue={selectedDate ? dayjs(selectedDate).format('h:mm A') : undefined}
                        disabled={!selectedDate}
                        onChange={(time) => handleDateTimeChange(time)}
                        filter={optionsFilter}
                    />
                </Flex>
            </Box>
            <Flex bg='#232426' justify='flex-end'>
                <Flex gap={30} justify='center' direction='column'>
                    {presetOptions.map((preset) => (
                        <Button radius={4} key={preset.name} className='preset-button' >
                            {preset.name}
                        </Button>
                    ))}
                </Flex>

                <Calendar style={{background: "#232426"}} 
                    disableAnimation
                    className='calendar'
                    selected={selectedDate ? selectedDate.toDate() : undefined} 
                    onChange={handleSelectedDateChange} 
                    // defaultValue={selectedDate && selectedDate.isValid() ? parseDate(`${selectedDate.year()}-${String(selectedDate.month() + 1).padStart(2, '0')}-${String(selectedDate.date()).padStart(2, '0')}`) : undefined}
                    value={selectedDate && selectedDate.isValid() && parseDate(`${selectedDate.year()}-${String(selectedDate.month() + 1).padStart(2, '0')}-${String(selectedDate.date()).padStart(2, '0')}`)}
                />
            </Flex>
        </Box>
        // </div>
    );
};

export default NextUICalendar;