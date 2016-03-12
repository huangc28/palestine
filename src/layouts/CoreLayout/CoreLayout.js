import React, { PropTypes } from 'react'
import {fluid, Row, Col} from 'react-bootstrap';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import NavBar from '../../components/NavBar/NavBar';
import styles from '../../styles/core.scss'

// Note: Stateless/function components *will not* hot reload!
// react-transform *only* works on component classes.
//
// Since layouts rarely change, they are a good place to
// leverage React's new Stateless Functions:
// https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
//
// CoreLayout is a pure function of its props, so we can
// define it with a plain javascript function...
function CoreLayout ({ children }) {
  return (
    <fluid>
      <Row>
        <Col md={10} className={styles.container}>
          <Header />
          <NavBar />
          <div className={styles.content_container}>
            {children}
          </div>
        </Col>
        <Col md={2}>
          <Sidebar />
        </Col>
      </Row>
    </fluid>
  )
}

CoreLayout.propTypes = {
  children: PropTypes.element
}

export default CoreLayout
