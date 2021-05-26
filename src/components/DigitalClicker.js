import React from 'react'



export default class DigitalClicker extends React.Component {

    state = {
        timesClicked: 0
    }

    handleClick = () => {
        let newClick = this.state.timesClicked + 1
        this.setState({
            
            timesClicked: newClick
        })

    }

    render() {

        console.log(this.state.timesClicked)
        return (
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        )
    }

}
