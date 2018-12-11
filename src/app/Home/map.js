import React, { Component } from 'react';
import currentLocation from '../lib/geolocation';
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {
  render() {
    const SINGAPORE_CENTER = { lat: 1.3521, lng: 103.8198 }
    const center = this.props.center || SINGAPORE_CENTER

    return(
      <GoogleMap
        defaultZoom={12}
        defaultCenter={center}
      >
        <Marker position={center} />
      </GoogleMap>
    )
  }
}

export default withScriptjs(withGoogleMap(Map));
