import React from 'react';
import { connect } from 'react-redux';

import Timeline from '../Timeline';

import './styles.css'

const Travel = () => (
  <section className={'app-cpnt travel'}>
    <div className={'title'}><font className={'title-special'}>Travel</font></div>
    <Timeline />
  </section>
)

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Travel);
