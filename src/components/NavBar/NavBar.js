import React, { Component } from 'react';
import classname from 'classnames/bind';
import {fluid, Row, Col, Nav, NavItem} from 'react-bootstrap';
import styles from './NavBar.scss';
const cx = classname.bind(styles);

/*
 *
 * - 關於本站
 * - 網站連結
 * - 巴勒斯坦地圖
 * - 你能做什麼
 * - 訪客網站留言板
 *
 */
class NavBar extends Component {
  render () {
    return (
      <fluid>
        <Row style={{'padding': '0px'}}>
          <Col md={12}>
            <Nav bsStyle='pills' className={cx('navBarContainer')}>
              <NavItem className={cx('navItemWidth')} href='/about'>關於本站</NavItem>
              <NavItem className={cx('navItemWidth')} href='#'>網站連結</NavItem>
              <NavItem className={cx('navItemWidth')} href='#'>巴勒斯坦地圖</NavItem>
              <NavItem className={cx('navItemWidth')} href='#'>訪客網站留言板</NavItem>
              <NavItem className={cx('navItemWidth')} href='#'>你能做什麼</NavItem>
            </Nav>
          </Col>
        </Row>
      </fluid>
    );
  }
}

export default NavBar;
