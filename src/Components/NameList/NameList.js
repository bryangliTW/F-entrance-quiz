import React, { Component } from 'react';
import NameTag from '../NameTag/NameTag';
import getGroupApi from '../../api/getGroupApi';
import './NameList.css';

class NameList extends Component {
  constructor() {
    super();
    // TODO GTB-知识点: - people应该提取到App组件中，分组操作会引起这3个数据的变化
    this.state = {
      people: [],
      editMode: false,
    };
  }

  componentDidMount = async () => {
    const people = await getGroupApi.getAll();
    this.setState({ people });
  };

  addMember = () => {
    this.setState({
      editMode: true,
    });
  };

  submitNew = async (event) => {
    this.setState({
      editMode: false,
    });
    // TODO GTB-知识点: - event.target.value即可取到值
    const name = event.target.elements.name.value;
    // TODO GTB-知识点: - 需要等到post name成功后再去获取列表，不然会有bug
    getGroupApi.post(name);
    const people = await getGroupApi.getAll();
    this.setState({ people });
  };

  render() {
    const { people } = this.state;
    const names = [];

    // TODO GTB-知识点: - 建议用ES6 forEach
    for (let i = 0; i < people.length; i += 1) {
      const person = people[i];
      names.push(<NameTag id={person.id} name={person.name} key={person.id} />);
    }

    return (
      <div className="list-names-block">
        <h2 className="list-title">学员列表</h2>
        <section>
          {/* TODO GTB-知识点: - name可以在JSX template中拼装 */}
          {names}
          {this.state.editMode === false ? (
            <button type="button" className="add-button" onClick={this.addMember}>
              +添加学员
            </button>
          ) : (
            <form onSubmit={this.submitNew}>
              <input type="text" name="name" className="add-input" />
            </form>
          )}
        </section>
      </div>
    );
  }
}

export default NameList;
