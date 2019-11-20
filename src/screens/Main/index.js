import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { styles } from '../../../node_modules/ansi-colors';


import styles from './styles';
import './styles.css';

import MainBackground from '../MainBackground';

const Main = () => (
  <section className={'app-cpnt main'}>
    <MainBackground />
  </section>
)
const mapStateToProps = state => ({
  backgroundImg: state.dataReducer.mainBgPicsMap
})

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
