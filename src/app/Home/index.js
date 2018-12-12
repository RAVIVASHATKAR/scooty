import React, { Component } from 'react'
import Home from './home';

class HomeContainer extends Component {
  constructor() {
    super()

    this.state = {
      scooters: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000?lat=1.3521&lng=103.8198&radius=5')
      .then(response => response.json())
      .then(this.loadSuccess)
  }

  loadSuccess = (data) => {
    this.setState({ scooters: this.format(data) })
  }

  format = (data) => {
    const newData = data

    data.forEach((obj, i) => {
      newData[i].latitude = parseFloat(obj.latitude)
      newData[i].longitude = parseFloat(obj.longitude)
    })

    return newData
  }

  render() {
    const { scooters } = this.state

    if (scooters.length == 0) { return <div /> }

    return(
      <Home
        {...{ scooters }}
      />
    )
  }
}

export default HomeContainer;
