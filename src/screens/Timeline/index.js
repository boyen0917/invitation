import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import PhotoFrame from '../PhotoFrame'
import Afterparty from '../Afterparty'

const Timeline = props => (
  <section className={'app-cpnt timeline'}>
    <div className={'divide'}>
      <span>SUNDAY JANUARY, 12, 2020</span>
      <span></span>
    </div>
    {props.timelines.map(({
      time, 
      title, 
      address, 
      gallery=[], 
      custom=false,
      map}, i) => {
      return <section key={i} className={'event'}>
        <section className={'time'}>
          <div>{time[0]}</div>
          <div>~</div>
          <div>{time[1]}</div>
        </section>
        <section className={'main'}>
          <div className={'title'}>{title}</div>
          <div className={'address'}>{address}</div>
        </section>

        <PhotoFrame imgSrc={gallery[0]}/>

        {custom && <Afterparty />}

        {/* <section className={'gallery'}>
          <img src={gallery[0]}/>
        </section> */}
        
        {map && <section className={'map'}> 
          <div className={'title-location'}>- 地圖 -</div>
          <div dangerouslySetInnerHTML={{__html: map}}></div>
        </section>}
      </section>
    }
      
    )}
  </section>
)

const mapStateToProps = state => ({
  timelines: state.dataReducer.timelines
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
