import React from 'react';
import './Main.css'
import Container from 'react-bootstrap/Container';

import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import FolderIcon from '@mui/icons-material/Folder';
import HubIcon from '@mui/icons-material/Hub';

import Button from '@mui/material/Button';

import discover from '../../images/discover.png';
import addTask from '../../images/add_task.png';
import collaboration from '../../images/collaboration.png';
import computer_look from '../../images/looking_at_computer.jpg';
import coconut from '../../images/coconut.png';

const Main = () => {
    const main = <main>
    <div className="header pb-5">
      <Container className="pt-4">
        <div className='d-flex justify-content-center pt-5'>
          <div className="d-none d-lg-block left-header-block">
            <h1 className="left-header-text">Let's Plan.</h1>
            <h1 className="left-header-text">Let's Manage.</h1>
            <h1 className="left-header-text">Let's Collab.
            <span><a className="m-auto" href={() => false}>
                <img src={coconut} className="coconut mw-100 pb-3 ms-xl-2 w-100 text-center" alt="coconut" />
            </a></span>
            </h1>
          </div>
          <div className="right-header-block pt-3 pb-4">
            <p className="description text-center">
              Want to achieve great results within your team or organization?
            </p>
            <p className="description text-center">Simple features. Simple solutions.</p>
            <p className="description text-center">Begin the journey today.</p>
            <div className="d-flex justify-content-center pt-2">
              <a href="/signup">
                <Button className=" register-home-page mx-3 nunito-sans-font">Get Started</Button>
              </a>
              <a href="/signup">
                <Button className="learn_more-home-page mx-3 nunito-sans-font">Learn More</Button>
              </a>
            </div>
            
            <p className="description text-center pt-3" style={{ fontSize: '0.9em', color: '#fafafa' }}>
              No credit card needed · Start with a free plan
            </p>
          </div>

        </div>
        <div className='pt-5'>
          <div className='d-flex justify-content-center flex-column flex-lg-row'>
            <div className='col-lg-6 computer-look-div'>
              <a className="m-auto" href={() => false}>
                <img src={computer_look} className="hp-screenshot w-100" alt="computer_look" />
              </a>
            </div>
            <div className='col-lg-6 m-auto mt-4 mt-lg-auto'>
              <h2 className='nunito-sans-font-600 fafafa-color computer-look-header text-center mb-3'>The Productivity Hub<HubIcon  className="mb-2 ms-1" style={{width:"2.1rem", height: "2.1rem"}}></HubIcon></h2>
              {/* <p className='nunito-sans-font fafafa-color computer-look-description text-lg-left'>
                <FolderIcon className='ms-4 me-2'></FolderIcon>
                <span>Stay organized with Coco Boards</span>
              </p>
              <p className='nunito-sans-font fafafa-color computer-look-description text-lg-left mx-5'>
                <span className='text-right bg-primary'>Stay organized with Coco Boards</span>
              </p> */}
              <div className='ms-4 me-2 fafafa-color'>
                <div>
                  <div className='nunito-sans-font-600 computer-look-description'>
                    <span><FolderIcon className='ms-2 me-3 computer-look-icon mb-2'></FolderIcon></span>
                    Stay organized with CocoBoards
                  </div>
                  <div className='ms-5'>
                    <p className='ms-2 nunito-sans-font computer-look-sub-description'>
                      Boards serve to allow your team members to see who is working on what, and for how long
                    </p>
                  </div>
                </div>


                <div>
                  <div className='nunito-sans-font-600 computer-look-description'>
                    <span><AssignmentTurnedInIcon className='ms-2 me-3 computer-look-icon mb-2'></AssignmentTurnedInIcon></span>
                    Easily manage tasks and projects 
                  </div>
                  <div className='ms-5'>
                    <p className='ms-2 nunito-sans-font computer-look-sub-description'>
                      Tracking, managing, and completing your tasks has never been easier with Cocollabs
                    </p>
                  </div>
                </div>
                <div className='text-center pt-2'>
                  <a href="/signup">
                    <button className='btn fafafa-color nunito-sans-font register p-2' style={{width: "10rem"}}>Start cocollabin'</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </Container>
    </div>
    <div className='pt-5 pb-5 bg-illustrations-div '>
      <div className='d-flex justify-content-around flex-column flex-lg-row align-items-center align-items-lg-stretch pb-5'>
        <div className='d-flex flex-column align-items-center home-description-card mb-4 mb-lg-0 px-5 py-4 px-lg-0 py-lg-3  px-xl-4 py-xl-4 px-xxl-5'>
          <div className='circle mb-4'>
            <a className="m-auto" href={() => false}>
              <img src={collaboration} className="home-illustration" alt="collaboration" />
            </a>
          </div>
          <div className='text-center circle-text'>
            <p>Unleash your team's full potential: <span className='main-key-words'>Simplify</span>, <span className='main-key-words'>Organize</span>, and <span className='main-key-words'>Achieve with Ease</span></p>
          </div>
        </div>
        <div className='d-flex flex-column align-items-center home-description-card mb-4 mb-lg-0 px-5 py-4 px-lg-0 py-lg-3 px-xl-4 py-xl-4 px-xxl-5'>
          <div className='circle mb-4'>
            <a className="m-auto" href={() => false}>
              <img src={discover} className="home-illustration" alt="discover" />
            </a>
          </div>
          <div className='text-center circle-text'>
            <p>Embark on a journey into the world <span className='main-key-words'>planning</span> and <span className='main-key-words'>scheduling</span>, optimizing productivity and efficiency</p>
          </div>
        </div>
        <div className='d-flex pt-3 flex-column align-items-center home-description-card mb-4 mb-lg-0 px-5 py-4 px-lg-0 py-lg-3  px-xl-4 py-xl-4 px-xxl-5 '>
          <div className='circle mb-4'>
            <a className="m-auto" href={() => false}>
              <img src={addTask} className="home-illustration" alt="addTask" />
            </a>
          </div>
          <div className='text-center circle-text'>
            <p>We <span className='main-key-words'>empower</span> you to focus on scaling your company by efficiently <span className='main-key-words'>managing</span> time-consuming tasks
            </p>
          </div>
        </div>
      </div>
      <div className='pt-lg-4'>
        <h3 className='text-center fafafa-color lato-font-600 features-header pt-5'>Our features</h3>
        <div className='m-auto pt-5'>
          <div className='d-flex justify-content-center'>
            <div className='feature-number mx-4'>
              <div className='fafafa-color nunito-sans-font feature-number-text '>
                1
              </div>
            </div>
            <div className='feature-desc fafafa-color mx-4 nunito-sans-font'>
              Feature 1
            </div>
          </div>
          <div className='d-flex justify-content-center pt-5'>
            <div className='feature-number mx-4'>
              <div className='fafafa-color nunito-sans-font feature-number-text'>
                2
              </div>
            </div>
            <div className='feature-desc fafafa-color mx-4 nunito-sans-font'>
              Feature 2
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

    return (
        main
    );
};

export default Main;