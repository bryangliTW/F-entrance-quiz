import React, { Component } from 'react';
import NameTag from '../NameTag/NameTag';
import './Groups.css';

class Groups extends Component {
  render() {
    const { groups } = this.props;
    const displayGroup = [];
    if (groups) {
      groups.map((group) =>
        displayGroup.push(
          <div className="groups" key={group.id}>
            <section className="group-title-block">
              <p>{group.id + 1} 组</p>
            </section>
            <section className="block-names">
              {group.group.map((person) => (
                <NameTag id={person.id} name={person.name} key={person.id} />
              ))}
            </section>
          </div>
        )
      );
    }
    return displayGroup;
  }
}

export default Groups;
