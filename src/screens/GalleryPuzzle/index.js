import React from 'react';
import { connect } from 'react-redux';

import './styles.css'

import { setGalleryIndex } from '../../actions';

const GalleryPuzzle = props =>
  <section className={'app-cpnt gallery-puzzle'}>
    <div className={'title'}><font className={'title-special'}>Gallery</font></div>
    <section className={'frame'}>
      <img src={props.img}/>
    </section>
    {/* <section className={'puzzle'}>
      {props.galleryList.slice(0, 4).map((gallery, i) =>
        <span key={i} num={i}>
          <div className={'cover'} onClick={() => props.setGalleryIndex(i)}>看大圖</div>
          <img src={gallery}/>
        </span>
      )}
    </section> */}
  </section>


const mapStateToProps = state => ({
  img: state.dataReducer.galleryList[0],
  currentPhoto: 0
});


// const mapDispatchToProps = dispatch => ({
//   setGalleryIndex: () => dispatch(getTime(new Date()))
// });


const mapDispatchToProps = dispatch => ({
  setGalleryIndex: (index) => dispatch(setGalleryIndex(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(GalleryPuzzle);
