import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

// import { motion } from 'framer-motion';

import team_work from '../../../assets/illustrations/landing/team_work.png';
import archery_goals from '../../../assets/illustrations/landing/archery_goals.png';
import shared_goals from '../../../assets/illustrations/landing/shared_goals.png';

import {  Container,Title, SimpleGrid, Text, Button, ThemeIcon, Grid, Card, Image, Badge, Group, rem } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

import { IconWorld, IconApps, IconSTurnRight,IconBulb,IconChevronRight, IconChevronLeft } from '@tabler/icons-react';

import home_screenshot from '../../../assets/screenshots/home_screenshot.png';
import Dribble_logo from '../../../assets/logos/dribble_logo.png';
import Mariott_logo from '../../../assets/logos/mariott_logo.png';
import Twitch_logo from '../../../assets/logos/twitch_logo.png';
import Shopify_logo from '../../../assets/logos/shopify_logo.png';
import Spotify_logo from '../../../assets/logos/spotify_logo.png';
import Monzo_logo from '../../../assets/logos/monzo_logo.png';

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
    { icon: <img className='main-content-slide-logo' src={Dribble_logo} alt="dribble" /> },
    { icon: <img className='main-content-slide-logo' src={Mariott_logo} alt="mariott" /> },
    { icon: <img className='main-content-slide-logo' src={Twitch_logo} alt="twitch"  /> },
    { icon: <img className='main-content-slide-logo' src={Shopify_logo} alt="shopify" /> },
    { icon: <img className='main-content-slide-logo' src={Spotify_logo} alt="spotify"  /> },
    { icon: <img className='main-content-slide-logo' src={Monzo_logo} alt="monzo"  /> },
];

const useCases = [
    { team: 'Engineering', illustration: engineering_team, width: 180, badgeColor: "blue", description: "Ship more, worry less. Build and plan things better, together, and one step at a time with powerful features." },
    { team: 'Marketing', illustration: marketing_team, width: 165, badgeColor: "pink", description: "Boost your brand, create impactful campaigns and engage your audience with the best tools and insights" },
    { team: 'Product', illustration: product_team, width: 285, badgeColor: "teal", description: "Transform ideas into reality. Strategize, develop, and manage products effectively with collaborative tools." },
    { team: 'Design', illustration: design_team, width: 185, badgeColor: "violet", description: "Collaborate, create, and refine designs seamlessly with intuitive tools and innovative features." },
]

const MainContent = () => {
    let navigate = useNavigate(); 

    const routeChange = (route) =>{ 
        navigate(route);
    }

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.scrollY;
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


    return (
        <div>
            <main className='landing-header'>
                <NavbarContent navbarBackground={"#fafafa"} scrollPosition={scrollPosition}/>
                <div >
                    <div >
                        <div className="container py-5">
                            <div className='row'>
                                <div className='col-12 col-lg-6 m-auto'>
                                    <div style={{lineHeight: "4rem"}} className='fafafa-color top-left-header-text d-flex  justify-content-md-between'>
                                        Collab like never before
                                    </div>

                                    <div>
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
                                
                                <Container className='d-flex justify-content-center' mt={55}>
                                    <img src={home_screenshot} alt="home screenshot" className='landing-home-screenshot' />
                                </Container>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>

                <div className='landing-page-features-div my-3'>

                    <div className='landing-main-content-features-wrapper px-3 px-md-5 m-0'>
                        <div className='d-none d-sm-block' style={{marginBottom: "180px"}}>
                            <div className="mx-auto logos-slider" style={{ width: "100%" }}>
                                <div className='d-flex justify-content-center' >
                                    <Text className='mb-5' fw={600} style={{fontSize: "2.1rem", color: "#505050"}}>Trusted by</Text>
                                </div>

                                <div className="d-flex" >
                                    {slides.map((slide, index) => (
                                        <div key={index} className="flex-shrink-0" style={{ width: `${100 / slides.length}%` }}>
                                            <div className="d-flex align-items-center justify-content-center">
                                                {slide.icon}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>




                        
                        <Grid gutter={{ base: 30, xs: 'md', md: 'xl', xl: 80 }}>
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


                        <Container size={700} className="landing-main-content-use-cases-wrapper mt-5 py-5 pb-3">
                            <Text className="landing-main-content-use-cases-suptitle">Use cases</Text>

                            <Title className="landing-main-content-use-cases-title" order={2}>
                                Cocollabs designed for <span style={{textDecoration: '#127bd6 solid underline',textUnderlineOffset: "10px"}}>everyone</span>
                            </Title>

                            <Container p={10}>
                                <Text c="dimmed" className="landing-main-content-use-cases-description">
                                    Whether you are looking for individual or enterprise solutions, discover how our platform is fitting for your use case. 
                                    Achieve results and collaborate easily with your team.
                                </Text>
                            </Container>
                        </Container>

                        <div className='d-flex justify-content-end align-items-center'>
                            <a href={() => false} className='landing-main-content-use-cases-all'>
                                <Text style={{fontSize: "1rem"}} fw={600} c="blue">Check out all cases 
                                <span className='ps-2 landing-main-content-use-cases-all-arrow'><IconChevronRight w={16} height={16}/></span>
                            </Text>
                            </a>
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