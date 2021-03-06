import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../../components/Post/Post';
import styles from './GuestBook.scss';

class GuestBook extends Component {
  render () {
    return (
      <div className={styles.root}>
        <table>
          <thead>
            <tr>
              <td className={styles.guestBookNotification}>
                <div style={{border: '1px dotted #CCCCCC'}}>
                  <p>
                    留言須知：姓名和Email為必填，但是Email並不會顯示在網站上以避免垃圾郵件的攻擊。另外請打開瀏覽器的 Javascript 才能正常留言。
                  </p>
                  <p>
                    留言時按enter空行，系統會自動轉換斷行。
                  </p>
                  <p>
                    注意：2010年11月25日以前的留言均轉移到舊留言版檔案區這裡，其中PDF檔格式為更早2004年以前舊站的留言，htm檔案格式則為本站開站以來的留言。
                  </p>
                </div>
              </td>
            </tr>
          </thead>
        </table>

        {/* posts container */}
        <div>
          {this.props.posts.map((post, i) => {
            return (
              <Post
                key={i}
                post={post}
              />
            );
          })}
        </div>
      </div>
    );
  }
};

GuestBook.propTypes = {
  posts: React.PropTypes.array
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts
  };
};

export default connect(mapStateToProps)(GuestBook);
