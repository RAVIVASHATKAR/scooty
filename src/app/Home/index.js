import React, { Component } from 'react'
import Map from './map'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Map
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
