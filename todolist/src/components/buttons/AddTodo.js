import React from 'react'
import './AddTodo.css'


class AddTodo extends React.Component {
    render() {
        return (
            <button className="AddTodo" onClick={this.props.update}>+</button> 
        )
    }
}

export default AddTodo