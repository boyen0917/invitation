import React, { Component } from 'react';
import { connect } from 'react-redux';

import ScrollableAnchor from 'react-scrollable-anchor'

import Welcome from '../Welcome';
import GalleryPuzzle from '../GalleryPuzzle';
import Schedule from '../Schedule';
// import Travel from '../Travel';

import './styles.css';

const Sub = () => (
  <section className={'app-cpnt sub'}>
    <ScrollableAnchor id={'welcome'}>
      <Welcome />
    </ScrollableAnchor>
    <ScrollableAnchor id={'schedule'}>
      <Schedule />
    </ScrollableAnchor>
    <ScrollableAnchor id={'gallery'}>
      <GalleryPuzzle />
    </ScrollableAnchor>
    {/* <ScrollableAnchor id={'travel'}>
      <Travel />
    </ScrollableAnchor> */}
  </section>
)

const mapStateToProps = state => {
  return {}
};

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Sub);
