import React from 'react';
import { connect } from 'react-redux';

import './styles.css'

import endding from '../../images/selected/endding.jpg'

const Footer = () => (
  <section className={'app-cpnt footer'}>
    <div><font className={'title-special'}>- See You In Tainan -</font></div>
    <div className={'frame'}>
      <img src={endding}/>
    </div>

    <section className={'last'}>
      <div>Copyright © 2020 Ivy & Brian. All rights reserved.</div>
      <div>
        <span>Privacy Policy &nbsp;&nbsp; l</span>
        <span>Terms of Use</span>
      </div>
    </section>
  </section>
)

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
