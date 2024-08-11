
// import React from 'react';

// import {
//     TextInput,
//     Avatar,
//     UnstyledButton,
//     Badge,
//     Text,
//     Tooltip,
//     rem,
//   } from '@mantine/core';
//   import { IconHome, IconDotsCircleHorizontal, IconFile, IconChartPie2,IconCalendar,IconTargetArrow,IconInbox,IconCheckbox } from '@tabler/icons-react';
//   import classes from './navbarSearch.module.css';


// import './homeSidebar.css'
// const HomeSidebar = (props) => {
//     const {userFullName,userEmail,openSidebarToggle} = props;
//     // const [userFullName] = useLocalState("", "userFullName");
//     const firstLetter = userFullName[0].toUpperCase();


//     const links = [
//         { icon: IconHome, label: 'Home' },
//         { icon: IconInbox, label: 'Inbox', notifications: 4 },
//         { icon: IconCheckbox, label: 'Tasks', notifications: 4 },
//         { icon: IconFile, label: 'Docs' },
//         { icon: IconCalendar, label: 'Calendar' },
//         // { icon: IconChartPie2, label: 'Analytics' },
//         // { icon: IconTargetArrow, label: 'Objectives' },
//         {icon: IconDotsCircleHorizontal, label: 'More' }
//     ];
      


//     const profileLink =
//         <>
//         {openSidebarToggle ? 
//             <div className='home-sidebar-profile-parent-div active'>
                
//                 <UnstyledButton className={`${classes.mainLink} ${classes.profile} mb-0`}>
//                     <div className='d-flex gap-5 align-items-center justify-content-between w-100'>

//                     <Avatar color="cyan" bd='1px solid cyan' radius="sm">{firstLetter}</Avatar>

//                         {/* <div>
//                             <Text className='home-sidebar-profile-parent-div-workspace-name' c='#d5d7d9' ff='Lato' fw={700} fz={16}>{userFullName}</Text>
//                             <Text className='home-sidebar-profile-parent-div-workspace-name' c='#d5d7d9' ff='Lato' fz={16}>{userEmail}</Text>
//                         </div> */}
//                     </div>
//                 </UnstyledButton>
//             </div>
            
            
//             : 
//             <UnstyledButton  className={`${classes.mainLink} ${classes.profile} mb-0`}>
//                 <Avatar color="cyan" bd='1px solid cyan' radius="sm">{firstLetter}</Avatar>

//                 {/* <div className={classes.mainLinkInner + " d-flex justify-content-center"}> */}
//                     {/* <link.icon justify='center' m={0} size={20} className={classes.mainLinkIcon} stroke={1.5} /> */}
//                 {/* </div> */}
//             </UnstyledButton>
//             }

        
//         </>;
      
//         const mainLinks = links.map((link) => (
//             <>
//                 {openSidebarToggle ? 
//                     <UnstyledButton key={link.label} className={`${classes.mainLink} ${classes.active}`}>
//                         <div className={classes.mainLinkInner}>
//                             <link.icon color='#868e96' size={25} className={`${classes.mainLinkIcon} ${classes.active}`} stroke={2} />
//                         <span style={{fontFamily: 'Lato', fontWeight: "600", fontSize: "15px", color: "#d0d2d4"}}>{link.label}</span>
//                         </div>
//                         {link.notifications && (
//                         <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
//                             {link.notifications}
//                         </Badge>
//                         )}
//                     </UnstyledButton>
                
//                 : 
//                 <Tooltip label={link.label} position="right" withArrow arrowOffset={10} arrowSize={4} bg='#121212' c='#e4e6e8' openDelay={500} offset={{ mainAxis: 10 }}>
//                     <UnstyledButton key={link.label} className={classes.mainLink}>
//                         <div className={`${classes.mainLinkInner} d-flex justify-content-center`}>
//                             <div className={classes.iconWrapper}>
//                             <link.icon
//                                 justify='center'
//                                 m={0}
//                                 size={25}
//                                 className={classes.mainLinkIcon}
//                                 stroke={2}
//                             />
//                             {link.notifications &&
//                             <Badge circle size="xs" color="blue" className={classes.badge}>
//                                 {link.notifications}
//                             </Badge>
//                             }
//                             </div>
//                         </div>
//                     </UnstyledButton>
//                 </Tooltip>
//                 }
            
//             </>
            
//         ));

//     return (
//         <nav className={`${classes.navbar} ${openSidebarToggle ? 'active' : ''}`} 
//         style={{
//             'width': openSidebarToggle ? rem(260) : rem(80),
//           }}
//         >

//             {/* <TextInput
//                 placeholder="Search"
//                 size="xs"
//                 leftSection={<IconSearch style={{ width: rem(12), height: rem(12) }} stroke={1.5} />}
//                 rightSectionWidth={70}
//                 rightSection={<Code className={classes.searchCode}>Ctrl + K</Code>}
//                 styles={{ section: { pointerEvents: 'none' } }}
//                 mb="sm"
//             /> */}

//             <div className={classes.section}>
//                 <div className={classes.profile}>{profileLink}</div>
//                 {/* <div className={classes.mainLinks}>{mainLinks}</div> */}
//             </div>
//             <div className={classes.section}>
//                 {/* <div className={classes.mainLinks}>{profileLink}</div> */}
//                 <div className={classes.mainLinks}>{mainLinks}</div>
//             </div>

//             <div className={classes.section}>
//             </div>

            
//         </nav>
//     );
// };

// export default HomeSidebar;


import React, { useState, useRef } from 'react';
import {
  Avatar,
  UnstyledButton,
  Badge,
  Tooltip,rem
} from '@mantine/core';
import {
  IconHome,
  IconDotsCircleHorizontal,
  IconFile,
  IconCalendar,
  IconInbox,
  IconCheckbox,
} from '@tabler/icons-react';
import classes from './navbarSearch.module.css';
import './homeSidebar.css';

const HomeSidebar = (props) => {
  const { userFullName, userEmail, openSidebarToggle, setOpenSidebarToggle } = props;
  const firstLetter = userFullName[0].toUpperCase();

  const links = [
    { icon: IconHome, label: 'Home' },
    { icon: IconInbox, label: 'Inbox', notifications: 4 },
    { icon: IconCheckbox, label: 'Tasks', notifications: 4 },
    { icon: IconFile, label: 'Docs' },
    { icon: IconCalendar, label: 'Calendar' },
    { icon: IconDotsCircleHorizontal, label: 'More' },
  ];

  const profileLink = (
    <div className={openSidebarToggle ? 'home-sidebar-profile-parent-div active' : 'home-sidebar-profile-parent-div'}>
      <UnstyledButton className={`${classes.mainLink} ${classes.profile} mb-0`}>
        <div className="d-flex gap-5 align-items-center justify-content-between w-100">
          <Avatar color="cyan" radius="sm">{firstLetter}</Avatar>
        </div>
      </UnstyledButton>
    </div>
  );

  const mainLinks = links.map((link) => (
        <>
            {openSidebarToggle ? 
                <UnstyledButton key={link.label} className={`${classes.mainLink} ${classes.active}`}>
                    <div className={classes.mainLinkInner}>
                        <link.icon color='#868e96' size={25} className={`${classes.mainLinkIcon} ${classes.active}`} stroke={2} />
                    <span style={{fontFamily: 'Lato', fontWeight: "600", fontSize: "15px", color: "#d0d2d4"}}>{link.label}</span>
                    </div>
                    {link.notifications && (
                    <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
                        {link.notifications}
                    </Badge>
                    )}
                </UnstyledButton>
            
            : 
            <Tooltip label={link.label} position="right" withArrow arrowOffset={10} arrowSize={4} bg='#121212' c='#e4e6e8' openDelay={500} offset={{ mainAxis: 10 }}>
                <UnstyledButton key={link.label} className={classes.mainLink}>
                    <div className={`${classes.mainLinkInner} d-flex justify-content-center`}>
                        <div className={classes.iconWrapper}>
                        <link.icon
                            justify='center'
                            m={0}
                            size={25}
                            className={classes.mainLinkIcon}
                            stroke={2}
                        />
                        {link.notifications &&
                        <Badge circle size="xs" color="blue" className={classes.badge}>
                            {link.notifications}
                        </Badge>
                        }
                        </div>
                    </div>
                </UnstyledButton>
            </Tooltip>
            }
        
        </>
        
    ));

  const [sidebarWidth, setSidebarWidth] = useState(openSidebarToggle ? rem(260) : rem(80));
  const [sidebarColor, setSidebarColor] = useState('#222529');
  const isResizing = useRef(false);

  const handleMouseMove = (e) => {
    if (!isResizing.current) return;
    setSidebarColor('#525559');
    let newWidth = e.clientX;
    if (newWidth < 200) {
            newWidth = 80;
            setOpenSidebarToggle(false);
    }

    if (newWidth > 150) {
        newWidth = 260;
        setOpenSidebarToggle(true);
    }
    setSidebarWidth(newWidth);
  };

  const handleMouseUp = () => {
    setSidebarColor('#222529');

    isResizing.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleMouseDown = (e) => {
    // setSidebarColor('red');

    e.preventDefault();
    e.stopPropagation();
    isResizing.current = true;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <nav className={`${classes.navbar} ${openSidebarToggle ? 'active' : ''}`} 
        style={{
            width: openSidebarToggle ? rem(260) : rem(80),
            
          }}
        >


            <div className={classes.section}>
                <div className={classes.profile}>{profileLink}</div>
                {/* <div className={classes.mainLinks}>{mainLinks}</div> */}
            </div>
            <div className={classes.section}>
                {/* <div className={classes.mainLinks}>{profileLink}</div> */}
                <div className={classes.mainLinks}>{mainLinks}</div>
            </div>

            <div className="resize-handle" onMouseDown={handleMouseDown} style={{background: sidebarColor}}></div>

            
    </nav>
    // <nav className={`${classes.navbar} ${openSidebarToggle ? 'active' : ''}`} 
    //     style={{
    //         'width': openSidebarToggle ? rem(260) : rem(80),
    //       }}
    //     >


    //         <div className={classes.section}>
    //             <div className={classes.profile}>{profileLink}</div>
    //             {/* <div className={classes.mainLinks}>{mainLinks}</div> */}
    //         </div>
    //         <div className={classes.section}>
    //             {/* <div className={classes.mainLinks}>{profileLink}</div> */}
    //             <div className={classes.mainLinks}>{mainLinks}</div>
    //         </div>

    //         <div className={classes.section}>
    //         </div>

            
    //     </nav>
  );
};

export default HomeSidebar;
