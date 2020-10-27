import React, { Component } from 'react';
import './Header.css';
import getGroupApi from '../../api/getGroupApi';

class Header extends Component {
  shuffle = async () => {
    const groups = await getGroupApi.randomize();
    this.props.setGroup(groups);
  };

  render() {
    return (
      <div>
        <header className="page-header">
          <h2 className="header-title">分组列表</h2>
          <button className="randomize-students" type="button" onClick={this.shuffle}>
            分组学员
          </button>
        </header>
      </div>
    );
  }
}

export default Header;
