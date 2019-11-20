import React, { Component } from 'react';
import { connect } from 'react-redux';
import ScrollableAnchor from 'react-scrollable-anchor'

import styles from './styles';

class Temp extends Component {
  constructor() {
    super();
  }


  render() {
    const { users } = this.props;
    return (
      <div style={styles.container}>
        <a href='#section1'> Go to section 1 </a>
        <a href='#section2'> Go to section 2 </a>
        <ScrollableAnchor id={'section1'}>
          <div> Hello World </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section2'}>
          <div> How are you world? </div>
        </ScrollableAnchor>
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Temp);
