import React from 'react';


import { Grid, Box, Flex, Text,Button } from '@mantine/core';
import {
    IconCheckbox, IconCalendar,IconFile, IconTargetArrow
  } from '@tabler/icons-react';

import './quickActions.css';

const QuickActions = () => {
    return (
        <Box pb={25}>
            <Box className='user-home-all-content-left-spacing'>
                <Box py={20} px={20} bg='#222529' style={{borderRadius: "10px"}}>
                    <Text fz='18'  c='#d4d6d8' ff='Lato'>Quick Actions</Text>
                    <Flex py={10} ff='Inter' justify="center" style={{ width: '100%' }}>
                        <Grid pt={10} justify="space-between" gutter="lg" style={{ width: '100%' }}>
                            <Grid.Col span={{ base: 12, md: 6, lg: 3 }} style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button className='quick-actions-button' ><IconCheckbox style={{marginRight: "15px"}}/>Create a task</Button>
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, md: 6, lg: 3 }} style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button className='quick-actions-button' ><IconCalendar style={{marginRight: "15px"}}/>Schedule an event</Button>
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, md: 6, lg: 3 }} style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button className='quick-actions-button' ><IconFile style={{marginRight: "15px"}}/>Start a doc</Button>
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, md: 6, lg: 3 }} style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button className='quick-actions-button' ><IconTargetArrow style={{marginRight: "15px"}}/>Create a milestone</Button>
                            </Grid.Col>
                            
                        </Grid>
                        
                    </Flex>

                </Box>
            </Box>
        </Box>
    );
};

export default QuickActions;