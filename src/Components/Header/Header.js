import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="page-header">
          <h2 className="header-title">分组列表</h2>
          <button className="randomize-students" type="button">
            分组学员
          </button>
        </header>
      </div>
    );
  }
}

export default Header;
