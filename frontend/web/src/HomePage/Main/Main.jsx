import React from 'react';
import './Main.css'
import Container from 'react-bootstrap/Container';

import discover from '../../images/discover.png';
import addTask from '../../images/add_task.png';
import collaboration from '../../images/collaboration.png';
import hp_screenshot from '../../images/user_home_page_screenshot.png';




const Main = () => {
    const main = <main>
    <div className="header pb-5">
      <Container className="pt-5">
        <div className='d-flex justify-content-center'>
          <div className="d-none d-lg-block left-header-block">
            <h1 className="left-header-text fafafa-color">Let's plan.</h1>
            <h1 className="left-header-text fafafa-color">Let's collab.</h1>
            <h1 className="left-header-text fafafa-color">Let's do it your way.</h1>
          </div>
          <div className="right-header-block pt-3">
            <p className="description text-center">
              Want to achieve great results within your team or organization?
            </p>
            <p className="description text-center">Simple features. Simple solutions.</p>
            <p className="description text-center">Begin the journey today.</p>
            <div className="text-center d-flex justify-content-center pt-2">
              <a href="/signup">
                <button className="btn register fafafa-color p-3 mx-5">Get Started</button>
              </a>
              <form action="#">
                <button className="btn how_it_works text-dark p-3 mx-5">See how it works</button>
              </form>
            </div>
            <p className="description text-center pt-3" style={{ fontSize: '0.9em', color: 'white' }}>
              No credit card needed · Start with a free plan
            </p>
          </div>

        </div>
        <div className='d-flex justify-content-center pt-4'>
          {/* <p className='fafafa-color description'>Hello world</p> */}
          <a className="m-auto" href={() => false}>
              <img src={hp_screenshot} className="hp-screenshot mw-100 w-100" alt="hp_screenshot" />
          </a>
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
            <p>We <span className='main-key-words'>empower</span> you to focus on scaling your company by efficiently <span className='main-key-words'>managing</span> time-consuming tasks</p>
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