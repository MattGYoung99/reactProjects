import React from 'react'
import AddTodo from './buttons/AddTodo'
import List from './List'
import './TodoList.css'
import RemoveTodo from './buttons/RemoveTodo';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      inputValue: '',
      listItems: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.addListItem = this.addListItem.bind(this)
    this.removeListItem = this.removeListItem.bind(this)
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value})
  }
  handleClick(e) {
    console.log(e.currentTarget.id)
  }
  removeListItem() {
    console.log(this.state)
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
          <RemoveTodo update={this.removeListItem}/>
        </div>
        <div className="TodoBody">
          <List children={this.state.listItems} clicked={this.handleClick}></List>
        </div>
      </div>
    );
  }
}

export default TodoList;
