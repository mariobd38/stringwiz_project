import React from 'react';
import './FooterContent.css';
import { Container } from 'react-bootstrap';
import CocollabLogo from '../../../components/Logo/logo';
import coconut from '../../../assets/coconut.png';



const FooterContent = () => {
    return (
        <div className='landing-footer-content-footer py-4'>
            <Container >
                <div className='row pb-3' style={{borderBottom: "0.8px solid #898989"}}>
                    <div className='d-flex gap-5 flex-md-row flex-column'>
                        <div> 
                            <a href={() => false}>
                                <CocollabLogo width={2.2} paddingBottom={0.35} fontSize={2.9} textColor={'4296af'}></CocollabLogo>
                            </a>
                        </div>
                        <div className='pt-3 d-flex flex-row gap-5'>
                            <div className='landing-footer-content-footer-text'>
                                <div className='landing-footer-content-footer-header'>Features</div>
                                <div className='pt-4 d-flex gap-2 flex-column'>
                                    <div>Dashboards</div>
                                    <div>CocoBoards</div>
                                    <div>Docs</div>
                                </div>
                            </div>

                            <div>
                                <div className='landing-footer-content-footer-header'>Resources</div>
                                <div className='pt-4 d-flex gap-2 flex-column'>
                                    <div>Pricing</div>
                                    <div>About Us</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='pt-3'>
                    ©<span className='ps-2 landing-footer-content-footer-text'>2024 Cocollabs</span>
                </div>
            </Container>
            
        </div>
    );
};

export default FooterContent;