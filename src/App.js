import React, { Component } from 'react';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        name: 'test',
        complete: false,
      },
      {
        id: 2,
        name: 'test2',
        complete: true,
      },
    ],
  };
  render() {
    return (
      <div className='App'>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
