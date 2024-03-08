import React from 'react';

import "./tagOptionsDropdown.css";

const MenuButton = ({name,icon,hasItemTypesOption,index,onClick}) => {
    return (
        <button onClick={(event) => (onClick ? onClick(event,index) : null)} 
            className={`model-dropdown-item-menu-button ${hasItemTypesOption ? 'model-dropdown-item-menu-button-wTypeOption' : (name==='Clear') ? 'model-dropdown-item-menu-button-clear' : '' }`}>
            <span className="model-dropdown-current-icon">{icon}</span>
            {name} 
        </button>
    );
};

const MenuItem = ({ name, index, icon, hasItemTypesOption, onClick }) => {
    return (
        <>
            <MenuButton
                onClick={(event, index) => onClick(event, index)}
                icon={icon}
                name={name}
                hasItemTypesOption={hasItemTypesOption}
                index={index}
            />
        </>
    );
};

export const TagOptionsDropdown = (props) => {
    const { items,initialNameValue, initialIconValue, isDropdownOnRightSide,isTagOptionsBtn,
        tagDropdownStates, setTagDropdownStates,ref, index} = props;

    const currentItem = { name: initialNameValue, icon: initialIconValue };
        
    const handleMenuItemClick = (event,item) => {
        // setTagDropdownStates((prevState) =>
        //     prevState.map((state, i) => (i === index ? !state : state))
        // );
    }

    const handleOpenDropdownMenu = (event) => {
        console.log("inside menu");
        event.stopPropagation();
        /*
        setTagDropdownStates((prevState) => {
            if (prevState[index]) {
                // return {prevState}; 
                return { ...prevState, [index]: false };
            }
            // const isDropdownOpen = prevState[index];
            console.log("alright");
            const newState = {};
            Object.keys(prevState).forEach((key) => {
                newState[key] = key === index ? true : false;
                // newState[key] = false;
            });
            newState[index] = true;
            return newState;
        }); */

        setTagDropdownStates((prevState) => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    }
    
    // const ref = useRef(null);
    // useClickAway(ref, () => tagOptionsDropdownIsOpen && setTagOptionDropdownIsOpen(false));

    return (
        <div className="d-flex">
            <span
                className={`dropdown ${tagDropdownStates[index] ? "open" : "" } ${isTagOptionsBtn ? 'tag-options-dropdown' : ''}`} ref={ref}
            >
                <span  className={`user-home-task-details-modal-tag-options-btn ${tagDropdownStates && tagDropdownStates[index] ? 'dropdown-open' : 'dropdown-closed'} `} onClick={handleOpenDropdownMenu}>
                {initialIconValue}
                </span>
                
                <div className={`model-dropdown-menu ${isDropdownOnRightSide ? 'right' : 'left'}`} ref={ref} >
                    
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