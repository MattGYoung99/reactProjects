import React from 'react'
import './RemoveTodo.css'

class RemoveTodo extends React.Component {
    render() {
        return (
            <button className="RemoveTodo" onClick={this.props.update}>Remove Item</button>
        )
    }
}

export default RemoveTodo