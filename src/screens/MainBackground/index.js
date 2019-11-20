import React, { Component } from 'react';
import { connect } from 'react-redux';


import styles from './styles';
import './styles.css';

import welcome from '../../images/main-background/welcome.png'
import schedule from '../../images/main-background/schedule.png'
import gallery from '../../images/main-background/travel.png'
import Countdown from '../Countdown';

const backgrounds = [
  {name: `welcome`, img: welcome, isShowCountdown: false},
  {name: `gallery`, img: gallery, isShowCountdown: false} ,
  {name: `schedule`, img: schedule, isShowCountdown: true}
]


const MainBackground = (props) => {
  console.log("scroll", props);
  return <section className={'app-cpnt main-background'}>

    {props.isShowCountdown ? 
      <section className={'countdown'}>
        <Countdown type={'vertical'} />
      </section> 
      : ''
    }
    
    {backgrounds.map((background, i) => 
      <section 
        key={i} 
        className={
          `theme
          ${background.name} ${props.hash.length ? 
            props.hash === `#${background.name}` ? 'active' : '' :
            background.name === 'welcome' ? 'active' : ''
          }`
        }
        style={{
          background: `url(${background.img})`,
          backgroundSize: `cover`,
          backgroundPosition: `center center`
        }}
      >
        {props.isShowCountdown ? 
          ''
          : <section className={`content ${background.isShowCountdown ? 'show-countdown' : ''}`}>
            <section className={`bottom`}>
              <div className={`title`}>
                <font className={`title-special`}> &nbsp; Ivy & <br/> Brian </font>
              </div>
              <div className={`desc`}>9999我們衷心希望能有您的參與<br/>讓這個充滿意義的日子更加圓滿</div>
            </section>
          </section> 
        }
      </section>
    )}
  </section>
}


const mapStateToProps = state => ({
  hash: state.router.location.hash,
  isShowCountdown: backgrounds.filter(obj => obj.name === `${(state.router.location.hash || '#welcome').substring(1)}`).pop().isShowCountdown
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MainBackground);
