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

  render() {
    const { scooterLocations } = this.state

    return (
      <div className="home">
        <Map
          {...{ scooterLocations }}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBuOsOYis8mssY8a0FL-V859ol2Ktp9jPU"
          loadingElement={<div style={{width: 500, height: 500}} />}
          mapElement={<div style={{width: 500, height: 500}} />}
          containerElement={<div style={{width: 500, height: 500}} />}
        />
      </div>
    );
  }
}

export default Home;
