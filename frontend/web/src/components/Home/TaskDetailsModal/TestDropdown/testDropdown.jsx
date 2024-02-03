import { useState } from "react";

import { ClickAwayListener } from '@mui/base/ClickAwayListener';

import ChecklistRtlRoundedIcon from '@mui/icons-material/ChecklistRtlRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import RadioButtonCheckedRoundedIcon from '@mui/icons-material/RadioButtonCheckedRounded';
import SettingsIcon from '@mui/icons-material/Settings';

import "./testDropdown.css";

const MenuButton = ({name,icon,index, onClick}) => {
    return (
        <button onClick={() => (onClick ? onClick(index) : null)} className="model-dropdown-item-menu-button">
        <span className="model-dropdown-current-icon">{icon}</span>
        {name}
        </button>
    );
};

const MenuItem = ({ name, index, icon, onClick }) => {
    return (
        <>
            <MenuButton
                onClick={onClick}
                icon={icon}
                name={name}
                index={index}
            />
        </>
    );
};

export const TestDropdown = (props) => {
    const items = [
        {
            name: props.name1,
            icon: props.icon1
        },
        {
            name: props.name2,
            icon: props.icon2
        },
        {
            name: props.name3,
            icon: props.icon3
        },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [currentItemName, setCurrentItemName] = useState('Task');
    const [currentItemIcon, setCurrentItemIcon] = useState(<ChecklistRtlRoundedIcon />);

    const handleMenuItemClick = (item) => {
        console.log(item);
        setCurrentItemName(item.name);
        setCurrentItemIcon(item.icon);
        // console.log(index);
        setIsOpen(!isOpen);
    }

    const handleNewTaskClickAway = () => {
        console.log("clicked away");
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`dropdown ${isOpen ? "open" : ""}`}
        >

            <button className={`selected-item-btn ${props.hasArrow ? '' : 'pe-3'}`} onClick={() => setIsOpen(!isOpen)} >
                <span className={`model-dropdown-current-icon`}> {currentItemIcon} </span>
                {currentItemName}
                {
                    props.hasArrow &&
                    <span className="model-dropdown-arrow-icon"> <KeyboardArrowDownRoundedIcon /> </span>
                }
            </button>

            <div className="modal-dropdown-menu">
                <div>hry</div>
            {/* <ClickAwayListener onClickAway={handleNewTaskClickAway}> */}
                <div>
                {items.map((item, index) => (

                    <MenuItem
                        key={item.name}
                        name={item.name}
                        icon={item.icon}
                        index={index}
                        onClick={() => handleMenuItemClick(item)}
                        onHide={() => setIsOpen(!isOpen)}
                    />

                ))}
                </div>
                    {/* </ClickAwayListener> */}

            </div>

        </div>
    );
};