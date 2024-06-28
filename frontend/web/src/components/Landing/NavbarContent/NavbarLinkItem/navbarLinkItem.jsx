import React, { useEffect, useState } from 'react';

import {
    Group,
    UnstyledButton,
    Text,
    ThemeIcon,
    rem,
  } from '@mantine/core';

import classes from './../../NavbarContent/NavbarContent.module.css';

const NavbarLinkItem = ({ mockdata, drawerOpened }) => {
    const [paddingStart, setPaddingStart] = useState(drawerOpened ? 22.5 : 0);
    const [alignment, setAlignment] = useState(drawerOpened ? 'start' : 'center');
  
    const updatePaddingAndAlignment = () => {
      const screenWidth = window.innerWidth;
      const isLargeScreen = screenWidth > 992;
      
      if (isLargeScreen) {
        setPaddingStart(0);
        setAlignment('center');
      } else {
        setPaddingStart(drawerOpened ? 22.5 : 0);
        setAlignment(drawerOpened ? 'start' : 'center');
      }
    };
  
    useEffect(() => {
      updatePaddingAndAlignment();
  
      window.addEventListener('resize', updatePaddingAndAlignment);
  
      return () => {
        window.removeEventListener('resize', updatePaddingAndAlignment);
      };
    }, [drawerOpened]);

    return (
        mockdata.map((item) => (
            <UnstyledButton className={classes.subLink} key={item.title} mb={drawerOpened ? 5 : 0} py={5} >
                <Group wrap="nowrap" mx={10} my={5} align={alignment} ps={paddingStart}>
                    <ThemeIcon size={34} variant="default" radius="md" className="d-flex align-items-center">
                        <item.icon style={{ width: rem(22), height: rem(22) }} color='#367179' />
                    </ThemeIcon>
                    <div>
                        <Text size="sm" fw={500}>
                            {item.title}
                        </Text>
                        <Text size="xs" c="dimmed">
                            {item.description}
                        </Text>
                    </div>
                </Group>
            </UnstyledButton>)
        )
    );
};

export default NavbarLinkItem;