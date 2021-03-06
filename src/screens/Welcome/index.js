import React from 'react';
import { connect } from 'react-redux';

import Countdown from '../Countdown';
import styles from './styles';
import './styles.css';

const Welcome = props => (
  // 放背景色
  <section className={'app-cpnt welcome'}> 
    {/* 放背景圖 */}
    <section 
      className={`background`}
      style={styles.container}
    > 
      {/* 框框 */}
      <section className={'content'}> 
        {/* 置底 */}
        <section className={`bottom ${props.isTextShow && 'active'}`}> 
          <div className={`city`}>
            <font className={`title-special`}>Tainan, &nbsp; Taiwan</font>
          </div>
          <div className={`location`}>阿勇家漂亮莊園</div>
          <div className={`date`}>  星期日, 一月十二, &nbsp;2020 年 </div>
          <div><Countdown /></div>
        </section>
      </section>
      


    </section>
  </section>
)


const mapStateToProps = state => ({
  isTextShow: state.mbReducer.isTextShow
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
