import React, { Component } from 'react'

export default class Computer extends Component {
    render() {
        return (
            <div className="text-center playerGame">
                <div className="theThink">
                    <img
                        style={{ transform: 'rotate(120deg' }}
                        src="./img/rock.png"
                        alt="rock.png"
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
