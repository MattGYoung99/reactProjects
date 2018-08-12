import React from 'react'
import './AddTodo.css'

class AddTodo extends React.Component {
    constructor(props) {
        super(props)
        this.addTodoItem = this.addTodoItem.bind(this)
    }
    addTodoItem() {
        console.log(this.props.value)
        console.log(`added todo item`)
    }
    render() {
        return (
            <button className="AddTodo" onClick={this.addTodoItem}>+</button> 
        )
    }
}

export default AddTodo