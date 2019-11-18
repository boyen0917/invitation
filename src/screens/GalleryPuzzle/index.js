import React from 'react';
import { connect } from 'react-redux';

import './styles.css'

const GalleryPuzzle = ({galleryList}) => (
  <section className={'app-cpnt gallery-puzzle'}>
    <div className={'title'}><font className={'title-special'}>Gallery</font></div>
    {galleryList.slice(0, 4).map((gallery, i) =>
      <img key={i} src={gallery} onClick={i => handleClick(i)}/>
    )}
    
  </section>
)

function handleClick(picNum) {
  console.log("yoo", picNum);
}

const mapStateToProps = state => ({
  galleryList: state.dataReducer.galleryList.slice(0, 4)
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(GalleryPuzzle);
