import React from 'react';
import { connect } from 'react-redux';

import './styles.css'

import style1 from '../../images/dresscode/style1.png'
import style2 from '../../images/dresscode/style2.png'

const Dresscode = () => (
  <section className={'app-cpnt dresscode'}>
    <div className={'title'}><font className={'title-special'}>Dresscode</font></div>
    <div className={'divide'}>
      <span>穿著指南</span>
      <span></span>
    </div>
    <section className={'desc'}>
      <section className={'row'}>
        <span>風格 :</span>
        <span>Boho & 丹寧</span>
      </section>

      <section className={'row'}>
        <span>說明 :</span>
        <span>
          波西米亞加上嬉皮風格或是丹寧元素。<br/><br/>
          結合了波西米亞的自由浪漫和嬉皮風的個性不羈，能打造出一種時尚又慵懶的氣質，而流蘇、民族風圖騰、麂皮和牛仔是常見的單品。
        </span>
      </section>

    </section>
    <section className={'gallery'}>
      <img src={style1}/>
      <img src={style2}/>
    </section>
  </section>
)

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Dresscode);