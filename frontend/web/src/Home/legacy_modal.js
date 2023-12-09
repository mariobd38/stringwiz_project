import React from 'react';

const legacy_modal = () => {
    return (
        {/* <Modal
                                            show={moreTaskModalOpen}
                                            onHide={handleMoreTaskModalClose}
                                            className='more-task-modal'
                                        >
                                            <div className='modal-parent row '>
                                                <Nav className='upper_more_task_nav m-0 b-0 d-flex justify-content-end'>
                                                        <Modal.Header closeButton>
                                                        </Modal.Header>
                                                </Nav>
                                                <Nav className=' more_task_nav row'>
                                                    

                                                    <div className='my-3 d-flex  justify-content-md-between row'>
                                                        
                                                        <div className='col-12 col-lg-8'>
                                                            <Button className={`ms-0 ms-md-2 lato-font ${currentTaskStatus === 'Completed' ? 'menu-current-status-isCompleted' : ''}`} id="menu-current-status-btn"
                                                                aria-controls={openMenuStatus ? 'basic-menu' : undefined}
                                                                aria-haspopup="true"
                                                                aria-expanded={openMenuStatus ? 'true' : undefined}
                                                                onClick={handleMenuStatusBtnClick}>
                                                                {currentTaskStatus} 
                                                            </Button>

                                                            <Menu
                                                                id="basic-menu"
                                                                anchorEl={menuStatusanchorEl}
                                                                open={openMenuStatus}
                                                                onClose={handleMenuStatusBtnClose}
                                                                MenuListProps={{
                                                                'aria-labelledby': 'basic-button',
                                                                }}
                                                            >
                                                                {otherStatusesArray.map((otherStatuses) => (
                                                                    <MenuItem onClick={(event) => handleMenuStatusBtnClose(otherStatuses, event)} className='menu-change-status-btn'>{otherStatuses}</MenuItem>
                                                                ))}
                                                            </Menu>
                                                            <Tooltip title={<span className='lato-font'>{[`Mark as complete`]}</span>} arrow className='set-complete-tooltip d-none d-sm-inline menu-tooltip'>
                                                                <CheckIcon className={`mx-2 mx-lg-3 set-task-complete-btn ${currentTaskStatus === 'Completed' ? 'set-task-complete-true-btn' : ''}`}  onClick={(event) => handleSetTaskCompleteBtn(event)}></CheckIcon>
                                                            </Tooltip>
                                                            

                                                            <Menu
                                                                id="basic-menu"
                                                                anchorEl={menuPriorityanchorEl}
                                                                open={openMenuPriority}
                                                                onClose={handleMenuPriorityBtnClose}
                                                                MenuListProps={{
                                                                'aria-labelledby': 'basic-button',
                                                                }}
                                                            >
                                                                {userPriorities.map((userPriority) => (
                                                                    <MenuItem onClick={(event) => handleMenuPriorityBtnClose(userPriority, event)} className='menu-change-priority-btn lato-font'>
                                                                        <span className={`m-0 ${userPriority === 'Critical' ? 'more-task-priority-critical-btn' : ''}
                                                                                                ${userPriority === 'High' ? 'more-task-priority-high-btn' : ''}
                                                                                                ${userPriority === 'Medium' ? 'more-task-priority-medium-btn' : ''}
                                                                                                ${userPriority === 'Low' ? 'more-task-priority-low-btn' : ''}`}>
                                                                            <FlagIcon className='me-3'></FlagIcon>
                                                                        </span>
                                                                        {userPriority} {userPriority === currentTaskPriority && <CheckIcon className='ms-2'></CheckIcon>}
                                                                    </MenuItem>
                                                                ))}
                                                            </Menu>

                                                            {currentTaskPriority === null ? 
                                                            <Tooltip title={<span className='lato-font'>{[`Set priority`]}</span>} arrow className='task-priority-tooltip menu-tooltip'>
                                                                <FlagIcon className='more-task-priority-btn mx-2 mx-md-5' variant="contained" onClick={handleMenuPriorityBtnClick} ></FlagIcon>
                                                            </Tooltip> 
                                                            :
                                                            <Tooltip title={<span className='lato-font'>{[`${currentTaskPriority} priority`]}</span>} arrow className='task-priority-tooltip menu-tooltip '>
                                                                <span className='more-task-current-priority-btn mx-2 mx-lg-3' onClick={handleMenuPriorityBtnClick}><FlagIcon className={`me-2   ${
                                                            currentTaskPriority === 'Critical' ? 'more-task-priority-critical-btn' :
                                                            currentTaskPriority === 'High' ? 'more-task-priority-high-btn' :
                                                            currentTaskPriority === 'Medium' ? 'more-task-priority-medium-btn' :
                                                            currentTaskPriority === 'Low' ? 'more-task-priority-low-btn' : ''
                                                            }`}
                                                                variant="contained"  ></FlagIcon><span className='more-task-priority-text'>{currentTaskPriority} priority</span></span>
                                                            </Tooltip> }
                                                            
                                                            <Button className="btn px-0 px-md-1 py-1 py-md-0 more-task-user-button">
                                                                    <p className='m-auto text-white initials'>{initials}</p>
                                                                    <Tooltip title={<span className='lato-font'>{[`Remove asignee`]}</span>} arrow className='remove-asignee-tooltip menu-tooltip'>
                                                                        <CancelIcon className="remove-user-cancel-icon " />
                                                                    </Tooltip>
                                                            </Button>

                                                            <Menu
                                                                id="basic-menu"
                                                                anchorEl={menuSettingsanchorEl}
                                                                open={openMenuSettings}
                                                                onClose={handleMenuSettingsBtnClose}
                                                                MenuListProps={{
                                                                'aria-labelledby': 'basic-button',
                                                                }}
                                                            >
                                                                    <MenuItem onClick={handleDeleteTaskBtnClick} className='menu-delete-task-btn'>
                                                                        Delete task
                                                                    </MenuItem>
                                                            </Menu>
                                                            <Tooltip title={<span className='lato-font'>{[`Task Settings`]}</span>} arrow className='task-settings-tooltip menu-tooltip'>
                                                                <MoreHorizIcon className='task-settings-btn mx-1  ms-md-3 me-md-5' onClick={handleMenuSettingsBtnClick}></MoreHorizIcon>
                                                            </Tooltip>
                                                        </div>
                                                        <div className='mt-3 mt-lg-0 col-12 col-lg-4  d-flex justify-content-start justify-content-lg-end'>
                                                            <Tooltip title={<span className=' created-date-tooltip-text lato-font'>{[`Created by  ${userFullName} on ${currentTaskCreatedOn}`,<br />,`Last Updated on ${currentTaskUpdatedOn}`]}</span>} arrow className='created-date-tooltip menu-tooltip'>
                                                                <div className='created-date-div mx-2  mx-md-2'>
                                                                    <div className='created-text'>Created</div>
                                                                    <div className='created-date-text'>{currentTaskCreatedOn}</div>
                                                                </div>
                                                            </Tooltip>

                                                            <div className="divider"></div>
                                                            <div className='created-date-div mx-2 me-md-0 me-lg-5' >
                                                                {currentTaskDueDate && currentTaskDueDate!=='Invalid Date' ? 
                                                                    <div>
                                                                        <div className='created-text'>Due Date</div>
                                                                        <div className='created-date-text '>
                                                                                <CancelIcon className='remove-due-date-btn' onClick={handleRemoveDueDateClick}></CancelIcon>
                                                                            {currentTaskDueDate}
                                                                        </div>
                                                                    </div>
                                                                :
                                                                <>
                                                                    <Tooltip title={<span className='lato-font'>{[`Set due date`]}</span>} arrow className='due-date-create-tooltip menu-tooltip'>
                                                                        <div><EventIcon className='due-date-create-btn' onClick={(event) => handleDueDatePopoverClick(event, currentIndex)} ></EventIcon></div>
                                                                    </Tooltip>

                                                                    <Popover
                                                                    id={dueDatePopOverId}
                                                                    open={openDueDatePopover}
                                                                    anchorEl={dueDatePopoverAnchorEl}
                                                                    onClose={handleDueDatePopoverClose}
                                                                    anchorOrigin={{
                                                                        vertical: 'bottom',
                                                                        horizontal: 'left',
                                                                    }}
                                                                    >
                                                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                        <DateCalendar onChange={handleDateSelection} className={`${isCheckIconVisible ? 'calendar-hide' : ''}`}/>
                                                                        <div className={`wrapper d-flex justify-content-center ${isCheckIconVisible ? '' : 'd-none'}`}>
                                                                            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                                                                            </svg>
                                                                        </div>
                                                                        <div className={`pb-2 d-flex justify-content-around ${isCheckIconVisible ? 'calendar-hide' : ''}`}> 
                                                                            <Button className='date-calendar-btn' onClick={handleDueDatePopoverClose}>CANCEL</Button>
                                                                            <Button className='date-calendar-btn' onClick={handleUpdateTask} disabled={!selectedDate} >OK</Button>
                                                                        </div>
                                                                        
                                                                    </LocalizationProvider>
                                                                    </Popover>
                                                                </>
                                                                
                                                                }
                                                            </div> 
                                                        </div> 
                                                        
                                                        
                                                    </div>
                                                </Nav>
                                                <div className="container mt-4">
                                                    <div className="row ">
                                                        <div className="col-xl-7 ">
                                                            <div className='ms-xl-3'>
                                                                <div className='update-task-name-content' contentEditable={true}  onInput={handleInputTaskNameChange} onKeyDown={handleInputTaskNameChange} suppressContentEditableWarning={true}
                                                                    >
                                                                    <h1 className='update-task-name nunito-sans-font-600'>{currentTaskName}</h1>
                                                                </div>
                                                                <div className='mt-3 '>

                                                                    <Dropdown className='d-inline me-2'>
                                                                        <Dropdown.Toggle as={TagMenuCustomToggle} id="dropdown-custom-components" >
                                                                        </Dropdown.Toggle>
                                                                        <Dropdown.Menu as={CustomMenu} className='tag-dropdown-menu tag-search-wrapper' >
                                                                            {tagNameAbsent && <p className='ms-3 pt-1 error-message'>Oops! Tag Name is required</p>}
                                                                                {allTagData && allTagData.map((tagRow, index) => (
                                                                                    <Dropdown.Item eventKey={`${tagRow.name}`} className='tag-dropdown-item lato-font'>{tagRow.name}</Dropdown.Item>

                                                                                ))}
                                                                            

                                                                        </Dropdown.Menu>
                                                                    </Dropdown>

                                                                    

                                                                    <FormControl className='mx-2'>
                                                                        <Select className='item-type-form'
                                                                            labelId="demo-simple-select-label"
                                                                            id="demo-simple-select"
                                                                            value={itemType}
                                                                            onChange={handleItemTypeChange}
                                                                        >
                                                                            <MenuItem value={'Task'} default >Task</MenuItem>
                                                                            <MenuItem value={'Subtask'} default>Subtask</MenuItem>
                                                                            <MenuItem value={'Project'}>Project</MenuItem>
                                                                        </Select>
                                                                    </FormControl>
                                                                    {currentTaskIdNumber && <Tooltip title={<span className='copy-task-id-tooltip'>{[`Copy task ID`]}</span>} arrow className='copy-task-id-tooltip mx-3 menu-tooltip'>
                                                                        <Button className='ms-2 current-task-id-number-btn' onClick={() => {navigator.clipboard.writeText(currentTaskIdNumber)}}>{currentTaskIdNumber}</Button>
                                                                    </Tooltip>}

                                                                </div>

                                                                <div className=' '>


                                                                <Menu
                                                                    id="basic-menu"
                                                                    anchorEl={menuTagsAnchorEl}
                                                                    open={openMenuTags}
                                                                    onClose={handleMenuTagBtnClose}
                                                                    MenuListProps={{
                                                                    'aria-labelledby': 'basic-button',
                                                                    }}
                                                                    anchorOrigin={{
                                                                        vertical: 'bottom'
                                                                    }}
                                                                    className='mt-2'
                                                                >
                                                                        <MenuItem onClick={(event) => handleMenuTagBtnClose(event)} className='menu-tag-btn'>
                                                                        <span className={`nunito-sans-font`}><EditIcon className='me-1 mb-1 tag-menu-icon tag-dropdown-item'></EditIcon>Rename</span>
                                                                        </MenuItem>
                                                                        <MenuItem   className='menu-tag-btn'>
                                                                            <span className={`nunito-sans-font`}><PaletteIcon className='me-1 mb-1 tag-menu-icon tag-dropdown-item'></PaletteIcon>Change color</span>
                                                                        </MenuItem>
                                                                        <MenuItem onClick={handleDeleteTag} className='menu-tag-btn'>
                                                                            <span className={`nunito-sans-font`}><DeleteIcon className='me-1 mb-1 tag-menu-icon tag-dropdown-item'></DeleteIcon>Delete</span>
                                                                        </MenuItem>
                                                                        
                                                                    
                                                                </Menu>
                                                                
                                                                {tagData && tagData.map((r, index) => (
                                                                        <Button className='me-2 mt-3 menu-tag-button' onClick={(event) => handleMenuTagBtnClick(event, index)}><span><LocalOfferIcon className='tag-icon-span me-1'></LocalOfferIcon></span>{r.name}<CloseIcon className='remove-tag-icon ms-1 pb-1 d-none' onClick={() => handleRemoveTag(index)}></CloseIcon></Button>
                                                                    ))}
                                                                </div>
                                                                <div className='my-4 pt-2'>
                                                                    <TextareaAutosize
                                                                    placeholder={!isInputFocused && !taskDescriptionInputValue && !currentTaskDescription ? 'Add description' : undefined}
                                                                    
                                                                    className='more-task-description ps-3'
                                                                    onFocus={handleFocus}
                                                                    onBlur={handleBlur}
                                                                    onChange={handleInputTaskDescriptionChange}
                                                                    value={taskDescriptionInputValue ? taskDescriptionInputValue : currentTaskDescription}
                                                                    />
                                                                </div>
                                                            </div>
                                                            
                                                        </div>
                                                        <div className="col-xl-5 comment-section ps-3">
                                                            <div className='bg  d-flex justify-content-start '>
                                                                <h4 className='nunito-sans-font-600 mt-2'>Comment Section</h4>

                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Modal> */}
    );
};

export default legacy_modal;
