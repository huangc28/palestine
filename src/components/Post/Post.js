import React, { Component } from 'react';
import styles from './Post.scss';

class Post extends Component {
  render () {
    return (
      <div className={styles.root}>
          <div className={styles.postAuthor}>
            {this.props.post.list_author} | {this.props.post.list_post_time}
          </div>
          <div className={styles.postContent}>
            {this.props.post.list_post_content}
          </div>
      </div>
    );
  }
}

// Post.propTypes = {
//   key
// }

export default Post;
