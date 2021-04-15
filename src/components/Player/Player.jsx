import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
    render() {
        const { bettingArray } = this.props;
        const bettingItem = bettingArray.find(item => item.isBetting === true);
        return (
            <div className="text-center playerGame">
                <div className="theThink">
                    <img
                        style={{ transform: 'rotate(120deg' }}
                        src={bettingItem.img}
                        alt={`$bettingItem.id$.png`}
                        className="mt-3"
                        width={100}
                        height={100}
                    />
                </div>

                <div className="speech-bubble"></div>
                <img style={{ width: 200, height: 200 }} src="./img/player.png" alt="player.png" />

                <div className="row">
                    {
                        bettingArray.map((item, index) => {
                            let borderStyle = {};
                            if (item.isBetting) {
                                borderStyle = { border: '8px solid orange' }
                            }
                            return (
                                <div key={index} className="col-4">
                                    <button style={borderStyle} className="btnItem">
                                        <img src={item.img} alt={`$item.id$.png`} width={50} height={50} />
                                    </button>
                                </div>                                
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        bettingArray: state.rpsGameReducer.bettingArray
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
