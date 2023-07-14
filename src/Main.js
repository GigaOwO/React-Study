import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hand: '',
        };
    }
    handleHandChange(event) {
        // var num = Math.floor( Math.random() * 3) + 1;
        // console.log(num);
        // if (num === 1) {

        // }
        // this.setState({
        //     hand: 
        // });
    }

    render() {
        var num = Math.floor( Math.random() * 3);
        console.log(num);
        return(
            <h1>HelloWorld</h1>
        );
    }
}

export default Main;