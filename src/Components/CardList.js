import React, { Component } from 'react'
import SearchBox from './SearchBox'
import Card from './Card';


export default class CardList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: [],
            searchField: ''
        }
    }

    onSearchChange = e => {
        this.setState({
            searchField: e.target.value
        })
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(result => this.setState({ users: result }))
            .catch(error => console.log(error));
    }
    render() {
        const filteredUsers = this.state.users.filter(user => {
            return user.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return (
            <div>
                <SearchBox searchChange={this.onSearchChange} />
                <Card users={filteredUsers} />
            </div>
        )
    }
}

