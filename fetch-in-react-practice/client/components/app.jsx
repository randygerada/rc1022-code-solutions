import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    fetch('/api/todos')
      .then(response => response.json())
      .then(todos => this.setState({ todos }))

  }

  addTodo(newTodo) {
    fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify(newTodo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(todo => {
        const newTodos = this.state.todos.concat(todo);
        this.setState({ todos: newTodos });
      });

  }

  toggleCompleted(todoId) {
    const oldTodo = this.state.todos.findIndex(todo => {
      return todo.todoId === todoId;
    }); //=== todoId);
    const req = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ isCompleted: !oldTodo.isCompleted})
    };

      fetch(`/api/todos/${todoId}`, req)
        .then(response => response.json())
        .then(updated => {
          const allTodos = this.state.todos.map(original => {
            return original.todoId === updated.todoId
             ? updated
             : original;
          });
          this.setState({ todos: allTodos });
        });

    }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
