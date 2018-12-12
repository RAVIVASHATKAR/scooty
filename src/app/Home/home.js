import React, { Component } from 'react'
import Map from './map'
import './home.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scooterLocations: props.scooters,
      form: {
        lat: "",
        lng: "",
        radius: "",
      }
    }
  }

  handleChange = (event) => {
    const { form } = this.state;
    form[event.target.name] = event.target.value

    this.setState({ form })
  }

  render() {
    const {
      scooterLocations,
      lat,
      lng,
      radius,
   } = this.state

    return (
      <div className="home">
        <Map
          {...{ scooterLocations }}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBuOsOYis8mssY8a0FL-V859ol2Ktp9jPU"
          loadingElement={<div style={{width: 500, height: 500}} />}
          mapElement={<div style={{width: 500, height: 500}} />}
          containerElement={<div style={{width: 500, height: 500}} />}
        />
        <form action="http://localhost:3000/scooters" className="scooters">
          <label>
            Latitude
            <input type="text" name="lat" value={lat} onChange={this.handleChange} />
          </label>

          <label>
            Longitude
            <input type="text" name="lng" value={lng} onChange={this.handleChange} />
          </label>

          <label>
            Radius
            <input type="text" name="radius" value={radius} onChange={this.handleChange} />
          </label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Home;
