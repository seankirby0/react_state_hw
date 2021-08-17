import React, { Component } from 'react'

export default class ClassInfo extends Component {
    render() {
        const class = this.props.class;
        return (
            <tr>
                <td>{class.first_name}</td>
                <td>{class.last_name}</td>
                <td>{class.id}</td>
            </tr>
        )
    }
}