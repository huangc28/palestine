import React, { Component } from 'react';
import NewsBlock from '../../components/NewsBlock/NewsBlock.js';
import styles from './Home.scss';

console.log(NewsBlock);
class Home extends Component {
  render() {
    return (
      <div>
        <NewsBlock />
      </div>
    );
  }
}

export default Home;
