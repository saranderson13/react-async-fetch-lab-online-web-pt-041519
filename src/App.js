import React, { Component } from 'react'

class App extends Component {

    state = {
        peopleInSpace: []
    }

    render() {
        console.log(this.state.peopleInSpace)
        return null
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    peopleInSpace: data.people
                })
            })
    }

}

export default App;
