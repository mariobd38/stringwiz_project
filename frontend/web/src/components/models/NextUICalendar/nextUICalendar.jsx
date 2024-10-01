import React, { useState } from 'react';

import dayjs from 'dayjs';

import { Box,Flex,Select,Popover,Button } from '@mantine/core';
import { IconClock,IconCalendarMonth
 } 
from '@tabler/icons-react';

import { parseDate } from '@internationalized/date';
import { Calendar,DatePicker } from "@nextui-org/react";

import { DatePicker as AntDatePicker }  from 'antd';

import './nextUICalendar.css';

const generateMinuteIntervals = () => {
    const intervals = [];
    let currentTime = dayjs().startOf('day'); // Start at 12:00 AM
  
    while (currentTime.isBefore(dayjs().endOf('day'))) {
      intervals.push(currentTime.format('h:mm A')); // Use 'h:mm A' for no leading zero in hour
      currentTime = currentTime.add(1, 'minute');
    }
  
    return intervals;
};

const NextUICalendar = (props) => {
    const { selectedDate, setSelectedDate } = props;

    const [open, setOpen] = useState(false);

    const handleSelectedDateChange = (date) => {
        console.log(date);
        if (date === null) {
            setSelectedDate(null);
        } else {
            setSelectedDate(dayjs(date).add(1, 'day'));
        }
    }
    const timeOptions = generateMinuteIntervals().map((time) => ({ value: time, label: time }));

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
                        suffixIcon={<IconCalendarMonth style={{width: "17px"}}/>} 
                        onChange={handleSelectedDateChange}
                    />

                    <Select
                        placeholder="Select time"
                        className='date-time-picker-select' 
                        data={timeOptions}
                        rightSection={<IconClock style={{width: "17px"}} />}
                        comboboxProps={{ withinPortal: false }}
                        searchable
                        limit={12}
                        checkIconPosition="right"
                        w='49%'
                        disabled={!selectedDate}
                        filter={optionsFilter}
                    />
                    {/* <Popover width={300} position="bottom-end" shadow="md" clickOutsideEvents={['mouseup', 'touchend']} closeOnClickOutside={false}>
                        <Popover.Target>
                            <Button>Toggle popover</Button>
                        </Popover.Target>
                        <Popover.Dropdown style={{zIndex: "100000"}} p={0} w='fit-content' closeOnClickOutside={false}>
                            <Select
                            onClick={(e) => {e.stopPropagation(); e.preventDefault(); console.log("hello");}}
                            placeholder="Pick value"
                            data={['React', 'Angular', 'Vue', 'Svelte']}
                            comboboxProps={{ withinPortal: false }}
                            />
                        </Popover.Dropdown>
                    </Popover> */}
                </Flex>
            </Box>
            <Flex bg='#232426' justify='flex-end'>
                <Flex gap={30} justify='center' direction='column'>
                    {presetOptions.map((preset) => (
                        <Button radius={8} key={preset.name} w='68' h='30' p='0 8px' fz='12.1' fw='400' c='#d6d7da' bg='#323539' bd='.1px solid #525559'>
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