import React, { Component } from 'react'

import { connect } from 'react-redux';

import { setSearchField } from '../actions';

import SearchBox from './SearchBox'

import Card from './Card';


const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = dispatch => {
    return { onSearchChange: event => dispatch(setSearchField(event.target.value)) }
}
class CardList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }


    componentDidMount(props) {
        console.log(props)
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(result => this.setState({ users: result }))
            .catch(error => console.log(error));
    }
    render() {
        const filteredUsers = this.state.users.filter(user => {
            return user.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        })
        return (
            <div>
                <SearchBox searchChange={this.props.onSearchChange} />
                <Card users={filteredUsers} />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);