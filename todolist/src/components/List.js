import React from 'react';
import './List.css';

class List extends React.Component {
    render() {
        return (
            <ul className="List">
                <li>Item one</li>
                <li>Item two</li>
                <li>Item three</li>
                <li>Item four</li>
            </ul>
        )
    }
}


export default List