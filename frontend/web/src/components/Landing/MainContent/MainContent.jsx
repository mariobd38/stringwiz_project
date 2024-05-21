import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";

import { motion } from 'framer-motion';

import team_work from '../../../assets/illustrations/landing/team_work.png';
import archery_goals from '../../../assets/illustrations/landing/archery_goals.png';
import shared_goals from '../../../assets/illustrations/landing/shared_goals.png';

// import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
// import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import EventRoundedIcon from '@mui/icons-material/EventRounded';
// import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
// import SubjectRoundedIcon from '@mui/icons-material/SubjectRounded';


import {  Container,Title, SimpleGrid, Text, Button, ThemeIcon, Grid, Card, Image, Badge, Group, rem } from '@mantine/core';
import { Carousel } from '@mantine/carousel';


import { IconWorld, IconApps, IconSTurnRight,IconBulb,IconChevronRight, IconChevronLeft } from '@tabler/icons-react';

import Adobe_logo from '../../../assets/logos/adobe_logo.png';
import Hubspot_logo from '../../../assets/logos/hubspot_logo.png';
import Gitlab_logo from '../../../assets/logos/gitlab_logo.png';
import Tripadvisor_logo from '../../../assets/logos/tripadvisor_logo.png';
import Houzz_logo from '../../../assets/logos/houzz_logo.png';
import engineering_team from '../../../assets/illustrations/landing/engineering_team.png';
import marketing_team from '../../../assets/illustrations/landing/marketing_team.png';
import product_team from '../../../assets/illustrations/landing/product_team.png';
import design_team from '../../../assets/illustrations/landing/design_team.png';

import NavbarContent from '../NavbarContent/NavbarContent';

import '@mantine/carousel/styles.css';
import './MainContent.css'

const features = [
    {
        icon: IconSTurnRight,
        title: 'Automation at its finest',
        description: 'Reduce costs and time with effective no-code automation',
    },
    {
        icon: IconApps,
        title: 'Integrate with ease',
        description: 'All your workspace apps moved into a single interactive platform',
    },
    {
        icon: IconWorld,
        title: 'Keep track of your endless goals',
        description: 'Enhance success with easy management of your goals and milestones',
    },
    {
        icon: IconBulb,
        title: 'Capture and share ideas',
        description: 'Whiteboards is the easiest way to share brilliant ideas with your team',
    },
];

const slides = [
    { icon: <img className='mt-1 main-content-slide-logo' src={Hubspot_logo} alt="hubspot" /> },
    { icon: <img className='mt-1 main-content-slide-logo' src={Gitlab_logo} alt="gitlab" /> },
    { icon: <img className='mt-1 main-content-slide-logo' src={Adobe_logo} alt="adobe"  /> },
    { icon: <img className='mt-1 main-content-slide-logo' src={Tripadvisor_logo} alt="tripadvisor" /> },
    { icon: <img className='mt-1 main-content-slide-logo' src={Houzz_logo} alt="houzz"  /> },
];

const useCases = [
    { team: 'Engineering', illustration: engineering_team, width: 180, badgeColor: "blue", description: "Ship more, worry less. Build and plan things better, together, and one step at a time with powerful features." },
    { team: 'Marketing', illustration: marketing_team, width: 165, badgeColor: "pink", description: "Ship more, worry less. Build and plan things better, together, and one step at a time with powerful features." },
    { team: 'Product', illustration: product_team, width: 285, badgeColor: "teal", description: "Ship more, worry less. Build and plan things better, together, and one step at a time with powerful features." },
    { team: 'Design', illustration: design_team, width: 185, badgeColor: "violet", description: "Ship more, worry less. Build and plan things better, together, and one step at a time with powerful features." },

]
const duplicatedSlides = [...slides,...slides];

const MainContent = () => {
    let navigate = useNavigate(); 

    const routeChange = (route) =>{ 
        navigate(route);
    }

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

    const items = features.map((feature) => (
        <div key={feature.title} style={{color: "#121212"}}>
          <ThemeIcon
            size={44}
            radius="md"
            variant="gradient"
            gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
          >
            <feature.icon style={{ width: rem(26), height: rem(26) }} stroke={1.5} />
          </ThemeIcon>
          <Text fz="lg" mt="sm" fw={500}>
            {feature.title}
          </Text>
          <Text  fz="sm" style={{color: "#737373"}}>
            {feature.description}
          </Text>
        </div>
      ));

      const carouselRef = useRef(null);
      const [slideCount, setSlideCount] = useState(0);
    
      useEffect(() => {
        if (carouselRef.current) {
          const slides = carouselRef.current.querySelectorAll('.mantine-Carousel-slide');
          setSlideCount(slides.length);
          console.log(slides.length);
        }
      }, []);


    return (
        <div>
            <main className='landing-header'>
                <NavbarContent navbarBackground={"#fafafa"} scrollPosition={scrollPosition}/>
                <div >
                <div className="">
                    <div className="container py-5">
                        <div className='row'>
                            <div className='col-12 col-lg-6 m-auto'>
                                <div style={{lineHeight: "4rem"}} className='fafafa-color top-left-header-text d-flex  justify-content-md-between'>
                                    Collab like never before
                                </div>

                                <div className=''>
                                    <div className='fafafa-color landing-header-description-text pt-3' style={{lineHeight: "1.8rem"}}>
                                        <p>Bringing users closer to effective results individually and collectively. 
                                            Discover what you can achieve with the platform made for collaboration. 
                                        </p>
                                        <p>Simple features. Simple solutions. </p>
                                    </div>
                                    
                                    <div className="pt-4 pb-4 text-center justify-content-md-between">
                                        <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3 landing-hero-buttons">
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
                        

                        
                        {/* <div className='mt-2 d-none d-sm-block'>
                            
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
                        </div> */}
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

                <div className='landing-page-features-div my-3'>

                    <div className='landing-main-content-features-wrapper px-3 px-md-5'>
                        <Grid gutter={80}>
                            <Grid.Col span={{ base: 12, md: 5 }}>
                                <Title className='landing-main-content-features-title' order={1}>
                                    The platform made for collaboration
                                </Title>
                                <Text style={{color: '#737373'}}>
                                    Build anything you can dream of in a single platform - Cocollabs provides
                                    amazing features that cover you in any solution
                                </Text>

                                <Button
                                    variant="gradient"
                                    gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
                                    size="lg"
                                    radius="md"
                                    mt="xl"
                                >
                                    Get started
                                </Button>
                            </Grid.Col>
                            
                            <Grid.Col span={{ base: 12, md: 7 }}>
                                <SimpleGrid cols={{ base: 1, md: 2 }} spacing={25}>
                                    {items}
                                </SimpleGrid>
                            </Grid.Col>
                        </Grid>


                        <Container size={700} className="landing-main-content-use-cases-wrapper mt-3 py-5 pb-4">
                            <Text className="landing-main-content-use-cases-suptitle">Use cases</Text>

                            <Title className="landing-main-content-use-cases-title" order={2}>
                                Cocollabs designed for <span style={{textDecoration: '#127bd6 wavy underline'}}>everyone</span>
                            </Title>

                            <Container p={10}>
                                <Text c="dimmed" className="landing-main-content-use-cases-description">
                                    Whether you are looking for individual or enterprise solutions, discover how our platform is fitting for your use case. 
                                    Achieve results and collaborate easily with your team.
                                </Text>
                            </Container>
                        </Container>

                        <div className='d-flex justify-content-between'>
                            <Text style={{fontSize: "1.6rem"}} fw={700} c="dark">Teams</Text>
                            
                        
                        </div>

                        <Carousel
                            dragFree
                            mt="10"
                            loop
                            height={310}
                            controlsOffset="xs"
                            slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
                            slideGap={{ base: 0, sm: 'md' }}
                            align="start"
                            className="landing-main-content-use-cases-carousel"
                            nextControlIcon={<IconChevronRight className="landing-main-content-use-cases-indicator" />}
                            previousControlIcon={<IconChevronLeft className="landing-main-content-use-cases-indicator" />}
                            ref={carouselRef}
                          >
                           {useCases.map((item,index) => (
                                <Carousel.Slide key={index} className='d-flex align-items-end'>
                                <Card shadow="sm" padding="lg" radius="md" withBorder className='landing-main-content-use-cases-card'>
                                    <Card.Section style={{backgroundColor: "#f1faee"}}>
                                        <Image
                                        src={item.illustration}
                                        className='m-auto'
                                        height={170}
                                        w={item.width}
                                        alt={item.team}
                                        />
                                    </Card.Section>
                                    <div style={{height: "105px"}}>
                                    <Group justify="space-between" mt="md" mb="xs">
                                        <Text fw={500}>{item.team}</Text>
                                        <Badge color={item.badgeColor}>Learn More</Badge>

                                    </Group>

                                    <Text size="sm" c="dimmed">
                                        {item.description}
                                    </Text>
                                    </div>
                                </Card>
                            </Carousel.Slide >
                            ))}
                        </Carousel>
                        
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MainContent;