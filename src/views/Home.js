import React, { Component } from 'react'
import ClassInfo from '../components/ClassInfo';

export default class Home extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Welcome {this.props.myName}</h1>
                <button className='btn btn-primary' onClick={this.props.updateName}>Kekambas 66</button>
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.allClassmates.map((class, idx) => (<ClassInfo class={class} key={idx} />))}
                    </tbody>
                </table>
            </div>
        )
    }
}
