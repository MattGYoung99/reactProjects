import React from 'react'
import './RemoveTodo.css'

class RemoveTodo extends React.Component {
    render() {
        return (
            <button className="RemoveTodo" onClick={this.props.update}>-</button>
        )
    }
}

export default RemoveTodo