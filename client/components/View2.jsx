import React from 'react'

// import reactDOM from 'react-dom'

import Map from './Map'

class View2 extends React.Component {
  render() {
    const location = { // location variable, passing this as a center property to the Map ∨∨∨ 
      lat: - 41.296772,
      lng: 174.773787
    }

    return (
      <div className='mapContainerDiv'>
        <h2>Map will go below this</h2>
        <div style={{ width: 300, height: 600, background: 'red' }}>
          <Map center={location} />
        </div>
      </div >
    )
  } // setting up size of div that map goes in ^^^
}

export default View2