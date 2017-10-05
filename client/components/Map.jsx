import React from 'react'
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps' // import sub-modules from the library, not the whole thing

class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {center: props.center}
  }

  render () {
    const mapContainer = <div style={{height: '100%', width: '100%'}}></div> // Map fill entire contents of its parent
    // return mapContainer
    return (
      <GoogleMapLoader
        containerElement = { mapContainer }
      />
    )
  }
}

export default Map

// const Map = () => {
//   const mapContainer = <div style={{ height: '100%', width: '100%' }}></div> // Map fill entire contents of its parent

//   return (
//     <div>
//       <GoogleMapLoader
//         containerElement={mapContainer}
//         googleMapElement={
//           <GoogleMap
//             defaultZoom={15}
//             defaultCenter={this.props.center}
//             options={{ streetViewControl: false, mapTypeControl: false }}>
//           </GoogleMap>
//         } />
//     </div>
//   )
// }