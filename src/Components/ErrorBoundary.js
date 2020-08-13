import React, { Component } from 'react'

export default class ErrorBoundary extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }

    render() {

        if (this.state.hasError) {
            return <h1>Opssssssss, Something happened</h1>
        }
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
