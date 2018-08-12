import React from 'react'
import AddTodo from './buttons/AddTodo'
import RemoveTodo from './buttons/RemoveTodo'
import List from './List'
import './TodoList.css'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: '',
      listItems: []
  }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ value: e.target.value})
  }

  render() {
    return (
      <div className="TodoList">
        <div className="TodoHead">
          <h1>To-do List</h1>
          <input type="text" placeholder="Enter something todo" onChange={this.handleChange}></input>
          <AddTodo value={this.state.value}/>
          <RemoveTodo value={this.state.value}/>
        </div>
        <div className="TodoBody">
          <List children={this.state.listItems}></List>
        </div>
      </div>
    );
  }
}

export default TodoList;
