import React from 'react';

import Container from 'react-bootstrap/Container';

import Button from '@mui/material/Button';

import discover from '../../../images/discover.png';
import addTask from '../../../images/add_task.png';
import collaboration from '../../../images/collaboration.png';
import coconut from '../../../images/coconut.png';
import time_management from '../../../images/time_management.png';
import sharing_ideas from '../../../images/sharing_ideas.png';
import achievement from '../../../images/achievement.png';
import CocollabLogo from '../../../components/Logo/logo';

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
                        <div className="row m-auto pt-3">
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
            
            <div className='pt-5 pb-5 bg-illustrations-div '>
                <div className='d-flex justify-content-around flex-column flex-lg-row align-items-center align-items-lg-stretch pb-5'>
                    <div className='d-flex flex-column align-items-center home-description-card mb-4 mb-lg-0 px-5 py-4 px-lg-0 py-lg-3  px-xl-4 py-xl-4 px-xxl-5'>
                        <div className='circle mb-4'>
                            <a className="m-auto" href={() => false}>
                                <img src={collaboration} className="home-illustration" alt="collaboration" />
                            </a>
                        </div>
                        <div className='text-center circle-text'>
                            <p>Unleash your team's full potential:<span className='main-key-words'> Simplify</span>,<span className='main-key-words'> Organize</span>, and <span className='main-key-words'>Achieve with Ease</span></p>
                        </div>
                    </div>
                    <div className='d-flex flex-column align-items-center home-description-card mb-4 mb-lg-0 px-5 py-4 px-lg-0 py-lg-3 px-xl-4 py-xl-4 px-xxl-5'>
                        <div className='circle mb-4'>
                            <a className="m-auto" href={() => false}>
                                <img src={discover} className="home-illustration" alt="discover" />
                            </a>
                        </div>
                        <div className='text-center circle-text'>
                            <p>Embark on a journey into the world <span className='main-key-words'>planning</span> and <span className='main-key-words'>scheduling</span>, optimizing productivity and efficiency</p>
                        </div>
                    </div>
                    <div className='d-flex pt-3 flex-column align-items-center home-description-card mb-4 mb-lg-0 px-5 py-4 px-lg-0 py-lg-3  px-xl-4 py-xl-4 px-xxl-5 '>
                        <div className='circle mb-4'>
                            <a className="m-auto" href={() => false}>
                                <img src={addTask} className="home-illustration" alt="addTask" />
                            </a>
                        </div>
                        <div className='text-center circle-text'>
                            <p>We <span className='main-key-words'>empower</span> you to focus on scaling your company by efficiently <span className='main-key-words'>managing</span> time-consuming tasks
                            </p>
                        </div>
                    </div>
                </div>
                <div className='pt-lg-4'>
                    <h3 className='text-center fafafa-color lato-font-600 features-header pt-5'>Our features</h3>
                    <div className='m-auto pt-5'>
                        <div className='d-flex justify-content-center'>
                            <div className='feature-number mx-4'>
                                <div className='fafafa-color nunito-sans-font feature-number-text '>
                                    1
                                </div>
                            </div>
                            <div className='feature-desc fafafa-color mx-4 nunito-sans-font'>
                                Feature 1
                            </div>
                        </div>
                        <div className='d-flex justify-content-center pt-5'>
                            <div className='feature-number mx-4'>
                                <div className='fafafa-color nunito-sans-font feature-number-text'>
                                    2
                                </div>
                            </div>
                            <div className='feature-desc fafafa-color mx-4 nunito-sans-font'>
                                Feature 2
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MainContent;