import React, { Component } from 'react'

import { connect } from 'react-redux';

import { setSearchField, requestRobots } from '../actions';

import SearchBox from './SearchBox'

import Card from './Card';


const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: event => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}
class CardList extends Component {


    componentDidMount(props) {
        this.props.onRequestRobots()
    }
    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props
        const filteredUsers = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return isPending ?
            <h1>Loading</h1> :
            (
                <div>
                    <SearchBox searchChange={onSearchChange} />
                    <Card users={filteredUsers} />
                </div>
            )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);