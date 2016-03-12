import React, {Component} from 'react';
import classname from 'classnames/bind';
import styles from './About.scss';
const cx = classname.bind(styles);
// import Helmet from 'react-helmet';
// import { MiniInfoBar } from 'components';
// http://palinfo.habago.org/images_misc/rachel_memory.jpg
/*
 * - 若雪圖片
 * - 若雪介紹
 */
export default class About extends Component {
  render () {
    return (
      <div className={styles.container}>
        <table>
          <tbody>
            <tr>
              <td>
                <img src={require('./rachel_memory.png')}></img>
              </td>
              <td>
                若雪．柯利是國際團結運動組織的非武力志工。2003年3月16日，她在迦薩保護巴勒斯坦民房避免被鏟除時，被以色列推土機輾死。也因為她的死，我們有機會閱讀到她寫給父母的家書 {'<若雪書信>'}。我們非常感動於她在家書中所流露的敏感、善意與助人的心。我們想要紀念這樣平凡的精神，同時也希望更多人能夠瞭解巴勒斯坦人在爭取自由及結束以色列佔領上所做的奮鬥。
              </td>
            </tr>
            <tr>
              <td colSpan='2' className={cx('lineHeight')}>
                由於主流媒體鮮少關注或真實報導巴勒斯坦人民的處境，中文世界更是付之闕如，因此我們成立了這個網站，提供巴勒斯坦和以色列問題的中文資訊，希望能夠藉著這個網站，凝聚對巴勒斯坦團結運動的關心。

                我們支持非武力直接行動（non-violent direct action）及巴勒斯坦人民自決權，反對以色列非法佔領巴勒斯坦及興建種族隔離牆。

                我們稱不上是個運動團體，但是我們歡迎熟或不熟的海內外華人朋友加入我們，協助充實這個網站，讓她發揮一些功能。
              </td>
            </tr>
            <tr>
              <td colSpan='2' style={{paddingTop: '30px'}} className={styles.lineHeight}>
                <a href='#' className={cx('copyRightLink')}>版權聲明</a>
              </td>
            </tr>
            <tr>
              <td colSpan='2' style={{paddingTop: '30px'}} className={styles.lineHeight}>
                除了本站轉載的文章及圖片，還有文章分類在「其他」這部分的文章不適用，其他由本站編譯或撰寫的文章均採Creative Commons License Attribution-NoDerivs-NonCommercial License方式授權。簡單來說就是，你可以散播、複製文章，但必須註明原作者/出處，且不可更動文字內容，不得用於商業行為。如對轉載本站文章有任何疑義，歡迎來信詢問。本站如有侵權行為請來信告知。
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
