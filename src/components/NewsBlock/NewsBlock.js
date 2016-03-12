import React, { Component } from 'react';

/*
 * NewsBlock
 *  - News block header
 *  - News block content
 *
 *
 */
class NewsBlock extends Component {
  render () {
    const styles = require('./NewsBlock.scss');
    return (
      <div className={styles.container}>
        {/* NewsBlock Header */}
        <div>
          {/* Green Tag */}
          <div className={styles.tag}>
            直接行動
          </div>

          {/* title */}
          <div className={styles.title}>
            2015年11月站樁公告－11/21
          </div>
          <div className={styles.clear}></div>
        </div>

        {/* NewsBlock content */}
        <div className={styles.content}>
          <span>calendar icon</span>
          <span>publisher</span>
          <p>時間：2016年2月20日 (星期六) 下午3點至5點。 地點：台北市和平東路、師大路口人行道上(北側：面向師大路)。 (閱讀全文)</p>
        </div>
      </div>
    );
  }
}

export default NewsBlock;
