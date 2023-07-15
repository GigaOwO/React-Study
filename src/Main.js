import { toHaveDisplayValue } from '@testing-library/jest-dom/matchers';
import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerHand: '',
            cpuHand: '',
            result: '',
        };
    }
    handleHandChange() {
        const hands = ['グー', 'チョキ', 'パー'];
        this.setState({
            playerHand: hands[Math.floor( Math.random() * 3)]
        });
        this.setState({
            cpuHand: hands[Math.floor( Math.random() * 3)]
        });
        if (this.state.playerHand === this.state.cpuHand) {
            this.setState({
                result: 'あいこ！'
            });
        } else {
            if (this.state.playerHand === 'グー') {
                if (this.state.cpuHand === 'パー') {
                    this.setState({
                        result: '負け！',
                    });
                } else if (this.state.cpuHand === 'チョキ') {
                    this.setState({
                        result: '勝ち！',
                    });
                }
            } else if (this.state.playerHand === 'チョキ') {
                if (this.state.cpuHand === 'グー') {
                    this.setState({
                        result: '負け！',
                    });
                }
                if (this.state.cpuHand === 'パー') {
                    this.setState({
                        result: '勝ち！',
                    });
                }
            } else if (this.state.playerHand === 'パー') {
                if (this.state.cpuHand === 'グー') {
                    this.setState({
                        result: '勝ち！',
                    });
                }
                if (this.state.cpuHand === 'チョキ') {
                    this.setState({
                        result: '負け！',
                    });
                }
            }
        }
    }

    render() {
        return(
            <div>
                <p>player: {this.state.playerHand}</p>
                <p>cpu: {this.state.cpuHand}</p>
                <p>{this.state.result}</p>
                <button onClick={() => {this.handleHandChange()}}>押してください</button>
            </div>
        );
    }
}

export default Main;