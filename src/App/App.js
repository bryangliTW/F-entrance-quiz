import React, { Component } from 'react';
import './App.scss';
import Header from '../Components/Header/Header';
import Groups from '../Components/Groups/Groups';
import NameList from '../Components/NameList/NameList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
    };
  }

  setGroups = (groups) => {
    this.setState({ groups });
  };

  render() {
    return (
      <div data-testid="app" className="App">
        {/* TODO GTB-知识点: - Header按照业务划分，应该属于分组列表，建议放在分组列表组件内 */}
        <Header setGroup={this.setGroups} />
        <Groups groups={this.state.groups} />
        {/* TODO GTB-工程实践: - 命名不合理 */}
        <NameList />
      </div>
    );
  }
}

export default App;
