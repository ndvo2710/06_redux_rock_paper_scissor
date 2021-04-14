import React, { Component } from 'react'
import Computer from '../Computer/Computer'
import GameResult from '../GameResult/GameResult'
import Player from '../Player/Player';
import "./RockPaperScissorGame.css";


export default class RockPaperScissorGame extends Component {
    render() {
        return (
            <div className="rockPaperScissorGame">
                <div className="row text-center mt-5">
                    <div className="col-4 mt-3">
                        <Player />
                    </div>
                    <div className="col-4 mt-3">
                        <GameResult />
                        <button className="btn btn-success p-2 display-4 mt-5">
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
