import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUsersSaga, getTime } from '../../actions';

import styles from './styles';
import Main from '../Main';
import Sub from '../Sub';


import './styles.css';

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    const { getCurrentTime } = this.props;
    setTimeout(getCurrentTime, 1000);
    return (
      <section className={'app-cpnt home'}>
        <Main />
        <Sub />
      </section>
    );
  }
}




const mapStateToProps = state => ({
  currentTime: state.timeReducer.currentTime
});

const mapDispatchToProps = dispatch => ({
  getCurrentTime: () => dispatch(getTime(new Date()))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
