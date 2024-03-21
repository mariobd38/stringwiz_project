import React from 'react';
import ChecklistRtlRoundedIcon from '@mui/icons-material/ChecklistRtlRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import ExtensionRoundedIcon from '@mui/icons-material/ExtensionRounded';
import NotInterestedRoundedIcon from '@mui/icons-material/NotInterestedRounded';
import SellRoundedIcon from '@mui/icons-material/SellRounded';
import TourRoundedIcon from '@mui/icons-material/TourRounded';

import { Tooltip } from 'react-tooltip'

import { ModelDropdown } from '../../models/modelDropdown';


const TaskDetailsModalSubheader = (props) => {
    const { upcomingTasks,currentIndex,handleTaskUpdate,allTagData,nonIncludedTaskTags,handleTagCreation,currentTaskPriority,
        setCurrentTaskPriority,currentTaskTags,setCurrentTaskTags
    } = props;


    return (
        <>
            <ModelDropdown 
                items={[
                    { name: "Task", icon: <ChecklistRtlRoundedIcon />, isActualOption: true },
                    { name: "Milestone", icon: <EmojiEventsRoundedIcon />, isActualOption: true },
                    { name: "Event", icon: <EventRoundedIcon />, isActualOption: true },
                    { name: 'Item types', icon: <ExtensionRoundedIcon />, isActualOption: false }
                ]}
                initialNameValue={"Task"} initialIconValue={<ChecklistRtlRoundedIcon />}
                handleTaskUpdate={(event) => handleTaskUpdate(event)}
                hasArrow={true} hasHeaderDescText={true} hasItemTypesOption={true}
                upcomingTasks={upcomingTasks} currentIndex={currentIndex}
            />
            <div data-tooltip-id="my-tooltip" data-tooltip-content={`Add tags`}>
            <ModelDropdown 
                // items={[{}]}
                items={allTagData ? nonIncludedTaskTags.map((tag) => ({ name: tag.name, icon: null })) : { name: "Task", icon: null, isActualOption: true }}
                handleTagCreation={handleTagCreation}
                initialNameValue={""} initialIconValue={<SellRoundedIcon />}
                handleTaskUpdate={(event) => handleTaskUpdate(event)}
                hasSearchBar={true}
                upcomingTasks={upcomingTasks} currentIndex={currentIndex} allTagData={allTagData} currentTaskTags={currentTaskTags} setCurrentTaskTags={setCurrentTaskTags}
            />
            </div>
            <Tooltip id="my-tooltip" className='task-details-modal-tooltip' style={{backgroundColor: "#2454d6", color: "#fafafa", fontSize: "0.8rem", borderRadius: "10px" }}/>


            {!currentTaskPriority &&
            <div data-tooltip-id="my-tooltip" data-tooltip-content={`Add priority`}>
                <ModelDropdown 
                    items={[
                        { name: "Critical", icon: <TourRoundedIcon /*style={{color: "#c90825"}}*//>, isActualOption: true },
                        { name: "High", icon: <TourRoundedIcon /*style={{color: "gold"}}*//>, isActualOption: true },
                        { name: "Medium", icon: <TourRoundedIcon /*style={{color: "#0976d6"}}*//>, isActualOption: true },
                        { name: "Low", icon: <TourRoundedIcon />, isActualOption: true },
                        { name: "Clear", icon: <NotInterestedRoundedIcon />, isActualOption: false },
                    ]}
                    initialNameValue={currentTaskPriority} initialIconValue={<TourRoundedIcon />}
                    handleTaskUpdate={(event) => handleTaskUpdate(event)}
                    hasClearBtn={true}
                    isPriorityDropdown={true} setCurrentTaskPriority={setCurrentTaskPriority}
                    upcomingTasks={upcomingTasks} currentIndex={currentIndex}
                />
            </div>}
            <Tooltip id="my-tooltip" className='task-details-modal-tooltip' style={{backgroundColor: "#2454d6", color: "#fafafa", fontSize: "0.8rem", borderRadius: "10px" }}/>

        </>
    );
};

export default TaskDetailsModalSubheader;