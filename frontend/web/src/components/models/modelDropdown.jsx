import { useState, useRef, useEffect } from "react";
import { useClickAway } from 'react-use';

import Button from 'react-bootstrap/Button';

import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import TourRoundedIcon from '@mui/icons-material/TourRounded';

import { addExistingTagInfo } from "../../DataManagement/Tags/addExistingTag";

import "./modelDropdown.css";

const MenuButton = ({name,icon,isActualOption,hasItemTypesOption,index,currentItemName,onClick,menuItemProperty}) => {
    return (
        <button onClick={(event) => (onClick ? onClick(event,index) : null)} 
            className={`model-dropdown-item-menu-button ${menuItemProperty} ${hasItemTypesOption ? 'model-dropdown-item-menu-button-wTypeOption' : (name==='Clear') ? 'model-dropdown-item-menu-button-clear' : '' }`}>
            <span className="model-dropdown-current-icon">{icon}</span>
            {name} 
            {isActualOption && currentItemName === name && <CheckRoundedIcon className="ms-auto"/>}
        </button>
    );
};

const MenuItem = ({ name, index, icon, isActualOption, hasItemTypesOption, currentItemName, onClick, menuItemProperty }) => {
    return (
        <>
            <MenuButton
                onClick={(event, index) => onClick(event, index)}
                icon={icon}
                name={name}
                isActualOption={isActualOption}
                hasItemTypesOption={hasItemTypesOption}
                index={index}
                menuItemProperty={menuItemProperty}
                currentItemName={currentItemName}
            />
        </>
    );
};

export const ModelDropdown = (props) => {
    const { items, 
        hasItemTypesOption, hasArrow, hasHeaderDescText, hasSearchBar,handleTagCreation,
        initialNameValue, initialIconValue, isPriorityDropdown, setCurrentTaskPriority, isModalOnRightSide,
        menuItemProperty,isStatusBtn, upcomingTasks, currentIndex, jwt, allTagData,currentTaskTags,setCurrentTaskTags
    } = props;

    const isTagDropdown = initialNameValue === '';

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState({ name: initialNameValue, icon: initialIconValue });
        

    const handleMenuItemClick = (event,item) => {
        setCurrentItem(item);
        
        props.handleTaskUpdate(event);

        console.log(items.name);
        if (isPriorityDropdown) {
            const priorities = items.filter(item => item.name !== 'Clear')
                .map(item => item.name);
            if (priorities.includes(item.name)) {
                console.log(item.name);
                setCurrentItem({name: item.name, icon: item.icon});
                setCurrentTaskPriority(item.name);
            } else if(item.name === 'Clear') {
                setCurrentItem({name: null, icon: null});
                setCurrentTaskPriority(null);
            }
        } 
        
        setIsDropdownOpen(!isDropdownOpen);
    }

    const handleTagMenuItemClick = async (event,item) => {
        const tagClicked = allTagData.find(atd => atd.name === item.name);

        try {
            const addedTag =  await addExistingTagInfo(jwt,upcomingTasks[currentIndex].id,tagClicked.id);

    
            if (addedTag) {
                const updatedTags = [...currentTaskTags, addedTag];
                setCurrentTaskTags(updatedTags);
            } else {
                console.error('Error creating tag: Tag data is null');
            }
        } catch (error) {
            console.error('Error creating tag:', error);
        }

        setIsDropdownOpen(!isDropdownOpen);

    }

    const handleOpenDropdownMenu = () => {
        if (isTagDropdown) {
            setTagAlreadyAttached(false);
            setTagInputValue('');
        }
        setIsDropdownOpen(!isDropdownOpen);
    }

    const handleNextStatusClick = (event) => {
        props.handleTaskUpdate(event)
        const nextStatusName = upcomingTasks[currentIndex].status;
        const nextStatusIcon = items.find(item => item.name === nextStatusName).icon;
        setCurrentItem({name: nextStatusName, icon: nextStatusIcon});
    }
    
    const ref = useRef(null);
    useClickAway(ref, () => isDropdownOpen && setIsDropdownOpen(!isDropdownOpen));

    //tag related
    const [tagInputValue, setTagInputValue] = useState('');
    const [tagItems, setTagItems] = useState(items);
    const [tagAlreadyAttached, setTagAlreadyAttached] = useState(false);

    async function handleTagSearch(event) {
        const tagName = event.target.value;
        // console.log("this is the actual task");
        // console.log(tagName.trim());
        console.log(items.find(item => item.name === tagName) !== undefined);
        if (currentTaskTags.filter(item => item.name === tagName.trim()).length > 0) {
            setTagAlreadyAttached(true);
        } else {
            setTagAlreadyAttached(false);

            if (event.key === 'Enter' && !/^\s*$/.test(tagName)) {
                const tagEntered = allTagData.find(item => item.name === tagName);
                if (tagEntered !== undefined) {
                    try {
                        const addedTag =  await addExistingTagInfo(jwt,upcomingTasks[currentIndex].id,tagEntered.id);
                        if (addedTag) {
                            const updatedTags = [...currentTaskTags, addedTag];
                            setCurrentTaskTags(updatedTags);
                        } else {
                            console.error('Error creating tag: Tag data is null');
                        }
                    } catch (error) {
                        console.error('Error creating tag:', error);
                    }
            
                    setIsDropdownOpen(!isDropdownOpen);
                } else {
                    handleTagCreation(tagName);
                    setIsDropdownOpen(!isDropdownOpen);
                }
            }
        }

        setTagInputValue(tagName);
    }
    
    useEffect(() => {
        let filteredItems;
        if (tagInputValue === "") { 
            filteredItems = items; 
        } else {
            filteredItems = items.filter((item) => {
                return item.name.toLowerCase().startsWith(tagInputValue.toLowerCase().trim());
            });
        }
        setTagItems(filteredItems);
    }, [tagInputValue, items]);


    return (
        <div className="d-flex">
        <span
            className={`dropdown ${isDropdownOpen ? "open" : ""}`} ref={ref}
        >
            {
            (currentItem.name) ?
                <button className={`${isStatusBtn ? 'selected-item-half-rounded-btn' : 'selected-item-btn'} ${hasArrow ? '' : 'pe-3'}`} onClick={handleOpenDropdownMenu} >
                    <span className={`model-dropdown-current-icon`}> {currentItem.icon} </span>
                    {currentItem.name}
                    {
                        hasArrow &&
                        <span className="model-dropdown-arrow-icon"> <KeyboardArrowDownRoundedIcon /> </span>
                    }
                </button> :
                isPriorityDropdown ?
                <button  className="user-home-task-details-modal-no-priority-btn" onClick={handleOpenDropdownMenu}>
                    <TourRoundedIcon />
                </button> : 

                <button  className="user-home-task-details-modal-tag-btn" onClick={handleOpenDropdownMenu}>
                    {initialIconValue}
                </button>
            }

            <div className={`model-dropdown-menu ${isModalOnRightSide ? 'right' : 'left'}`} ref={ref} >
                {hasHeaderDescText &&
                <div className="m-0 pt-2 ps-2 pb-1 model-dropdown-desc-text">select the item type</div>
                }
                

                {hasSearchBar &&
                    <div className='d-flex align-items-center' style={{borderBottom: "1px solid #898989"}}>
                        <form className="model-dropdown-search" role='search' onSubmit={(event) => {event.preventDefault(); return false;}}>
                            <input
                                className="form-control model-dropdown-search-input me-2"
                                type="text"
                                placeholder={`${isTagDropdown ? 'Search or create new..' : 'Search'}`}                                               
                                aria-label="Search"
                                onChange={isTagDropdown ? handleTagSearch : undefined}
                                onKeyDown={isTagDropdown ? handleTagSearch : undefined}
                                value={isTagDropdown ? tagInputValue : ''}
                            />
                        </form>
                    </div>
                }
                {tagAlreadyAttached &&
                <div className="m-0 pt-2 ps-2 pb-1">Tag already attached</div>
                }
                
                <div>
                    {!isTagDropdown ? items.map((item, index) => (
                        <MenuItem
                            key={item.name}
                            name={item.name}
                            icon={item.icon ? item.icon : ''}
                            isActualOption={item.isActualOption}
                            hasItemTypesOption={hasItemTypesOption}
                            index={index}
                            currentItemName={currentItem.name}
                            menuItemProperty={menuItemProperty}
                            onClick={(event) => handleMenuItemClick(event,item)}
                            onHide={() => setIsDropdownOpen(!isDropdownOpen)}
                        />
                    )) : (!tagAlreadyAttached) ?
                    tagItems.map((item, index) => (
                        <MenuItem
                            key={item.name}
                            name={item.name}
                            icon={item.icon ? item.icon : ''}
                            isActualOption={item.isActualOption}
                            hasItemTypesOption={hasItemTypesOption}
                            index={index}
                            currentItemName={currentItem.name}
                            menuItemProperty={menuItemProperty}
                            onClick={(event) => handleTagMenuItemClick(event,item)}
                            onHide={() => setIsDropdownOpen(!isDropdownOpen)}
                        />
                    )) : ''
                    }
                </div>

            </div>
            
        </span>
       
        { isStatusBtn &&
        <Button className='user-home-task-details-modal-next-status-btn d-flex justify-content-center' onClick={handleNextStatusClick}>
            <ArrowForwardIosRoundedIcon style={{width: "1.2rem", height: "1.7rem", color: "#989898"}}/>
        </Button>
        }
        </div>
        
    );
};