import React, { Component } from 'react';
import NameTag from '../NameTag/NameTag';
import getGroupApi from '../../api/getGroupApi';
import './NameList.css';

class NameList extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
    };
  }

  componentDidMount = async () => {
    const people = await getGroupApi.getAll();
    this.setState({ people });
  };

  render() {
    const { people } = this.state;
    const names = [];

    for (let i = 0; i < people.length; i += 1) {
      const person = people[i];
      names.push(<NameTag id={person.id} name={person.name} key={person.id} />);
    }

    return (
      <div className="list-names-block">
        <h2 className="list-title">学员列表</h2>
        <section>{names}</section>
      </div>
    );
  }
}

export default NameList;