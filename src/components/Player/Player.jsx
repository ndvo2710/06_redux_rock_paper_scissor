import React, { Component } from "react";

export default class Player extends Component {
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
                <img style={{ width: 200, height: 200 }} src="./img/player.png" alt="player.png" />

                <div className="row">
                    <div className="col-4">
                        <button className="btnItem">
                            <img src="./img/rock.png" alt="rock.png" width={50} height={50} />
                        </button>
                    </div>
                    <div className="col-4">
                        <button className="btnItem">
                            <img src="./img/paper.png" alt="paper.png" width={50} height={50} />
                        </button>
                    </div>
                    <div className="col-4">
                        <button className="btnItem">
                            <img src="./img/scissor.png" alt="scissor.png" width={50} height={50} />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
