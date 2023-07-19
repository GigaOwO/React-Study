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

    handleHandChange = (num) => {
        const hands = ['グー', 'チョキ', 'パー'];
        const playerHand = hands[num];
        const cpuHand = hands[Math.floor(Math.random() * hands.length)];

        this.setState({ playerHand, cpuHand }, () => {
            // ステートが更新された後のコールバック
            console.log(this.state.playerHand);
            console.log(this.state.cpuHand);

            // プレイヤーとCPUの手に基づいて結果を決定するコード
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
    };

    render() {
        const { playerHand, cpuHand, result } = this.state;

        return (
            <div>
                <p>player: {playerHand}</p>
                <p>cpu: {cpuHand}</p>
                <p>{result}</p>
                <button onClick={() => this.handleHandChange(0)}>グー</button>
                <button onClick={() => this.handleHandChange(1)}>チョキ</button>
                <button onClick={() => this.handleHandChange(2)}>パー</button>
            </div>
        );
    }
}

export default Main;
