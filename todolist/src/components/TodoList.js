import React from 'react'
import AddTodo from './buttons/AddTodo'
// import RemoveTodo from './buttons/RemoveTodo'
import List from './List'
import './TodoList.css'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      inputValue: '',
      listItems: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.addListItem = this.addListItem.bind(this)
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value})
  }

  addListItem() {
    let value = this.state.inputValue;
    this.setState(prevState => ({
      listItems: [...prevState.listItems, value]
    }))
    console.log(value)
    return value;
  }
  render() {
    return (
      <div className="TodoList">
        <div className="TodoHead">
          <h1>To-do List</h1>
          <input type="text" placeholder="Enter something todo" onChange={this.handleChange}></input>
          <AddTodo update={this.addListItem} />
        </div>
        <div className="TodoBody">
          <List children={this.state.listItems}></List>
        </div>
      </div>
    );
  }
}

export default TodoList;
