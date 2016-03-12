import React, {Component} from 'react';
import styles from './Sidebar.scss';
import { Link } from 'react-router';
import SidebarLogo from '../SidebarLogo/SidebarLogo';
class Sidebar extends Component {
  render () {
    return (
      <div className={styles.sidebarContainer}>
        <div className={styles.sidebarLogoContainer}>
          <SidebarLogo />
        </div>
        {/* sidebar navigation */}
        <div className={styles.sidebarNavBar}>
          <ul>
            <li className={styles.black}>
              <Link to='#'> 新聞簡報 </Link>
            </li>
            <li className={styles.green}>
              <Link to='#'> 歷史背景 </Link>
            </li>
            <li className={styles.blue}>
              <Link to='#'> 隔離區 </Link>
            </li>
            <li className={styles.red}>
              <Link to='#'> 屯墾區 </Link>
            </li>
            <li className={styles.black}>
              <Link to='#'> 難民問題 </Link>
            </li>
            <li className={styles.green}>
              <Link to='#'> 政治文化 </Link>
            </li>
            <li className={styles.blue}>
              <Link to='#'> 若雪書信 </Link>
            </li>
            <li className={styles.red}>
              <Link to='#'> 人權狀況 </Link>
            </li>
            <li className={styles.black}>
              <Link to='#'> 運動紀實 </Link>
            </li>
            <li className={styles.green}>
              <Link to='#'> 直接行動 </Link>
            </li>
            <li className={styles.blue}>
              <Link to='#'> 其他地區 </Link>
            </li>
            <li className={styles.red}>
              <Link to='#'> 其他 </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Sidebar;
