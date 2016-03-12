import React, {Component} from 'react';
import styles from './SearchBar.scss';
class SearchBar extends Component {
  render () {
    return (
      <div>
        { /* Contact Us */}
        <a href='*'>聯絡我們</a><br/>

        { /* Search Bar */ }
        <input className={styles.SearchBarSize} type='text' value='站內搜尋' />
      </div>
    );
  }
}

export default SearchBar;
