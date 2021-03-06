import React, { Component } from 'react';
import { connect } from 'react-redux';


import styles from './styles';
import './styles.css';

import welcome from '../../images/main-background/welcome.png'
import dresscode from '../../images/main-background/dresscode.png'
import schedule from '../../images/main-background/schedule.png'
import gallery from '../../images/main-background/gallery.png'
import footer from '../../images/main-background/footer.png'
import Countdown from '../Countdown';

import { setTextShow } from '../../actions'

const backgrounds = [
  {name: 'welcome', img: welcome, isShowCountdown: false},
  {name: 'dresscode', img: dresscode, isShowCountdown: true},
  {name: 'gallery', img: gallery, isShowCountdown: false} ,
  {name: 'schedule', img: schedule, isShowCountdown: true},
  {name: 'footer', img: footer, isShowCountdown: false}
]

let isInitial = false;

const MainBackground = props => {

  !isInitial && setTimeout(props.setTextShow, 3000);

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
            <div className={`desc ${props.isTextShow && 'active'}`}>我們衷心希望能有您的參與<br/>讓這個充滿意義的日子更加圓滿</div>
          </section>
        </section> 
      }
    </section>
  )}
</section>
}
  


const mapStateToProps = state => ({
  hash: state.router.location.hash,
  isShowCountdown: backgrounds.filter(obj => obj.name === `${(state.router.location.hash || '#welcome').substring(1)}`).pop().isShowCountdown,
  isTextShow: state.mbReducer.isTextShow
});

const mapDispatchToProps = dispatch => ({
  setTextShow: () => {
    isInitial = true;
    dispatch(setTextShow())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainBackground);
