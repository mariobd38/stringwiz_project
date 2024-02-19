import React, { useState } from 'react';

import Card from 'react-bootstrap/Card';

import { ClickAwayListener } from '@mui/base/ClickAwayListener';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

import AccountTree from '@mui/icons-material/AccountTreeRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import LockIcon from '@mui/icons-material/Lock';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

const ProjectCard = () => {
    const [newTaskRowOpen, setNewTaskRowOpen] = useState(false);

    const handleNewTaskClick = () => {
        setNewTaskRowOpen((prev) => !prev);
    };

    const handleNewTaskClickAway = () => {
        setNewTaskRowOpen(false);
    };

    return (
        <>
            <Card
                style={{ width:'85%', fontFamily: 'Nunito Sans', border: "2.5px solid #505050" }}
            >
                <Card.Header 
                    style={{
                        backgroundColor: '#162561',
                        borderBottom: "1px solid #505050",
                        borderTopColor: "#505050"
                    }} 
                    className='d-flex align-items-center py-3 d-flex justify-content-between user-home-card-header' >
                    <div className='d-flex align-items-center' style={{ color: '#fafafa' }}>
                        <AccountTree className='me-3 user-home-checklist-icon'/>
                        <span className='d-flex align-items-center'>
                            My Projects
                            <LockIcon className='ms-2' style={{ width: "1.1rem" }}/>
                        </span>
                    </div>
                    <div className='me-2' style={{ color: "#fafafa" }}>
                        <MoreHorizRoundedIcon />
                    </div>
                </Card.Header>
                <Card.Body className='pt-3 ' style={{ padding: "0", backgroundColor: "#1E1F21" }}>
                    <div className='table-container-wrapper'>
                        <TableContainer className='table-container' >
                            <Table>
                                <TableBody >
                                    <ClickAwayListener onClickAway={handleNewTaskClickAway}>
                                        <Box sx={{ position: 'relative' }}>
                                            <Button className='user-home-create-task-button-dark d-flex align-items-center ms-2 mb-2'
                                                style={{ color: "#919191" }} onClick={handleNewTaskClick}
                                            >
                                                <AddRoundedIcon className='me-1' style={{ width: "1rem", marginBottom: ".09rem" }}/>
                                                <span className='me-1' style={{ fontSize: '0.95rem' }}>Create project</span>
                                            </Button>
                                            <div className='w-100 table-row-dark'>
                                            {newTaskRowOpen ? (
                                                <TableRow className='table-row-new-dark ' style={{backgroundColor: "#1E1F21", width: "100%"}} >
                                                    <TableCell scope="row" className=' d-flex align-items-center justify-content-between table-cell'>
                                                        <div className='d-flex align-items-center mb-1 m-0' style={{color: "#fafafa"}}>
                                                            <div>
                                                                <CheckRoundedIcon className='user-home-task-check-icon' />
                                                            </div>
                                                            <div>
                                                                {/* <input onKeyDown={handleTaskCreate} placeholder='Task name' autoFocus="autofocus" className={`ps-2 taskName-text user-home-new-task-input fafafa-color`} contentEditable={true} />  */}
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            ) : null}
                                            </div>
                                            
                                        </Box>
                                </ ClickAwayListener>
                                </TableBody> 
                            </Table>
                        </TableContainer>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};


export default ProjectCard;