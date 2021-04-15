import React, { Component } from 'react'
import { connect } from 'react-redux';
import Computer from '../Computer/Computer'
import GameResult from '../GameResult/GameResult'
import Player from '../Player/Player';
import "./RockPaperScissorGame.css";


class RockPaperScissorGame extends Component {
    render() {
        return (
            <div className="rockPaperScissorGame">
                <div className="row text-center mt-5">
                    <div className="col-4 mt-3">
                        <Player />
                    </div>
                    <div className="col-4 mt-3">
                        <GameResult />
                        <button onClick={() => {
                            this.props.playGame();
                        }} className="btn btn-success p-2 display-4 mt-5">
                            Play Game
                        </button>
                    </div>
                    <div className="col-4 mt-3">
                        <Computer />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            let count = 0;
            let randomComputerItem = setInterval(() => {
                dispatch({
                    type: 'RANDOM'
                })
                count++;
                if (count > 10) {
                    clearInterval(randomComputerItem)
                    dispatch({
                        type: 'END_GAME'
                    })
                }
            }, 100)
        }
    }
}

export default connect(null, mapDispatchToProps)(RockPaperScissorGame)
