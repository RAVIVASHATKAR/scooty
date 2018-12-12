import React, { Component } from 'react';

const withCurrentLocation = (WrappedComponent) => {
  return class currentLocationHOC extends Component {
    constructor(props) {
      super(props)

      this.state = {
        position: props.center || {},
      }
    }

    isEmpty = (position) => {
      if (Object.keys(position).length === 0) {
        return true
      }

      return false
    }

    getCurrentLocation = () => {
      navigator.geolocation.getCurrentPosition(
        this.locationSuccess,
        this.locationError,
      )
    }

    locationError = () => {
      console.log("Something went wrong?")
    }

    locationSuccess = (location) => {
      const position = {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      }

      this.setState({position})
    }

    render() {
      const { position } = this.state

      if (this.isEmpty(position)) {
        // loading wheel
        this.getCurrentLocation()
        return <div />
      }

      return(
        <WrappedComponent
          {...this.props}
          center={position}
        />
      )
    }
  }
}

export default withCurrentLocation
