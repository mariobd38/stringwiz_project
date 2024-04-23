import React from 'react';
import ChecklistRtlRoundedIcon from '@mui/icons-material/ChecklistRtlRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import ExtensionRoundedIcon from '@mui/icons-material/ExtensionRounded';
import NotInterestedRoundedIcon from '@mui/icons-material/NotInterestedRounded';
import SellRoundedIcon from '@mui/icons-material/SellRounded';
import TourRoundedIcon from '@mui/icons-material/TourRounded';

import { ModelDropdown } from '../../models/ModelDropdown/modelDropdown';

const TaskDetailsModalSubheader = (props) => {
    const { taskType,currentIndex,handleTaskUpdate,allTagData,nonIncludedTaskTags,handleTagCreation,currentTaskPriority,
        setCurrentTaskPriority,currentTaskTags,setCurrentTaskTags
    } = props;


    return (
        <>
            <ModelDropdown 
                items={[
                    { name: "Task", icon: <ChecklistRtlRoundedIcon />, isActualOption: true },
                    { name: "Event", icon: <EventRoundedIcon />, isActualOption: true },
                    { name: 'Item types', icon: <ExtensionRoundedIcon />, isActualOption: false }
                ]}
                initialNameValue={"Task"} initialIconValue={<ChecklistRtlRoundedIcon />}
                handleTaskUpdate={(event) => handleTaskUpdate(event)}
                hasArrow={true} hasHeaderDescText={true} hasItemTypesOption={true}
                taskType={taskType} currentIndex={currentIndex}
            />
                <ModelDropdown 
                    items={allTagData ? nonIncludedTaskTags.map((tag) => ({ name: tag.name, icon: null })) : { name: "Task", icon: null, isActualOption: true }}
                    handleTagCreation={handleTagCreation}
                    initialNameValue={""} initialIconValue={<SellRoundedIcon />}
                    handleTaskUpdate={(event) => handleTaskUpdate(event)}
                    hasSearchBar={true}
                    taskType={taskType} currentIndex={currentIndex} allTagData={allTagData} currentTaskTags={currentTaskTags} setCurrentTaskTags={setCurrentTaskTags}
                />

            {!currentTaskPriority &&
                <ModelDropdown 
                    items={[
                        { name: "Critical", icon: <TourRoundedIcon/>, isActualOption: true },
                        { name: "High", icon: <TourRoundedIcon/>, isActualOption: true },
                        { name: "Medium", icon: <TourRoundedIcon/>, isActualOption: true },
                        { name: "Low", icon: <TourRoundedIcon />, isActualOption: true },
                        { name: "Clear", icon: <NotInterestedRoundedIcon />, isActualOption: false },
                    ]}
                    initialNameValue={currentTaskPriority} initialIconValue={<TourRoundedIcon />}
                    handleTaskUpdate={(event) => handleTaskUpdate(event)}
                    hasClearBtn={true}
                    isPriorityDropdown={true} setCurrentTaskPriority={setCurrentTaskPriority}
                    taskType={taskType} currentIndex={currentIndex}
                />
            }

        </>
    );
};

export default TaskDetailsModalSubheader;