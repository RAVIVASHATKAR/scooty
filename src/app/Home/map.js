import React, { Component } from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {
  renderCurrentPositionMarker = () => {
    const { center } = this.props

    return(
      <Marker
        key={"currentPosition"}
        position={center}
        options={{icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" }}
      />
    )
  }

  renderMarkers = () => {
    let markers = [];
    const { scooterLocations } = this.props

    markers = scooterLocations.map((pos, i) => {
      return(
        <Marker
          key={i}
          position={pos}
        />
      )
    })

    markers.push(this.renderCurrentPositionMarker())
    return markers
  }

  render() {
    const SINGAPORE_CENTER = { lat: 1.3521, lng: 103.8198 }
    const center = this.props.center || SINGAPORE_CENTER

    console.log(center);
    if (center == null) { return }

    return(
      <GoogleMap
        defaultZoom={11}
        defaultCenter={center}
      >
        { this.renderMarkers() }
      </GoogleMap>
    )
  }
}

export default withScriptjs(withGoogleMap(Map));
