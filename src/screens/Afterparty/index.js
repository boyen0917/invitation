import React from 'react';
import { connect } from 'react-redux';

import './styles.css'

import ticket from '../../images/afterparty.jpg'
import { Icon } from 'semantic-ui-react'

import { setTicketStatus } from '../../actions';


const Afterparty = props => 
<section className={'app-cpnt afterparty'}>
    <div className={'title'}>- 入場券 -</div>
    <div 
      className={'ticket'} 
      onClick={props.setTicketStatus} 
    >
      <img src={ticket}/>
    </div>

    {props.isShowTicket && 
      <section className={'ticket-detail'}>
        <img src={ticket} />
        <button
          onClick={props.setTicketStatus} 
        >
          <Icon name='close' size='small' />
        </button>
      </section>
    }

  </section>

const mapStateToProps = state => ({
  isShowTicket: state.afterpartyReducer.isShowTicket
});

const mapDispatchToProps = dispatch => ({
  setTicketStatus: () => dispatch(setTicketStatus())
});


export default connect(mapStateToProps, mapDispatchToProps)(Afterparty);
