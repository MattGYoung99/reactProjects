import React from 'react';
import './List.css';

class List extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const children = this.props.children
        return (
            <ol className="List">
                {React.Children.map(children, (child, id) => {
                    return <li id={id} key={id} onClick={(e) => this.props.clicked(e)}>{child}</li>
                })}
            </ol>
        )
    }
}


export default List