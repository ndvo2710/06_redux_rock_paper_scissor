import React, { Component } from 'react'
import { connect } from 'react-redux';

class Computer extends Component {
    render() {
        const { computer } = this.props;
        return (
            <div className="text-center playerGame">
                <div className="theThink">
                    <img
                        style={{ transform: 'rotate(120deg' }}
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