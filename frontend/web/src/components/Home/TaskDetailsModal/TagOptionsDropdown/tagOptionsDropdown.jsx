// import { useRef } from "react";
// import { useClickAway } from 'react-use';


import "./tagOptionsDropdown.css";

const MenuButton = ({name,icon,hasItemTypesOption,index,currentItemName,onClick}) => {
    return (
        <button onClick={(event) => (onClick ? onClick(event,index) : null)} 
            className={`model-dropdown-item-menu-button ${hasItemTypesOption ? 'model-dropdown-item-menu-button-wTypeOption' : (name==='Clear') ? 'model-dropdown-item-menu-button-clear' : '' }`}>
            <span className="model-dropdown-current-icon">{icon}</span>
            {name} 
        </button>
    );
};

const MenuItem = ({ name, index, icon, hasItemTypesOption, currentItemName, onClick }) => {
    return (
        <>
            <MenuButton
                onClick={(event, index) => onClick(event, index)}
                icon={icon}
                name={name}
                hasItemTypesOption={hasItemTypesOption}
                index={index}
                currentItemName={currentItemName}
            />
        </>
    );
};

export const TagOptionsDropdown = (props) => {
    const { items,initialNameValue, initialIconValue, isDropdownOnRightSide,isTagOptionsBtn,
        tagOptionsDropdownIsOpen, setTagOptionDropdownIsOpen,ref
    } = props;

    const isTagDropdown = initialNameValue === '';

    // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const currentItem = { name: initialNameValue, icon: initialIconValue };
        

    const handleMenuItemClick = (event,item) => {
        setTagOptionDropdownIsOpen(!tagOptionsDropdownIsOpen);
    }

    const handleOpenDropdownMenu = () => {
        // console.log(tagOptionsDropdownIsOpen);
        setTagOptionDropdownIsOpen(!tagOptionsDropdownIsOpen);
    }
    
    // const ref = useRef(null);
    // useClickAway(ref, () => tagOptionsDropdownIsOpen && setTagOptionDropdownIsOpen(false));



    return (
        <div className="d-flex">
            <span
                className={`dropdown ${tagOptionsDropdownIsOpen ? "open" : "" } ${isTagOptionsBtn ? 'tag-options-dropdown' : ''}`} ref={ref}
            >
                {
                (currentItem.name) ?
                    <button className={'selected-item-btn pe-3'} onClick={handleOpenDropdownMenu} >
                        <span className={`model-dropdown-current-icon`}> {currentItem.icon} </span>
                        {currentItem.name}
                    </button> : 
                    (!isTagOptionsBtn) ? 
                    <button  className="user-home-task-details-modal-tag-btn" onClick={handleOpenDropdownMenu}>
                        {initialIconValue}
                    </button> : 
                    <span  className="user-home-task-details-modal-tag-options-btn" onClick={handleOpenDropdownMenu}>
                    {initialIconValue}
                    </span>
                }

                <div className={`model-dropdown-menu ${isDropdownOnRightSide ? 'right' : 'left'}`} ref={ref} >
                    
                    
                    <div>
                        {isTagDropdown ? items.map((item, index) => (
                            <MenuItem
                                key={item.name}
                                name={item.name}
                                icon={item.icon ? item.icon : ''}
                                index={index}
                                currentItemName={currentItem.name}
                                onClick={(event) => handleMenuItemClick(event,item)}
                                onHide={() => setTagOptionDropdownIsOpen(!tagOptionsDropdownIsOpen)}
                            />
                        ))  : ''
                        }
                    </div>

                </div>
                
            </span>
        </div>
        
    );
};