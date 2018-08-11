import React from 'react';
import AddTodo from './buttons/AddTodo'
import RemoveTodo from './buttons/RemoveTodo'
import './TodoList.css';

class TodoList extends React.Component {
  render() {
    return (
      <div className="TodoList">
        This is my Todo List
        <AddTodo />
        <RemoveTodo />
      </div>
    );
  }
}

export default TodoList;
