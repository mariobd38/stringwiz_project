import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { motion } from 'framer-motion';

import team_work from '../../../assets/illustrations/landing/team_work.png';
import archery_goals from '../../../assets/illustrations/landing/archery_goals.png';
import shared_goals from '../../../assets/illustrations/landing/shared_goals.png';

import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import SubjectRoundedIcon from '@mui/icons-material/SubjectRounded';

import Adobe_logo from '../../../assets/logos/adobe_logo.png';
import Hubspot_logo from '../../../assets/logos/hubspot_logo.png';
import Gitlab_logo from '../../../assets/logos/gitlab_logo.png';
import Tripadvisor_logo from '../../../assets/logos/tripadvisor_logo.png';
import Houzz_logo from '../../../assets/logos/houzz_logo.png';

import NavbarContent from '../NavbarContent/NavbarContent';

import './MainContent.css'

const MainContent = () => {
    let navigate = useNavigate(); 

    const routeChange = (route) =>{ 
        navigate(route);
    }

    // const [logos, setLogos] = useState(null);

    // useEffect(() => {
    //     const logosSlide = document.querySelector(".logos-slide");
    //     if (logosSlide) {
    //         const copy = logosSlide.cloneNode(true);
    //         setLogos(copy);
    //     }
    // }, []);

    // useEffect(() => {
    //     if (logos) {
    //         document.querySelector('.landing-page-logos-container').appendChild(logos);
    //     }
    // }, [logos]);

    const slides = [
        { icon: <img className='mt-1 main-content-slide-logo' src={Hubspot_logo} alt="hubspot" /> },
        { icon: <img className='mt-1 main-content-slide-logo' src={Gitlab_logo} alt="gitlab" /> },
        { icon: <img className='mt-1 main-content-slide-logo' src={Adobe_logo} alt="adobe"  /> },
        { icon: <img className='mt-1 main-content-slide-logo' src={Tripadvisor_logo} alt="tripadvisor" /> },
        { icon: <img className='mt-1 main-content-slide-logo' src={Houzz_logo} alt="houzz"  /> },
    ];
    const duplicatedSlides = [...slides,...slides];

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);


    return (
        <div>
        <main className='landing-header'>
            <NavbarContent navbarBackground={"#fafafa"} scrollPosition={scrollPosition}/>
            <div >
            

            
            <div className="">
                <div className="container py-5">
                    <div className='row'>
                        <div className='col-12 col-lg-6 m-auto'>
                            <div style={{lineHeight: "4rem"}}
                            className='fafafa-color top-left-header-text d-flex text-center justify-content-md-between'>Collab like never before
                                {/* <span>
                                    <img src={coconut} className="coconut mw-100 ms-1 pb-3 ms-xl-2 w-100 text-center" alt="coconut" />
                                </span> */}
                            </div>

                            <div className=''>
                                <div className='fafafa-color landing-header-description-text pt-3' style={{lineHeight: "1.8rem"}}>
                                    <p>Bringing users closer to effective results individually and collectively. 
                                        Discover what you can achieve with the platform made for collaboration. 
                                    </p>
                                    <p>Simple features. Simple solutions. </p>
                                </div>
                                
                                <div className="pt-4 pb-4 text-center justify-content-md-between">
                                    <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3">
                                        <button className="landing-get-started-button " onClick={() => routeChange('/signup')}>
                                            Get Started
                                        </button>
                                        <button className="landing-learn-more-button">
                                            Learn More
                                        </button>
                                    </div>
                                    <div className="landing-header-description-text d-flex justify-content-center justify-content-lg-start pt-4" style={{ fontSize: '0.9em', color: '#fafafa' }}>
                                        No credit card needed · Start with a free plan
                                    </div>
                
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6'>
                            <div className='d-md-flex justify-content-md-center gap-5'>
                                <div className='text-center'>
                                    <img src={archery_goals} className="illustration-landing" alt="" />
                                </div>
                                <div className='py-4 text-center'>
                                    <img src={team_work} className="illustration-landing" alt="" />
                                </div>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <div>
                                    <img src={shared_goals} className="illustration-landing" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='mt-2 d-none d-sm-block'>
                        
                        <div className="relative overflow-hidden mx-auto logos-slider" style={{ width: "100%" }}>
                            <div className="position-absolute inset-0"></div>
                            <motion.div
                                className="d-flex"
                                animate={{
                                    x: ['0%', '-100%'],
                                    transition: {
                                        ease: 'linear',
                                        duration: 15,
                                        repeat: Infinity,
                                    }
                                }}
                            >
                                {duplicatedSlides.map((slide, index) => (
                                    <div key={index} className="flex-shrink-0" style={{ width: `${100 / slides.length}%` }}>
                                        <div className="d-flex align-items-center justify-content-center h-100">
                                            {slide.icon}
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        <div className='m-auto d-flex justify-content-center nunito-sans-font fafafa-color' style={{fontSize: "1.6rem"}}>
                            Find out why we are trusted by developers from top companies
                        </div>
                    </div>
                </div>
                </div>


                
                {/* <div className="row m-0 pt-5">
                    <div className='col-1 col-md-2 d-flex align-items-center flex-column p-0'>
                        <div className='top-half '></div>
                        <div className='bottom-half'></div>
                    </div>
                    <div className='col-10 col-md-8 landing-info-div py-2 py-lg-3'>
                        <div className="row m-auto py-3" >
                            <div className='col-12 col-lg-6 col-xl-5 col-xxl-4 text-center m-auto'>
                                <a href={() => false}>
                                    <CocollabLogo width={2.2} paddingBottom={0.35} fontSize={2.9} href={() => false} textColor={'fafafa'}></CocollabLogo>
                                </a>
                            </div>
                            <div className='col-12 col-lg-6 col-xl-7 col-xxl-8 text-center m-auto'>
                                <h1 className='nunito-sans-font landing-info-header'>Better vision for better connections</h1>
                                <p className='nunito-sans-font pb-0' >Discover unlimited possibilities across our powerful features</p>
                                <p className='nunito-sans-font' style={{lineHeight:"0.2rem"}}>Plan, manage, and collab on the go.</p>                                
                                <button className='learn_more-home-page mt-2'>Learn More</button>
                            </div>
                        </div>                        
                    </div>
                    <div className='col-1 col-md-2 d-flex align-items-center flex-column p-0'>
                        <div className='top-half'></div>
                        <div className='bottom-half'></div>
                    </div>
                </div> */}
            </div>

            <div className='landing-page-features-div py-4'>
                <div className='landing-page-features-div-header text-center pt-3'>
                    All-in-one products to manage every aspect of your business
                </div>
                <div className='container'>
                    <div className='row d-flex mt-5 justify-content-center text-center'>
                        <div className='col-12 col-md-6 col-xl-4'>
                            <div className='landing-page-features-card-container m-auto mb-4 mb-md-0'>
                                <div className="landing-page-features-card-container-bkg" style={{backgroundColor: "#e63946"}}>
                                </div>
                                <div className="landing-page-features-card-profile">
                                    <AssignmentRoundedIcon className='landing-page-features-card-icon' style={{color: "#e63946"}}/>
                                    <div className='landing-page-features-card-name'>Task Management</div>
                                    <div className='landing-page-features-card-desc pt-2'>Stay organized, set priorities, and track progress with ease.</div>
                                    <button className='landing-page-features-card-button'>Discover</button>

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
                                    <div className='landing-page-features-card-desc mx-3 pt-2'>Streamline your projects with our comprehensive project management tools.</div>
                                    <button className='landing-page-features-card-button'>Discover</button>
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
                                    <div className='landing-page-features-card-desc mx-3 pt-2'>Easily manage your time, schedule meetings, and track important events.</div>
                                    <button className='landing-page-features-card-button'>Discover</button>
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
                                    <div className='landing-page-features-card-desc mx-3 pt-2'>Effortlessly organize tasks and projects with customizable CocoBoards.</div>
                                    <button className='landing-page-features-card-button'>Discover</button>
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
                                    <div className='landing-page-features-card-desc mx-4 pt-2'>Manage and collaborate on documents with advanced version control and access management.</div>
                                    <button className='landing-page-features-card-button'>Discover</button>
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
                                    <div className='landing-page-features-card-desc mx-1 pt-2'>Conduct meetings with integrated scheduling, agenda management, and seamless video conferencing.</div>
                                    <button className='landing-page-features-card-button'>Discover</button>

                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
            
        </main>
        </div>
    );
};

export default MainContent;