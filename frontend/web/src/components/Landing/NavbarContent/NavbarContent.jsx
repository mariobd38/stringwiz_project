import React from 'react';
import { useNavigate } from "react-router-dom";

import { IconChalkboard,IconAd2,IconBrandProducthunt,IconApps,IconSTurnRight,IconCalendarWeek,IconFiles,IconClipboardList,IconChevronRight,IconSettings,
    IconBrush,IconTargetArrow,IconTimeline,IconChartHistogram,IconLayoutKanban } from '@tabler/icons-react';
import { HoverCard,Group,UnstyledButton,Text,SimpleGrid,Divider,Center,Box,Button,Burger,Drawer,Collapse,ScrollArea,
        rem,useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import CocollabLogo from '../../Logo/logo';
import NavbarLinkItem from './NavbarLinkItem/navbarLinkItem';

import './NavbarContent.css';
import classes from './NavbarContent.module.css';


const platformMockdata = [
    {
        icon: IconClipboardList,
        title: 'Tasks and Projects',
        description: 'Manage and monitor your progress to achieve your goals',
    },
    {
        icon: IconFiles,
        title: 'Docs',
        description: 'Create and collaborate on online documents',
    },
    {
        icon: IconCalendarWeek,
        title: 'Calendar',
        description: 'Organize and keep track of events and deadlines',
    },
    {
        icon: IconApps,
        title: 'Apps and Integration',
        description: 'Align your progress into a single workspace',
    },
    {
        icon: IconSTurnRight,
        title: 'Workflow and Automation',
        description: 'Make work easier, faster, and more consistent',
    },
    {
        icon: IconChalkboard,
        title: 'Whiteboards',
        description: 'Bring ideas into life with visual collaboration',
    },
];

const solutionsMockdata = [
    {
        icon: IconSettings,
        title: 'Engineering',
    },
    {
        icon: IconLayoutKanban,
        title: 'Agile Management',
    },
    {
        icon: IconBrush,
        title: 'Design',
    },
    {
        icon: IconTargetArrow,
        title: 'Goal Management',
    },
    {
        icon: IconBrandProducthunt,
        title: 'Product',
    },
    {
        icon: IconTimeline,
        title: 'Resource Planning',
    },
    {
        icon: IconAd2,
        title: 'Marketing',
    },
    {
        icon: IconChartHistogram,
        title: 'Technical Diagramming',
    },
];

const NavbarContent = (props) => {
    const {navbarBackground,scrollPosition} = props; 

    let navigate = useNavigate(); 
    const routeChange = (path) =>{ 
        navigate(path);
    }

    // mantine
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [solutionsOpened, { toggle: toggleSolutions }] = useDisclosure(false);
    const [platformOpened, { toggle: togglePlatform }] = useDisclosure(false);
    const theme = useMantineTheme();

    const platformLinks = <NavbarLinkItem mockdata={platformMockdata} drawerOpened={drawerOpened}/>
    const solutionsLinks = <NavbarLinkItem mockdata={solutionsMockdata} drawerOpened={drawerOpened}/>
    
    return (
        <Box pb={0} className={"sticky-top"}>
            <header className={classes.header} style={{backgroundColor: scrollPosition > 40 ? navbarBackground : 'transparent',
        borderBottom: scrollPosition > 40 ? '1.2px solid #c9c9c9' : 'none'}}>
                <Group justify="space-between" h="100%">
                    <CocollabLogo width={2.1} paddingBottom={0.4} fontSize={2.6} textColor={`${scrollPosition > 40 ? '4296af' : 'fafafa'}`}></CocollabLogo>

                    <Group h="100%" gap={15} visibleFrom="md" >
                        <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                            <HoverCard.Target>
                                <a href={() => false}
                                className={`${classes.link} ${scrollPosition > 40 ? 'landing-white-nav-top-link' : 'landing-nav-top-link'}`}
                                >
                                    <Center inline>
                                        <Box component="span" mr={5}>
                                        Platform
                                        </Box>
                                        {/* <IconChevronDown
                                            style={{ width: rem(16), height: rem(16) }}
                                            color={scrollPosition > 40 ? '#121212' : '#fafafa'}
                                        /> */}
                                    </Center>
                                </a>
                            </HoverCard.Target>

                            <HoverCard.Dropdown style={{ overflow: 'hidden', transform: scrollPosition > 40 ? 'translateY(15px)' : 'translateY(-2px)'  }}>
                                <Group justify="space-between" mb="sm">
                                    <Text fw={500}>Products</Text>
                                    {/* <Anchor href="#" fz="xs">
                                        View all
                                    </Anchor> */}
                                </Group>

                                {/* <Divider my="xs" /> */}

                                    <SimpleGrid cols={2} spacing={0}>
                                    {platformLinks}
                                    </SimpleGrid>

                                {/* <div className={classes.dropdownFooter}>
                                    <Group justify="space-between">
                                        <div>
                                            <Text fw={500} fz="sm">
                                                Get started
                                            </Text>
                                            <Text size="xs" c="dimmed">
                                                Their food sources have decreased, and their numbers
                                            </Text>
                                        </div>
                                        <Button variant="default">Get started</Button>
                                    </Group>
                                </div> */}
                            </HoverCard.Dropdown>
                        </HoverCard>

                        <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                            <HoverCard.Target>
                                <a href={() => false}
                                className={`${classes.link} ${scrollPosition > 40 ? 'landing-white-nav-top-link' : 'landing-nav-top-link'}`}
                                >
                                    <Center inline>
                                        <Box component="span" mr={5}>
                                        Solutions
                                        </Box>
                                    </Center>
                                </a>
                            </HoverCard.Target>

                            <HoverCard.Dropdown style={{ overflow: 'hidden',transform: scrollPosition > 40 ? 'translateY(15px)' : 'translateY(-2px)' }}>
                                <Group  mb="sm">
                                    <Text fw={500} style={{width: "50%"}}>Teams</Text>
                                    <Text fw={500}>Use Cases</Text>
                                    {/* <Anchor href="#" fz="xs">
                                        View all
                                    </Anchor> */}
                                </Group>

                                {/* <Divider my="xs" /> */}

                                    <SimpleGrid cols={2} spacing={0}>
                                    {solutionsLinks}
                                    </SimpleGrid>
                            </HoverCard.Dropdown>
                        </HoverCard>
                        <a href={() => false}
                        className={`${classes.link} ${scrollPosition > 40 ? 'landing-white-nav-top-link' : 'landing-nav-top-link'}`}
                        >
                        Resources
                        </a>
                        <a href={() => false}
                        className={`${classes.link} ${scrollPosition > 40 ? 'landing-white-nav-top-link' : 'landing-nav-top-link'}`}
                        >
                        Enterprise
                        </a>
                    </Group>

                    <Group visibleFrom="md">
                        <a href={() => false} onClick={() => routeChange('/login')} 
                            className={`lato-font pe-3 px-1 py-1 ${scrollPosition > 40 ? 'landing-white-nav-login-link' : 'landing-login-link'}`} style={{cursor: "pointer"}}>
                            Log In
                        </a>
                        <Button className="landing-register-link fafafa-color px-3 py-0 lato-font" onClick={() => routeChange('/signup')}>
                            Sign Up
                        </Button>
                    </Group>

                    <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="md" />
                </Group>
            </header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title=<CocollabLogo width={1.7} paddingBottom={0.3} fontSize={2.2} textColor={`4296af`}></CocollabLogo>
                hiddenFrom="md"
                zIndex={1000000}
            >
                <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
                    <Divider my="md" />
                    <UnstyledButton className={classes.link + " w-100"} onClick={togglePlatform}>
                        <Center inline className='d-flex justify-content-between w-100'>
                            <Box component="span" className={classes.platformlink}>
                                Platform
                            </Box>
                            <IconChevronRight
                                style={{ width: rem(25), height: rem(25), marginRight: rem(30) }}
                                color={theme.colors.blue[6]}
                            />
                        </Center>
                    </UnstyledButton>
                    <Collapse className='my-1' in={platformOpened}>{platformLinks}</Collapse>

                    <UnstyledButton className={classes.link + " w-100"} onClick={toggleSolutions}>
                        <Center inline className='d-flex justify-content-between w-100'>
                            <Box component="span" className={classes.solutionslink}>
                                Solutions
                            </Box>
                            <IconChevronRight
                                style={{ width: rem(25), height: rem(25), marginRight: rem(30) }}
                                color={theme.colors.blue[6]}
                            />
                        </Center>
                    </UnstyledButton>
                    
                    <Collapse className='my-1' in={solutionsOpened}>{solutionsLinks}</Collapse>

                    <a href={() => false} className={classes.link}>
                        Resources
                    </a>
                    <a href={() => false} className={classes.link}>
                        Enterprise
                    </a>

                    <Divider my="md" />

                    <Group className='m-auto' style={{width: "70%"}} justify="center" grow pb="xl" px="md">
                        <Button onClick={() => routeChange('/login')} 
                            className={`px-3 py-2 landing-navbar-collapse-login-button`} style={{borderRadius: "10px"}}>
                            Log In
                        </Button>
                        <Button className="px-3 py-2 landing-navbar-collapse-signup-button" style={{borderRadius: "10px"}}  onClick={() => routeChange('/signup')}>
                            Sign Up
                        </Button>
                    </Group>
                </ScrollArea>
            </Drawer>
        </Box>
    );
}

export default NavbarContent;
