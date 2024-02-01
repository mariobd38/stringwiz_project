import React from 'react';

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

import './priorityDropdown.css';

const PriorityDropdown = (props) => {
    return (
        <ul className="dropdown-menu mt-1 user-home-task-details-modal-priority-menu-item">
            <li className='user-home-task-details-modal-priority-menu-item'>
                <button className="dropdown-item" type="button">
                    <span className='d-flex align-items-center'><RadioButtonCheckedIcon className='me-2' style={{color: "#c90825"}}/>
                        Urgent
                        {
                            props.currentTaskPriority === 'Urgent' && <CheckRoundedIcon  className='ms-auto'/>
                        }
                    </span>
                </button>
            </li>
            <li className='user-home-task-details-modal-priority-menu-item'>
                <button class="dropdown-item" type="button">
                    <span className='d-flex align-items-center'><RadioButtonCheckedIcon className='me-2' style={{color: "gold"}}/>
                        High
                        {
                        props.currentTaskPriority === 'High' && <CheckRoundedIcon  className='ms-auto'/>
                        }
                    </span>
                </button>
            </li>
            <li className='user-home-task-details-modal-priority-menu-item'>
                <button class="dropdown-item" type="button">
                    <span className='d-flex align-items-center'><RadioButtonCheckedIcon className='me-2' style={{color: "#222fe3"}}/>
                        Normal
                        {
                        props.currentTaskPriority === 'Normal' && <CheckRoundedIcon  className='ms-auto'/>
                        }
                    </span>
                </button>
            </li>
            <li className='user-home-task-details-modal-priority-menu-item'>
                <button class="dropdown-item" type="button">
                    <span className='d-flex align-items-center'><RadioButtonCheckedIcon className='me-2' style={{color: "#999999"}}/>
                        Low
                        {
                        props.currentTaskPriority === 'Low' && <CheckRoundedIcon  className='ms-auto'/>
                        }
                    </span>
                </button>
            </li>
        </ul>
    );
};

export default PriorityDropdown;