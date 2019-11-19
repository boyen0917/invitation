import React from 'react';
import { connect } from 'react-redux';

import './styles.css'

const Footer = () => (
  <section className={'app-cpnt footer'}>
    <div><font className={'title-special'}>- End -</font></div>
  </section>
)

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
