import React from 'react'
import AddTodo from './buttons/AddTodo'
import RemoveTodo from './buttons/RemoveTodo'
import './TodoList.css'

class TodoList extends React.Component {
  render() {
    return (
      <div className="TodoList">
        <div className="TodoHead">
          <h1>To-do List</h1>
          <input type="text" placeholder="Enter something todo"></input>
          <AddTodo />
          <RemoveTodo />
        </div>
        <div className="TodoBody">
        </div>
      </div>
    );
  }
}

export default TodoList;
