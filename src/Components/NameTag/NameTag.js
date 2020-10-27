import React, { Component } from 'react';
import './NameTag.css';

class NameTag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      name: props.name,
    };
  }

  render() {
    return (
      <div className="name-tag">
        <span>
          {this.state.id}. {this.state.name}
        </span>
      </div>
    );
  }
}

export default NameTag;
