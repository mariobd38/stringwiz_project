import React from 'react';

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

import './statusDropdown.css';

const StatusDropdown = (props) => {
    return (
        <ul className="dropdown-menu mt-1 user-home-task-details-modal-status-menu-item">
            <div className='d-flex align-items-center' style={{borderBottom: "1px solid #898989"}}>
                <form className="user-home-task-details-modal-status-search me-3 ms-1" role="search">
                    <input
                        className="form-control user-home-task-details-modal-status-search-input me-2"
                        type="text"
                        placeholder="Search"                                                
                        aria-label="Search"
                    />
                </form>
            </div>

            <li className='user-home-task-details-modal-status-menu-item'>
                <button className="dropdown-item" type="button">
                    <span className='d-flex align-items-center'><RadioButtonCheckedIcon className='me-2' style={{color: "#898989"}}/>
                    To Do
                    {
                        props.currentTaskStatus === 'To Do' && <CheckRoundedIcon  className='ms-auto'/>
                    }
                    </span>
                </button>
            </li>
            <li className='user-home-task-details-modal-status-menu-item d-flex align-items-center'>
            <button class="dropdown-item" type="button">
                    <span className='d-flex align-items-center'><RadioButtonCheckedIcon className='me-2' style={{color: "#6e34da"}}/>
                        In Progress
                        {
                        props.currentTaskStatus === 'In Progress' && <CheckRoundedIcon  className='ms-auto'/>
                        }
                    </span>
                </button>
            </li>
            <li className='user-home-task-details-modal-status-menu-item'>
            <button class="dropdown-item" type="button">
                    <span className='d-flex align-items-center'><RadioButtonCheckedIcon className='me-2' style={{color: "#198a17"}}/>
                        Completed
                        {
                        props.currentTaskStatus === 'Completed' && <CheckRoundedIcon  className='ms-auto'/>
                        }
                    </span>
                </button>
            </li>
        </ul>
    );
};

export default StatusDropdown;