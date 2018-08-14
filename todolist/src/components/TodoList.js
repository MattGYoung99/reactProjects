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
      listItems: [],
      removeItems: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.addListItem = this.addListItem.bind(this)
    this.removeListItem = this.removeListItem.bind(this)
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value })
  }
  handleClick(e) {
    let value = e.currentTarget.id;
    this.setState({ removeItems: value  })
    console.log(`${value} I selected this to remove`);
  }
  removeListItem() {
    this.setState(this.state.listItems.splice(this.state.removeItems[0], 1))
    console.log(`${this.state.removeItems} I am removing these`)
  }
  addListItem() {
    let value = this.state.inputValue;
    this.setState(prevState => ({
      listItems: [...prevState.listItems, value]
    }))
  }
  render() {
    return (
      <div className="TodoList">
        <div className="TodoHead">
          <h1>To-do List</h1>
          <div>
          <input type="text" placeholder="Enter something todo" onChange={this.handleChange}></input>
          <AddTodo update={this.addListItem} />
          <RemoveTodo update={this.removeListItem}/>
          </div>
        </div>
        <div className="TodoBody">
          <List children={this.state.listItems} clicked={this.handleClick}></List>
        </div>
      </div>
    );
  }
}

export default TodoList;
