import React, {Component} from 'react';
import Logo from '../Logo/Logo';
import Banner from '../Banner/Banner';
import {fluid, Row, Col} from 'react-bootstrap';
/*
 * - React bootstrap
 * - Logo image
 * - Banner image
 * - search bar
 *
 */
class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {
      placeholder: '站內搜尋'
    };
  }

  render () {
    console.log(this.state);
    return (
      <fluid>
        <Row>
          <Col md={2}>
            <div>
              <Logo />
            </div>
          </Col>
          <Col md={8}>
            <div>
              <Banner />
            </div>
          </Col>
          <Col md={2}>
            <div>
              { /* Contact Us */}
              <a href='*'>聯絡我們</a><br/>

              { /* Search Bar */ }
              <input type='text' value={this.state.placeholder} />
            </div>
          </Col>
        </Row>
      </fluid>
    );
  }
}

export default Header;
