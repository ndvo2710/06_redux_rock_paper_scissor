import React, { Component } from 'react'
import { connect } from 'react-redux'

class GameResult extends Component {
    render() {
        const { result, winScore, totalGame } = this.props;

        return (
            <div>
                <div className="display-4 text-warning">{result}<span className="text-warning"></span></div>
                <div className="display-4 text-success">Win: <span className="text-warning">{winScore}</span></div>
                <div className="display-4 text-success">Total Game: <span className="text-warning">{totalGame}</span></div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        result: state.rpsGameReducer.result,
        winScore: state.rpsGameReducer.winScore,
        totalGame: state.rpsGameReducer.totalGame,
    }
}

export default connect(mapStateToProps)(GameResult);