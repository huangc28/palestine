import React, { Component } from 'react';
import styles from './Logo.scss';

class Logo extends Component {
  render () {
    return (
      <div className={styles.center}>
        <img className={styles.size} src={require('./palestine_logo.png')} alt='palestine'></img>
      </div>
    );
  }
}

export default Logo;
