export default function currentLocation() {
  var currentPosition = {}

  navigator.geolocation.getCurrentPosition((position) => {
    currentPosition.lat = position.coords.latitude
    currentPosition.lng = position.coords.longitude
  })

  return currentPosition
}
