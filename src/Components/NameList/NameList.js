import React, { Component } from 'react';
import NameTag from '../NameTag/NameTag';
import './NameList.css';

class NameList extends Component {
  render() {
    return (
      <div className="list-names-block">
        <h2 className="list-title">学员列表</h2>
        <section className="list-names">
          <NameTag id="1" name="成吉思汗" />
        </section>
      </div>
    );
  }
}

export default NameList;
