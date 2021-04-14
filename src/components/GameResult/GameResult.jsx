import React, { Component } from 'react'

export default class GameResult extends Component {
    render() {
        return (
            <div>
                <div className="display-4 text-warning">You lose!!! <span className="text-warning"></span></div>
                <div className="display-4 text-success">Win: <span className="text-warning">0</span></div>
                <div className="display-4 text-success">Total Game: <span className="text-warning">0</span></div>
            </div>
        )
    }
}
