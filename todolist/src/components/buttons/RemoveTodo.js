import React from 'react'
import './RemoveTodo.css'

class RemoveTodo extends React.Component {
    constructor(props) {
        super(props)
        this.removeTodoItem = this.removeTodoItem.bind(this)
    }
    removeTodoItem() {
        console.log(this.props.value)
        console.log(`removed todo item`)
    }
    render() {
        return (
            <button className="RemoveTodo" onClick={this.removeTodoItem}>-</button>
        )
    }
}

export default RemoveTodo