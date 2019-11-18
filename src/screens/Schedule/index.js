import React from 'react';
import { connect } from 'react-redux';

import Timeline from '../Timeline';

import './styles.css'

const Schedule = () => (
  <section className={'app-cpnt schedule'}>
    <div className={'title'}><font className={'title-special'}>Schedule</font></div>
    <Timeline />
  </section>
)

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
