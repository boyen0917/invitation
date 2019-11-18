import React from 'react';
import { connect } from 'react-redux';

import './styles.css'
import frame from '../../images/common/frame2.png'

export default ({imgSrc=''}) => (
  <section className={'app-cpnt photo-frame'}>
    <img className={'frame'} src={frame}/>
    <img className={'inner'} src={imgSrc}/>
  </section>
)

