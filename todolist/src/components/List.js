import React from 'react';
import './List.css';

class List extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const children = this.props.children
        return (
            <ul className="List">
                {React.Children.map(children, (child, id) => {
                    return <li key={id}>{child}</li>
                })}
            </ul>
        )
    }
}


export default List