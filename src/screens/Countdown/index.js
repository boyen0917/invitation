import React, { Component } from 'react';
import { connect } from 'react-redux';


import styles from './styles';
import './styles.css';

import { getTime } from '../../actions';

const Countdown = ({currentTime, type}) => {
  let timeData = getTimeDiff(currentTime);
  let isVertical = type === 'vertical';
  let spaceLetter = '&nbsp;'
  // isVertical ? 'right' : 'left'
  return isVertical ?
      <section className={'app-cpnt countdown vertical'}>
        <span>
          {timeData.dayLeft} <br/>
          {timeData.hourLeft}<br/>
          {timeData.minLeft} <br/>
          {timeData.secLeft}
        </span>
        <span>
          days<br/>
          hrs<br/>
          mins<br/>
          secs<br/>
          {timeData.isPositive ? '' : 'Ago'}
        </span> 
      </section>
    : 
      <section className={'app-cpnt countdown'}>
        {timeData.dayLeft} &nbsp; 天 &nbsp;
        {timeData.hourLeft} &nbsp; 時 &nbsp;
        {timeData.minLeft} &nbsp; 分 &nbsp;
        {timeData.secLeft} &nbsp; 秒 &nbsp;
        &nbsp; {timeData.isPositive ? '' : 'Ago'}
      </section>
}

function getTimeDiff(currentTime) {
  const tWedding = 1578823200000; // 2020.1.12 18:00
  const tSec = 1000;
  const tMin = 60 * tSec;
  const tHour = 60 * tMin;
  const tDay = 24 * tHour;

  let tDiff = tWedding - currentTime;
  let isPositive = tDiff >= 0;
  tDiff = isPositive ? tDiff : -tDiff;

  let dayLeft = Math.floor(tDiff/tDay);
  let hourLeft = Math.floor((tDiff -= dayLeft * tDay) / tHour)
  let minLeft = Math.floor((tDiff -= hourLeft * tHour) / tMin)
  let secLeft = Math.floor((tDiff -= minLeft * tMin) / tSec)

  return {
    dayLeft, 
    hourLeft, 
    minLeft, 
    secLeft, 
    isPositive
  }
}


const mapStateToProps = state => ({
  currentTime: state.timeReducer.currentTime
});

const mapDispatchToProps = dispatch => ({
  getCurrentTime: () => dispatch(getTime(new Date()))
});

export default connect(mapStateToProps, mapDispatchToProps)(Countdown);
