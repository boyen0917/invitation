import React from 'react';
import { connect } from 'react-redux';

import './styles.css'

import ticket1 from '../../images/afterparty1.png'
import ticket2 from '../../images/afterparty2.png'
import { Icon } from 'semantic-ui-react'

import { setTicketStatus } from '../../actions';


const Afterparty = props => 
<section className={'app-cpnt afterparty'}>
    <div className={'title'}>- 入場券 -</div>
    <div 
      className={'ticket'} 
      onClick={props.setTicketStatus} 
    >
      <img src={ticket1}/>
    </div>

    <div className={'sub-title'}>憑券入場唷</div>

    <section className={`ticket-detail ${props.isShowTicket ? 'active' : ''}`}>
      <div 
        className={'pic1'} 
        onClick={props.setTicketStatus} 
      >
        <img src={ticket1}/>
      </div>
      <div 
        className={'pic2'} 
        onClick={props.setTicketStatus} 
      >
        <img src={ticket2}/>
      </div>
      
    </section>

  </section>

const mapStateToProps = state => ({
  isShowTicket: state.afterpartyReducer.isShowTicket
});

const mapDispatchToProps = dispatch => ({
  setTicketStatus: () => dispatch(setTicketStatus())
});


export default connect(mapStateToProps, mapDispatchToProps)(Afterparty);
