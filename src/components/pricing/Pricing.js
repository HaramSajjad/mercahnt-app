import React from 'react';
import Slide from 'react-reveal/Slide';
import "./styles.css";

const SafeMoneyIcon = () => {
  return (
    <span style={{ color: "#27be56" }}>
      <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="" preserveAspectRatio="xMidYMid meet"><path d="M12.073.003l.144.02 9 2a1 1 0 01.776.861L22 3v11c0 5.523-4.477 10-10 10-5.43 0-9.848-4.326-9.996-9.72L2 14V3a1 1 0 01.671-.945l.112-.032 9-2c.095-.02.193-.027.29-.02zM12 4c-.6 0-1 .4-1 1v1.1c-1.7.2-3 1.6-3 3.4 0 2.1 1.6 2.9 3 3.3v3.1c-.557-.186-.942-.716-.994-1.272L10 14.5c0-.6-.4-1-1-1s-1 .4-1 1c0 1.8 1.3 3.2 3 3.4V19c0 .6.4 1 1 1s1-.4 1-1v-1.1c1.7-.2 3-1.7 3-3.4 0-2.1-1.6-2.9-3-3.3V8.1c.557.186.942.716.994 1.272L14 9.5c0 .6.4 1 1 1s1-.4 1-1c0-1.8-1.3-3.2-3-3.4V5c0-.6-.4-1-1-1zm1 9.3c.7.3 1 .6 1 1.2 0 .7-.4 1.2-1 1.4v-2.6zm-2-5.2v2.6c-.7-.3-1-.6-1-1.2 0-.7.4-1.2 1-1.4z" fill="#27be56" fillRule="evenodd"></path></svg>
    </span>
  )
}

const TickMark = () => {
  return (
    <span style={{ color: "#27be56" }}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="" preserveAspectRatio="xMidYMid meet"><path d="M14.3 2.3L5 11.6 1.7 8.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z" fill="#27be56"></path></svg>
    </span>
  )
}

const Pricing = () => {

  const silver = [
    "Electricity Bill discount",
    "Get Gas Bill discount",
    "Internet Bill discount",
    "internet connection consultancy",
    "appliances repairing consultancy",
    "suppliers consultancy",
  ];

  const gold = [
    "Electricity Bill discount",
    "Get Gas Bill discount",
    "Internet Bill discount",
    "internet connection consultancy",
    "appliances repairing consultancy",
    "suppliers consultancy",
    "Real estate consultancy",
  ];

  const platinum = [
    "Electricity Bill discount",
    "Get Gas Bill discount",
    "Internet Bill discount",
    "internet connection consultancy",
    "appliances repairing consultancy",
    "suppliers consultancy",
    "Real estate consultancy",
    "Move & Loading consultancy",
  ];
  return (
    <section id='pricing'>
      <div className='pricing-container'>
        <Slide bottom>
          <div className='pricing-item'>
            <div className='plan-name'>
              Silver
            </div>
            <div className='pricing-content'>
              <div className='price'>
                <span>$10</span>/mo
              </div>
              <span className='plan-duration'>4 months</span>
              <div className='get-plan-btn'>
                <button>
                  Get Plan
                </button>
              </div>
              <p className='money-back-guarentee'>
                <SafeMoneyIcon /> 10-days money-back guarantee
              </p>
              <div className='plan-services-container'>
                {
                  silver.map((el, i) => {
                    return (
                      <div key={i} className='plan-services'>
                        <TickMark /> {el}
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </Slide>
        <Slide bottom delay={200}>
          <div className='pricing-item'>
            <div className='plan-name'>
              Gold
            </div>
            <div className='pricing-content'>
              <div className='price'>
                <span>$10</span>/mo
              </div>
              <span className='plan-duration'>12 months</span>
              <div className='get-plan-btn'>
                <button>
                  Get Plan
                </button>
              </div>
              <p className='money-back-guarentee'>
                <SafeMoneyIcon /> 10-days money-back guarantee
              </p>
              <div className='plan-services-container'>
                {
                  gold.map((el, i) => {
                    return (
                      <div key={i} className='plan-services'>
                        <TickMark /> {el}
                      </div>
                    )
                  })
                }
              </div>
              <div>
              </div>
            </div>
          </div>
        </Slide>
        <Slide bottom delay={300}>
          <div className='pricing-item'>
            <div className='plan-name'>
              Platinum
            </div>
            <div className='pricing-content'>
              <div className='price'>
                <span>$15</span>/mo
              </div>
              <span className='plan-duration'>12 months</span>
              <div className='get-plan-btn'>
                <button>
                  Get Plan
                </button>
              </div>
              <p className='money-back-guarentee'>
                <SafeMoneyIcon /> 10-days money-back guarantee
              </p>
              <div className='plan-services-container'>
                {
                  platinum.map((el, i) => {
                    return (
                      <div key={i} className='plan-services'>
                        <TickMark /> {el}
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </section>
  )
}

export default Pricing
