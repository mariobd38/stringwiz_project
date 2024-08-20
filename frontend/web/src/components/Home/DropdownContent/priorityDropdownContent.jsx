import React from 'react';

import { Menu,rem,Divider } from '@mantine/core';
import { IconCheck,IconFlag3Filled,IconCancel } from '@tabler/icons-react';

import './dropdownContent.css';

const priorityItems = [
    {icon: <IconFlag3Filled style={{ width: rem(14), height: rem(14),color: '#bf1212' }} />, name: 'Critical'},
    {icon: <IconFlag3Filled style={{ width: rem(14), height: rem(14),color: '#26a9dc' }} />,name: 'High'},
    {icon: <IconFlag3Filled style={{ width: rem(14), height: rem(14),color: 'yellow' }} />,name: 'Medium'},
    {icon: <IconFlag3Filled style={{ width: rem(14), height: rem(14),color: 'gray' }} />, name: 'Low'},
    {icon: <IconCancel style={{ width: rem(14), height: rem(14),color: '#fafafa' }} />, name: 'None'},
];

const PriorityDropdownContent = (props) => {
    const {element,handleTaskUpdateNew, taskType,setTaskType,idx,setCurrentTaskPriority } = props;
    const itemsToRender = element.priority 
        ? priorityItems 
        : priorityItems.slice(0, 4);

    return (
        <>
            {itemsToRender.map((item, index) => (
                <React.Fragment key={index}>
                    {index === itemsToRender.length - 1 && element.priority && <Divider my="xs" color='grey' />}
                    <Menu.Item
                        onClick={() => {
                            handleTaskUpdateNew(element, item.name, 'priority', taskType, setTaskType, idx);
                            setCurrentTaskPriority && setCurrentTaskPriority(item.name === 'None' ? null : item.name);
                        }}
                        className='task-card-content-dropdown-item'
                        leftSection={item.icon}
                        rightSection={element.priority === item.name && <IconCheck style={{ color: "teal" }} />}
                    >
                        {item.name}
                    </Menu.Item>
                </React.Fragment>
            ))}
        </>
    );
};

export default PriorityDropdownContent;