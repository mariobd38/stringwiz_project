import React from 'react';

import Container from 'react-bootstrap/Container';

import Button from '@mui/material/Button';

import coconut from '../../../images/coconut.png';
import time_management from '../../../images/time_management.png';
import sharing_ideas from '../../../images/sharing_ideas.png';
import achievement from '../../../images/achievement.png';
import CocollabLogo from '../../../components/Logo/logo';

import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import SubjectRoundedIcon from '@mui/icons-material/SubjectRounded';

import './MainContent.css'

const MainContent = () => {

    return (
        <main>
            <div className="header">
                <Container className="pt-5">
                    <div className='row'>
                        <div className='col-12 col-lg-6 m-auto'>
                            <h1 className='fafafa-color top-left-header-text text-center'>Collab like never before
                                <span>
                                    <img src={coconut} className="coconut mw-100 ms-1 pb-3 ms-xl-2 w-100 text-center" alt="coconut" />
                                </span>
                            </h1>

                            <div className='text-center'>
                                <div className='fafafa-color description pt-3' style={{lineHeight: "1.3rem"}}>
                                    <p>Achieve effective results individually and collectively. </p>
                                    <p>Simple features. Simple solutions. </p>
                                </div>
                                
                                <div className="right-header-block pt-2 pb-4">
                                    <div className="d-flex justify-content-center pt-2">
                                        <a href="/signup">
                                            <Button className="register-home-page">
                                                Get Started
                                            </Button>
                                        </a>
                                    </div>
                
                                    <p className="description text-center pt-3" style={{ fontSize: '0.9em', color: '#fafafa' }}>
                                        No credit card needed · Start with a free plan
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6'>
                            <div className='d-md-flex justify-content-md-around'>
                                <div className='text-center'>
                                    <img src={time_management} className="illustration-landing" alt="" />
                                </div>
                                <div className='py-4 text-center'>
                                    <img src={achievement} className="illustration-landing" alt="" />
                                </div>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <div>
                                    <img src={sharing_ideas} className="illustration-landing" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>

                <div className="row m-0 pt-5">
                    <div className='col-1 col-md-2 d-flex align-items-center flex-column p-0'>
                        <div className='top-half '></div>
                        <div className='bottom-half'></div>
                    </div>
                    <div className='col-10 col-md-8 landing-info-div py-2 py-lg-3'>
                        <div className="row m-auto pt-3" >
                            <div className='col-12 col-lg-6 col-xl-5 col-xxl-4 text-center m-auto'>
                                <CocollabLogo width={2.2} paddingBottom={0.35} fontSize={2.9} href={() => false}></CocollabLogo>
                            </div>
                            <div className='col-12 col-lg-6 col-xl-7 col-xxl-8 text-center m-auto'>
                                <h1 className='nunito-sans-font landing-info-header'>Better vision for better connections</h1>
                                <p className='nunito-sans-font pb-0' >Discover unlimited possibilities across our powerful features</p>
                                <p className='nunito-sans-font' style={{lineHeight:"0.2rem"}}>Plan, manage, and collab on the go.</p>                                
                                <Button className='learn_more-home-page mt-2'>Learn More</Button>
                            </div>
                        </div>                        
                    </div>
                    <div className='col-1 col-md-2 d-flex align-items-center flex-column p-0'>
                        <div className='top-half'></div>
                        <div className='bottom-half'></div>
                    </div>
                </div>
            </div>
            <div className='landing-page-features-div text-center py-5'>
                <div className='landing-page-features-div-header lato-font'>
                    All-in-one products to manage every aspect of your business
                </div>
                <Container>
                    <div className='row d-flex mt-5 justify-content-center'>
                        <div className='col-12 col-md-6 col-xl-4'>
                            <div className='landing-page-features-card-container m-auto mb-4 mb-md-0'>
                                <div className="landing-page-features-card-container-bkg" style={{backgroundColor: "#e63946"}}>
                                </div>
                                <div className="landing-page-features-card-profile">
                                    <AssignmentRoundedIcon className='landing-page-features-card-icon' style={{color: "#e63946"}}/>
                                    <div className='landing-page-features-card-name'>Task Management</div>
                                    <div className='landing-page-features-card-desc pt-2'v>Stay organized, set priorities, and track progress with ease.</div>
                                    <Button className='landing-page-features-card-button'>Discover</Button>

                                </div>
                            </div>  
                        </div>
                        <div className='col-12 col-md-6 col-xl-4'>
                            <div className='landing-page-features-card-container m-auto mb-4 mb-xl-0'>
                                <div className="landing-page-features-card-container-bkg" style={{backgroundColor: "#ffb703"}}>
                                </div>
                                <div className="landing-page-features-card-profile">
                                    <FolderRoundedIcon className='landing-page-features-card-icon' style={{color: "#ffb703"}}/>
                                    <div className='landing-page-features-card-name'>Project Management</div>
                                    <div className='landing-page-features-card-desc mx-3 pt-2'v>Streamline your projects with our comprehensive project management tools.</div>
                                    <Button className='landing-page-features-card-button'>Discover</Button>

                                </div>
                            </div>  
                        </div>
                        <div className='col-12 col-md-6 col-xl-4'>
                            <div className='landing-page-features-card-container m-auto '>
                                <div className="landing-page-features-card-container-bkg" style={{backgroundColor: "#2a9d8f"}}>
                                </div>
                                <div className="landing-page-features-card-profile">
                                    <EventRoundedIcon className='landing-page-features-card-icon' style={{color: "#2a9d8f"}}/>
                                    <div className='landing-page-features-card-name'>Calendar</div>
                                    <div className='landing-page-features-card-desc mx-3 pt-2'v>Easily manage your time, schedule meetings, and track important events.</div>
                                    <Button className='landing-page-features-card-button'>Discover</Button>

                                </div>
                            </div>  
                        </div>
                         <div className='col-12 col-md-6 col-xl-4'>
                            <div className='landing-page-features-card-container mt-4 mt-md-0 mt-xl-5'>
                                <div className="landing-page-features-card-container-bkg" style={{backgroundColor: "#560bad"}}>
                                </div>
                                <div className="landing-page-features-card-profile">
                                    <DashboardIcon className='landing-page-features-card-icon' style={{color: "#560bad"}}/>
                                    <div className='landing-page-features-card-name'>Boards</div>
                                    <div className='landing-page-features-card-desc mx-3 pt-2'v>Effortlessly organize tasks and projects with customizable CocoBoards.</div>
                                    <Button className='landing-page-features-card-button'>Discover</Button>
                                </div>
                            </div>  
                        </div>
                        
                        <div className='col-12 col-md-6 col-xl-4'>
                            <div className='landing-page-features-card-container mt-4 mt-xl-5'>
                                <div className="landing-page-features-card-container-bkg" style={{backgroundColor: "#4cc9f0"}}>
                                </div>
                                <div className="landing-page-features-card-profile">
                                    <SubjectRoundedIcon className='landing-page-features-card-icon' style={{color: "#4cc9f0"}}/>
                                    <div className='landing-page-features-card-name'>Documentation</div>
                                    <div className='landing-page-features-card-desc mx-4 pt-2'v>Manage and collaborate on documents with advanced version control and access management.</div>
                                    <Button className='landing-page-features-card-button'>Discover</Button>
                                </div>
                            </div>  
                        </div>
                        
                        <div className='col-12 col-md-6 col-xl-4'>
                            <div className='landing-page-features-card-container mt-4 mt-xl-5'>
                                <div className="landing-page-features-card-container-bkg" style={{backgroundColor: "#03045e"}}>
                                </div>
                                <div className="landing-page-features-card-profile">
                                    <GroupsRoundedIcon className='landing-page-features-card-icon' style={{color: "#03045e"}}/>
                                    <div className='landing-page-features-card-name'>Meetings</div>
                                    <div className='landing-page-features-card-desc mx-1 pt-2'v>Conduct meetings with integrated scheduling, agenda management, and seamless video conferencing.</div>
                                    <Button className='landing-page-features-card-button'>Discover</Button>

                                </div>
                            </div>  
                        </div>
                    </div>
                </Container>
            </div>
            
        </main>
    );
};

export default MainContent;