import React, { Component } from 'react'
import { connect } from 'react-redux';

class Computer extends Component {
    render() {
        let keyframe = `@keyframes randomItem${Date.now()} {
            0% {top: -50px;}
            25% {top: 100px;}
            50% {top: -50px;}
            75% {top: 100px;}
            100% {top: 0;}
          }`

        const { computer } = this.props;
        return (
            <div className="text-center playerGame">
                <style>
                    {keyframe}
                </style>
                <div className="theThink" style={{ position: 'relative' }}>
                    <img
                        style={{
                            position: 'absolute',
                            left: '30%',
                            animation: `randomItem${Date.now()} 0.5s`,
                            transform: 'rotate(120deg)'
                        }}
                        src={computer.img}
                        alt={`${computer.id}.png`}
                        className="mt-3"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 200, height: 200 }} src="./img/playerComputer.png" alt="playerComputer.png" />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        computer: state.rpsGameReducer.computer
    }
}

export default connect(mapStateToProps)(Computer);