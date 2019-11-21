import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTime } from '../../actions';

import Main from '../Main';
import Sub from '../Sub';

import './styles.css';

class Home extends Component {
  constructor() {
    super();


    setInterval(() => {
      this.props.getCurrentTime();
    }, 1000)
    
  }

  // componentDidMount() {
  //   let self = this;
  //   let timer = null;
  //   window.addEventListener('scroll', () => {
  //     clearTimeout(timer);
  //     timer = setTimeout(
  //       () => !window.location.hash && (window.location = "#"), 
  //       1000
  //     )
      
  //   })
  // }

  render() {
    return (
      <section className={'app-cpnt home'}>
        <Main />
        <Sub />
      </section>
    );
  }
}




const mapStateToProps = state => ({
  currentTime: state.timeReducer.currentTime,
  galleryIndex: state.galleryReducer.galleryIndex,
});

const mapDispatchToProps = dispatch => ({
  getCurrentTime: () => dispatch(getTime(new Date())),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
