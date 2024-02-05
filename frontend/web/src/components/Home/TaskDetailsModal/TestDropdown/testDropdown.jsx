import { useState, useRef } from "react";
import { useClickAway } from 'react-use';

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import TourRoundedIcon from '@mui/icons-material/TourRounded';

import "./testDropdown.css";

const MenuButton = ({name,icon,isActualOption,hasItemTypesOption,index,currentItemName, onClick}) => {
    return (
        <button onClick={() => (onClick ? onClick(index) : null)} 
            className={`model-dropdown-item-menu-button ${hasItemTypesOption ? 'model-dropdown-item-menu-button-wTypeOption' : ''}`}>
            <span className="model-dropdown-current-icon">{icon}</span>
            {name} 
            {isActualOption && currentItemName === name && <CheckRoundedIcon className="ms-auto"/>}
        </button>
    );
};

const MenuItem = ({ name, index, icon, isActualOption, hasItemTypesOption, currentItemName, onClick }) => {
    return (
        <>
            <MenuButton
                onClick={onClick}
                icon={icon}
                name={name}
                isActualOption={isActualOption}
                hasItemTypesOption={hasItemTypesOption}
                index={index}
                currentItemName={currentItemName}
            />
        </>
    );
};

export const TestDropdown = (props) => {
    const { items, 
        hasItemTypesOption, hasArrow, hasHeaderDescText, hasSearchBar,
        initialNameValue, initialIconValue, isPriorityDropdown } = props;

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState({ name: initialNameValue, icon: initialIconValue });

    const handleMenuItemClick = (item) => {
        setCurrentItem(item);
        setIsDropdownOpen(!isDropdownOpen);
    }

    const handleOpenDropdownMenu = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }
    
    const ref = useRef(null);
    useClickAway(ref, () => isDropdownOpen && setIsDropdownOpen(!isDropdownOpen));

    return (
        <span
            className={`dropdown ${isDropdownOpen ? "open" : ""}`} ref={ref}
        >
            {
            initialNameValue ?
            <button className={`selected-item-btn ${hasArrow ? '' : 'pe-3'}`} onClick={handleOpenDropdownMenu} >
                <span className={`model-dropdown-current-icon`}> {currentItem.icon} </span>
                {currentItem.name}
                {
                    hasArrow &&
                    <span className="model-dropdown-arrow-icon"> <KeyboardArrowDownRoundedIcon /> </span>
                }
            </button> :
            <button  className="user-home-task-details-modal-no-priority-btn" onClick={handleOpenDropdownMenu}>
                <TourRoundedIcon />
            </button>
            }

            <div className="model-dropdown-menu" ref={ref} >
                {hasHeaderDescText &&
                <p className="m-0 pt-2 ps-2 pb-1 model-dropdown-desc-text">select the item type</p>
                }

                {hasSearchBar &&
                <div className='d-flex align-items-center' style={{borderBottom: "1px solid #898989"}}>
                    <form className="model-dropdown-search " role="search">
                        <input
                            className="form-control model-dropdown-search-input me-2"
                            type="text"
                            placeholder="Search"                                                
                            aria-label="Search"
                        />
                    </form>
                </div>}
                
                <div>
                    {items.map((item, index) => (
                        <MenuItem
                            key={item.name}
                            name={item.name}
                            icon={item.icon}
                            isActualOption={item.isActualOption}
                            hasItemTypesOption={hasItemTypesOption}
                            index={index}
                            currentItemName={currentItem.name}
                            onClick={() => handleMenuItemClick(item)}
                            onHide={() => setIsDropdownOpen(!isDropdownOpen)}
                        />
                    ))}
                </div>

            </div>
        </span>
    );
};