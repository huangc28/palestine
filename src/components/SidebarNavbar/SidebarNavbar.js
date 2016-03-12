import React, {Component} from 'react';

class SidebarNavbar extends Component {
  render () {
    return (
      <div>
        {Object.keys(this.props.sidebarMenu).map((title) => {
          title;
        })}
      </div>
    );
  }
}

SidebarNavbar.propTypes = {
  sidebarMenu: React.PropTypes.object
};

export default SidebarNavbar;
