import React from 'react';
import { connect } from 'react-redux';

import './styles.css'

const GalleryList = ({galleryIndex}) => {
  return <section className={'app-cpnt gallery-list'}>

  </section>
}
const mapStateToProps = state => ({
  galleryList: state.dataReducer.galleryList
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(GalleryList);
