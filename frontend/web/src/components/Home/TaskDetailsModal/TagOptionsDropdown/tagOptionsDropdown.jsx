import React, { useState } from 'react';

import "./tagOptionsDropdown.css";

const MenuButton = ({name,icon,index,onClick}) => {
    return (
        <button onClick={(event) => (onClick ? onClick(event,index) : null)} 
            className={`model-dropdown-item-menu-button`}>
            <span className="tod-model-dropdown-current-icon">{icon}</span>
            {name} 
        </button>
    );
};

const MenuItem = ({ name, index, icon, onClick }) => {
    return (
        <>
            <MenuButton
                onClick={(event, index) => onClick(event, index)}
                icon={icon}
                name={name}
                index={index}
            />
        </>
    );
};

export const TagOptionsDropdown = (props) => {
    const { items, initialIconValue, isDropdownOnRightSide,
        tagDropdownStates, setTagDropdownStates, index,tagOptionsDropdownRef} = props;
    
        const [position, setPosition] = useState({ top: 0, left: 0 });
        
    const handleMenuItemClick = (event,item) => {
        setTagDropdownStates((prevState) => ({
                ...prevState,
                [index]: false
            }));
    }

    const handleOpenDropdownMenu = (event) => {
        event.stopPropagation();
        
        setTagDropdownStates((prevState) => {
            const newState = { ...prevState };
            const isDropdownOpen = newState[index];
            for (const key in prevState) {
                newState[key] = false; 
            }
            newState[index] = !isDropdownOpen;
            return newState;
        });
    }
    return (
        <div className="d-flex">
            <span
                className={`tod-dropdown tod-tag-options-dropdown ${tagDropdownStates[index] ? "open" : "" }`}
            >
                <span className={`user-home-task-details-modal-tag-options-btn ${tagDropdownStates && tagDropdownStates[index] ? 'dropdown-open' : 'dropdown-closed'} `} 
                onClick={handleOpenDropdownMenu}>
                {initialIconValue}
                </span>
                
                <div className={`tod-model-dropdown-menu ${isDropdownOnRightSide ? 'tag-options-right' : 'tag-options-left'}`} ref={tagOptionsDropdownRef}
                 style={{position: "absolute"}}
                >
                    
                    <div>
                        {items.map((item, index) => (
                            <MenuItem
                                key={item.name}
                                name={item.name}
                                icon={item.icon ? item.icon : ''}
                                index={index}
                                onClick={(event) => handleMenuItemClick(event,item)}
                                // onHide={() => setTagDropdownStates(prevState => {
                                //     const newState = [...prevState];
                                //     newState[index] = false;
                                //     return newState;
                                // })}
                            />
                        ))
                        }
                    </div>

                </div>
                
            </span>
        </div>
        
    );
};