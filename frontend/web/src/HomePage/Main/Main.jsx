import React from 'react';
import './Main.css'

const Main = () => {
    const main = <main>
    <div className="header pb-5">
      <div className="container d-flex justify-content-center pt-5">
        <div className="d-none d-lg-block left-header-block">
          <h1 className="left-header-text">Let's plan.</h1>
          <h1 className="left-header-text">Let's collab.</h1>
          <h1 className="left-header-text">
            <span style={{ color: '#58bcdb', fontFamily: 'Baron Neue, serif' }}>STRING</span>
            <span style={{ color: '#4296af', fontFamily: 'Baron Neue, serif' }}>WIZ</span>.
          </h1>
        </div>
        <div className="right-header-block pt-3">
          <p className="description text-center">
            Want to achieve great results within your team or organization?
          </p>
          <p className="description text-center">Simple features. Simple solutions.</p>
          <p className="description text-center">Begin the journey today.</p>
          <div className="text-center d-flex justify-content-center pt-2">
            <form action="/signup">
              <button className="btn register text-white p-3 mx-5">Get Started</button>
            </form>
            <form action="#">
              <button className="btn how_it_works text-dark p-3 mx-5">See how it works</button>
            </form>
          </div>
          <p className="description text-center pt-3" style={{ fontSize: '0.9em', color: 'white' }}>
            No credit card needed · Start with a free plan
          </p>
        </div>
      </div>
    </div>
  </main>

    return (
        main
    );
};

export default Main;