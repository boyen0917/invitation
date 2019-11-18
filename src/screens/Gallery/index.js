import React, { Component } from 'react';
import { connect } from 'react-redux';


import styles from './styles';
import './styles.css';

const Gallery = ({data=[]}) => (
  <section className={'app-cpnt sample'} onClick={}>
  </section>
)
      
const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Sample);
