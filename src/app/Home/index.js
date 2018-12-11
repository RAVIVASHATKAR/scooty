import React, { Component } from 'react'
import Map from './map'
import ScooterLocations from './scooters';

class Home extends Component {
  constructor() {
    super()
    this.state = {
      scooterLocations: ScooterLocations,
      currentLocation: {},
    }
  }

  currentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      this.locationSuccess,
    )
  }

  locationSuccess = (position) => {
    const currentLocation = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    }

    this.setState({currentLocation})
  }

  renderMap = () => {
    const { scooterLocations, currentLocation } = this.state

    if (Object.keys(currentLocation).length === 0) {
      return this.currentLocation();
    }

    return(
      <Map
        {...{ scooterLocations }}
        center={currentLocation}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBuOsOYis8mssY8a0FL-V859ol2Ktp9jPU"
        loadingElement={<div style={{width: 500, height: 500}} />}
        mapElement={<div style={{width: 500, height: 500}} />}
        containerElement={<div style={{width: 500, height: 500}} />}
      />
    )
  }

  render() {

    return (
      <div className="home">
        { this.renderMap() }
      </div>
    );
  }
}

export default Home;
