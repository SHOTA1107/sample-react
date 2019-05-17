import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [
        {
          title: 'デフォルトTODO',
          id: 0,
        },
      ],
      uniqueId: 1,
    };
    this.resetTodo = this.resetTodo.bind(this);
  }

  addTodo = (title) => {
    const{
      tasks,
      uniqueId,
    } = this.state;

    tasks.push({
      title,
      id: uniqueId,
    });

    this.setState({
      tasks,
      uniqueId: uniqueId + 1,
    });

    this.addTodo = this.addTodo.bind(this);

  }

  resetTodo(){
    this.setState({
      tasks: [],
    });
  }

  render(){
    return(
      <div className="App">
        <h1>TODO APP</h1>
        <TodoInput addTodo={this.addTodo} />
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
