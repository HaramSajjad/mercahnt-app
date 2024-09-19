import React from 'react';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Slide';
import "./styles.css";
import Contact from '../contact/Contact';
import Pricing from '../pricing/Pricing';
import Services from '../services/Services';
const Home = () => {
  return (
    <>
      <section id='home'>
        <div className='home-container'>
          <Fade top>
            <h1 className='welcome-text'>Welcome to <span style={{color: "var(--btn-color)"}}> Merchant </span></h1>
          </Fade>
          <Fade top delay={300}>
            <p className='welcome-subtitle'>Create, explore and trade in the first-ever merchant.</p>
          </Fade>
          <div className='home-buttons'>
            <Slide bottom cascade>
              <Link className='plan-btn' to="/pricing"> Plans </Link>
            </Slide>
            <Slide bottom cascade delay={300}>
              <Link className='services-btn' to="/services"> View Services </Link>
            </Slide>
          </div>
        </div>
      </section>
      <Pricing />
      <Services />
      <Contact />
    </>
  )
}

export default Home
