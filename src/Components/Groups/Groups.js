import React, { Component } from 'react';
import NameTag from '../NameTag/NameTag';
import './Groups.css';

class Groups extends Component {
  render() {
    return (
      <div className="groups">
        <section className="group-title-block">
          <p>1组</p>
        </section>
        <section className="block-names">
          <NameTag id="1" name="成吉思汗" />
        </section>
      </div>
    );
  }
}

export default Groups;
