import React, { Component } from 'react';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.complete ? 'line-through' : 'none',
    };
  };

  render() {
    return <div style={this.getStyle()}>{this.props.todo.name}</div>;
  }
}

export default TodoItem;
