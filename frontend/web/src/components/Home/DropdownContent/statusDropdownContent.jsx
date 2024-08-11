import React from 'react';

import { Menu,rem } from '@mantine/core';
import {
    IconCheck,IconLoader,IconLoaderQuarter,IconCircleCheckFilled
  } from '@tabler/icons-react';

const statusItems = [
    {icon: <IconCircleCheckFilled style={{ width: rem(14), height: rem(14) }} />, name: 'Completed'},
    {icon: <IconLoader style={{ width: rem(14), height: rem(14) }} />, name: 'In Progress'},
    {icon: <IconLoaderQuarter style={{ width: rem(14), height: rem(14) }} />, name: 'To Do'},
];

const StatusDropdownContent = (props) => {
    const {element,handleTaskUpdateNew, taskType,setTaskType,idx } = props;

    return (
        <>
            <div className='d-flex align-items-center' style={{borderBottom: "1px solid #898989"}}>
                <form className="model-dropdown-search" role='search' onSubmit={(event) => {event.preventDefault(); return false;}}>
                    <input
                        className="form-control model-dropdown-search-input me-2"
                        type="text"
                        placeholder={`Search`}                                               
                        aria-label="Search"
                        // onChange={isTagDropdown ? handleTagSearch : undefined}
                        // onKeyDown={isTagDropdown ? handleTagSearch : undefined}
                        // value={isTagDropdown ? tagInputValue : ''}
                    />
                </form>
            </div> 
            {statusItems.map((item, index) => (
                
                <Menu.Item
                    onClick={() => handleTaskUpdateNew(element,item.name, 'status', taskType,setTaskType,idx)}
                    key={index}
                    className='task-card-content-dropdown-item'
                    leftSection={item.icon}
                    rightSection={element.status === item.name && <IconCheck style={{ color: "teal" }} />}
                >
                    {item.name}
                </Menu.Item>
            ))}
        </>
    );
};

export default StatusDropdownContent;