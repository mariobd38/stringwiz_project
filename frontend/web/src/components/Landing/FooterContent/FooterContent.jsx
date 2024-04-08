import React from 'react';
import CocollabLogo from '../../../components/Logo/logo';
import './FooterContent.css';

const FooterContent = () => {
    return (
        <div className='landing-footer-content-footer py-4'>
            <div className='container' >
                <div className='row pb-3' style={{borderBottom: "0.8px solid #898989"}}>
                    <div className='d-flex gap-0 gap-md-5 flex-md-row flex-column p-0'>
                        <div> 
                            <a href={() => false}>
                                <CocollabLogo width={2.2} paddingBottom={0.35} fontSize={2.9} textColor={'4296af'}></CocollabLogo>
                            </a>
                        </div>
                        <div className='pt-3 d-flex flex-row gap-5'>
                            <div className='landing-footer-content-footer-text'>
                                <div className='landing-footer-content-footer-header'>Features</div>
                                <div className='pt-4 d-flex gap-2 flex-column'>
                                    <a href={() => false} className='landing-footer-content-footer-links'>Dashboards</a>
                                    <a href={() => false} className='landing-footer-content-footer-links'>CocoBoards</a>
                                    <a href={() => false} className='landing-footer-content-footer-links'>Docs</a>
                                </div>
                            </div>

                            <div>
                                <div className='landing-footer-content-footer-header'>Resources</div>
                                <div className='pt-4 d-flex gap-2 flex-column'>
                                    <a href={() => false} className='landing-footer-content-footer-links'>Pricing</a>
                                    <a href={() => false} className='landing-footer-content-footer-links'>About Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='pt-3'>
                    ©<span className='ps-2 landing-footer-content-footer-text'>2024 Cocollabs</span>
                </div>
            </div>
            
        </div>
    );
};

export default FooterContent;