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
        const playerHand = hands[Math.floor(Math.random() * 3)];
        const cpuHand = hands[Math.floor(Math.random() * 3)];

        this.setState({ cpuHand, playerHand }, () => {
            // Callback after the state is updated
            console.log(this.state.playerHand);
            console.log(this.state.cpuHand);

            if (this.state.playerHand === this.state.cpuHand) {
                this.setState({
                    result: 'あいこ！'
                });
            } else if (
                (this.state.playerHand === 'グー' && this.state.cpuHand === 'チョキ') ||
                (this.state.playerHand === 'チョキ' && this.state.cpuHand === 'パー') ||
                (this.state.playerHand === 'パー' && this.state.cpuHand === 'グー')
            ) {
                this.setState({
                    result: '勝ち！',
                });
            } else {
                this.setState({
                    result: '負け！',
                });
            }
        });
    }

    render() {
        return (
            <div>
                <p>player: {this.state.playerHand}</p>
                <p>cpu: {this.state.cpuHand}</p>
                <p>{this.state.result}</p>
                <button onClick={() => { this.handleHandChange() }}>押してください</button>
            </div>
        );
    }
}

export default Main;
