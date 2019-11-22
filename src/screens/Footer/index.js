import React from 'react';
import { connect } from 'react-redux';

import './styles.css'

import endding from '../../images/selected/endding.jpg'

const Footer = () => (
  <section className={'app-cpnt footer'}>
    <div><font className={'title-special'}>- End -</font></div>
    <div className={'frame'}>
      <img src={endding}/>
    </div>
  </section>
)

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
