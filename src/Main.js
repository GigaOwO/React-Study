import { toHaveDisplayValue } from '@testing-library/jest-dom/matchers';
import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerHand: '',
        };
    }
    handleHandChange() {
        var num = Math.floor( Math.random() * 3);
        const hands = ['グー', 'チョキ', 'パー'];
        if (num === 0) {
            this.setState({
                playerHand: hands[num],
            });
        } else if (num === 1) {
            this.setState({
                playerHand: hands[num],
            });
        } else if (num === 2) {
            this.setState({
                playerHand: hands[num],
            });
        }
    }

    render() {
        return(
            <div>
                <h1>{this.state.playerHand}</h1>
                <button onClick={() => {this.handleHandChange()}}>+</button>
            </div>
        );
    }
}

export default Main;