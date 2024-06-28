import React from 'react';

import { Text, Container, ActionIcon, Group, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import classes from './FooterLinks.module.css';
import CocollabLogo from '../../../components/Logo/logo';
import Logo2 from '../../Logo/logo2';
import './FooterContent.css';

const data = [
    {
      title: 'About',
      links: [
        { label: 'Features', link: '#' },
        { label: 'Pricing', link: '#' },
        { label: 'Support', link: '#' },
        { label: 'Forums', link: '#' },
      ],
    },
    {
      title: 'Project',
      links: [
        { label: 'Contribute', link: '#' },
        { label: 'Media assets', link: '#' },
        { label: 'Changelog', link: '#' },
        { label: 'Releases', link: '#' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'Join Discord', link: '#' },
        { label: 'Follow on Twitter', link: '#' },
        { label: 'Email newsletter', link: '#' },
        { label: 'GitHub discussions', link: '#' },
      ],
    },
    
  ];

  export function FooterContent() {
    const groups = data.map((group) => {
      const links = group.links.map((link, index) => (
        <Text
          key={index}
          className={classes.link}
          component="a"
          href={link.link}
          onClick={(event) => event.preventDefault()}
        >
          {link.label}
        </Text>
      ));
  
      return (
        <div className={`${classes.wrapper}`} key={group.title}>
          <Text className={classes.title}>{group.title}</Text>
          {links}
        </div>
      );
    });

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner}>
                <div className={classes.logo}>
                    <Logo2 strokeColor='#0f5255' />
                    <Text size="xs" c="dimmed" className={classes.description}>
                        Collaborate and optimize your daily workflow
                    </Text>
                </div>
                <div className={classes.groups}>{groups}</div>
            </Container>
            <Container className={classes.afterFooter}>
                <Text c="dimmed" size="sm">
                    © 2020 Cocollabs. All rights reserved.
                </Text>

                <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>
        </footer>
        // <div className='landing-footer-content-footer py-4'>
        //     <div className='container' >
        //         <div className='row pb-3' style={{borderBottom: "0.8px solid #898989"}}>
        //             <div className='d-flex gap-0 gap-md-5 flex-md-row flex-column p-0'>
        //                 <div className='pt-2'> 
        //                     {/* <a href={() => false}>
        //                         <CocollabLogo width={2.2} paddingBottom={0.35} fontSize={2.9} textColor={'4296af'}></CocollabLogo>
        //                     </a> */}
        //                     <button style={{width: "14.5rem"}}>
        //                         <Logo2 strokeColor='#0f5255' />
        //                     </button>
        //                 </div>
        //                 <div className='pt-3 d-flex flex-row gap-5'>
        //                     <div className='landing-footer-content-footer-text'>
        //                         <div className='landing-footer-content-footer-header'>Features</div>
        //                         <div className='pt-4 d-flex gap-2 flex-column'>
        //                             <a href={() => false} className='landing-footer-content-footer-links'>Dashboards</a>
        //                             <a href={() => false} className='landing-footer-content-footer-links'>CocoBoards</a>
        //                             <a href={() => false} className='landing-footer-content-footer-links'>Docs</a>
        //                         </div>
        //                     </div>

        //                     <div>
        //                         <div className='landing-footer-content-footer-header'>Resources</div>
        //                         <div className='pt-4 d-flex gap-2 flex-column'>
        //                             <a href={() => false} className='landing-footer-content-footer-links'>Pricing</a>
        //                             <a href={() => false} className='landing-footer-content-footer-links'>About Us</a>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className='pt-3'>
        //             ©<span className='ps-2 landing-footer-content-footer-text'>2024 Cocollabs</span>
        //         </div>
        //     </div>
            
        // </div>
    );
}

export default FooterContent;