import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUsersSaga, getTime } from '../../actions';

import styles from './styles';
import Main from '../Main';
import Sub from '../Sub';
import GalleryList from '../GalleryList';


import './styles.css';

class Home extends Component {
  constructor() {
    super();


    setInterval(() => {
      this.props.getCurrentTime();
    }, 1000)
    
  }

  render() {
    // const { galleryIndex } = this.props;
    // this.countdownClock();
    
    console.log('home props', this.props);
    return (
      <section className={'app-cpnt home'}>
        <Main />
        <Sub />
        {/* {} */}
      </section>
    );
  }
}




const mapStateToProps = state => ({
  currentTime: state.timeReducer.currentTime,
  galleryIndex: state.galleryReducer.galleryIndex
});

const mapDispatchToProps = dispatch => ({
  getCurrentTime: () => dispatch(getTime(new Date()))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
