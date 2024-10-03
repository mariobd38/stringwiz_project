import React from 'react';

import { Grid, Box, Flex, Text,Button } from '@mantine/core';

import Icons from '../../icons/icons';

import './quickActions.css';

const QuickActions = () => {
    return (
        <Box pb={25}>
            <Box className='user-home-all-content-left-spacing'>
                <Box py={20} px={20} bg='#222529' style={{borderRadius: "10px"}}>
                    <Text fz='18'  c='#e8eaed' ff='Lato'>Quick Actions</Text>
                    <Flex py={10} ff='Inter' justify="center" style={{ width: '100%' }}>
                        <Grid pt={10} justify="space-between" gutter="lg" style={{ width: '100%' }}>
                            <Grid.Col span={{ base: 12, md: 6, lg: 3 }} style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button className='quick-actions-button' ><span style={{marginRight: "15px"}}>{Icons('IconCheckbox',24,24,'#fafafa')}</span>Create a task</Button>
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, md: 6, lg: 3 }} style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button className='quick-actions-button' ><span style={{marginRight: "15px"}}>{Icons('IconCalendar',24,24,'#fafafa')}</span>Schedule an event</Button>
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, md: 6, lg: 3 }} style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button className='quick-actions-button' ><span style={{marginRight: "15px"}}>{Icons('IconFile',24,24,'#fafafa')}</span>Start a doc</Button>
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, md: 6, lg: 3 }} style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button className='quick-actions-button' ><span style={{marginRight: "15px"}}>{Icons('IconTargetArrow',24,24,'#fafafa')}</span>Create a milestone</Button>
                            </Grid.Col>
                            
                        </Grid>
                        
                    </Flex>

                </Box>
            </Box>
        </Box>
    );
};

export default QuickActions;