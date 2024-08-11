import React from 'react';

import { Menu,rem } from '@mantine/core';
import {
    IconCheck,IconFlag3Filled
  } from '@tabler/icons-react';

const priorityItems = [
    {icon: <IconFlag3Filled style={{ width: rem(14), height: rem(14),color: 'red' }} />, name: 'Critical'},
    {icon: <IconFlag3Filled style={{ width: rem(14), height: rem(14),color: '#26a9dc' }} />,name: 'High'},
    {icon: <IconFlag3Filled style={{ width: rem(14), height: rem(14),color: 'yellow' }} />,name: 'Medium'},
    {icon: <IconFlag3Filled style={{ width: rem(14), height: rem(14),color: 'gray' }} />, name: 'Low'},
];
const PriorityDropdownContent = (props) => {
    const {element,handleTaskUpdateNew, taskType,setTaskType,idx } = props;

    return (
        <>
            {priorityItems.map((item, index) => (
                <Menu.Item
                    onClick={() => handleTaskUpdateNew(element,item.name, 'priority', taskType,setTaskType,idx)}
                    key={index}
                    className='task-card-content-dropdown-item'
                    leftSection={item.icon}
                    rightSection={element.priority === item.name && <IconCheck style={{ color: "teal" }} />}
                >
                    {item.name}
                </Menu.Item>
            ))}
        </>
    );
};

export default PriorityDropdownContent;