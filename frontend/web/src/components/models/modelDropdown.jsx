import { useState, useRef } from "react";
import { useClickAway } from 'react-use';

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import TourRoundedIcon from '@mui/icons-material/TourRounded';

import "./modelDropdown.css";

const MenuButton = ({name,icon,isActualOption,hasItemTypesOption,hasClearBtn,index,currentItemName,onClick,menuItemProperty}) => {
    return (
        <button onClick={(event) => (onClick ? onClick(event,index) : null)} 
            className={`model-dropdown-item-menu-button ${menuItemProperty} ${hasItemTypesOption ? 'model-dropdown-item-menu-button-wTypeOption' : (name==='Clear') ? 'model-dropdown-item-menu-button-clear' : '' }`}>
            <span className="model-dropdown-current-icon">{icon}</span>
            {name} 
            {isActualOption && currentItemName === name && <CheckRoundedIcon className="ms-auto"/>}
        </button>
    );
};

const MenuItem = ({ name, index, icon, isActualOption, hasItemTypesOption, hasClearBtn, currentItemName, onClick, menuItemProperty }) => {
    return (
        <>
            <MenuButton
                onClick={(event, index) => onClick(event, index)}
                icon={icon}
                name={name}
                isActualOption={isActualOption}
                hasItemTypesOption={hasItemTypesOption}
                hasClearBtn={hasClearBtn}
                index={index}
                menuItemProperty={menuItemProperty}
                currentItemName={currentItemName}
            />
        </>
    );
};

export const ModelDropdown = (props) => {
    const { items, 
        hasItemTypesOption, hasClearBtn, hasArrow, hasHeaderDescText, hasSearchBar,
        initialNameValue, initialIconValue, isPriorityDropdown, isModalOnRightSide,
        menuItemProperty } = props;

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState({ name: initialNameValue, icon: initialIconValue });

    const handleMenuItemClick = (event,item) => {
        setCurrentItem(item);
        // console.log(event.currentTarget.getAttribute("class"));
        // console.log(event.currentTarget.textContent);
        
        props.handleTaskUpdate(event);

        console.log(items.name);
        if (isPriorityDropdown) {
            const priorities = items.filter(item => item.name !== 'Clear')
                .map(item => item.name);
            if (priorities.includes(item.name)) {
                console.log(item.name);
                setCurrentItem({name: item.name, icon: item.icon});
            } else if(item.name === 'Clear') {
                setCurrentItem({name: null, icon: null});
            }
        } 
        
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
            (currentItem.name) ?
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

            <div className={`model-dropdown-menu ${isModalOnRightSide ? 'right' : 'left'}`} ref={ref} >
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
                            hasClearBtn={hasClearBtn}
                            index={index}
                            currentItemName={currentItem.name}
                            menuItemProperty={menuItemProperty}
                            onClick={(event) => handleMenuItemClick(event,item)}
                            onHide={() => setIsDropdownOpen(!isDropdownOpen)}
                        />
                    ))}
                </div>

            </div>
        </span>
    );
};