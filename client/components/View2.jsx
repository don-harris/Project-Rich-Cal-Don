import React from 'react'

import Map from './Map'

const View2 = (props) => {
  console.log({props})
  console.log('This is placeName', props.placeName)
  return (
    <div className='mapContainerDiv'>
      <h2>Map will go below this</h2>
      <h1>{props.shoutee.name} is gonna shout stuff</h1>
      <div style={{ width: '40vh', height: '60vh', background: 'black' }}>
        <Map center={props.places.location} />
      </div>
      <div>
        <ul>
          <li>{props.places.placeName}</li>
        </ul>
      </div>
      <button onClick={props.closeMap}>Close</button>
    </div >
  )
} // setting up size of div that map goes in ^^^

export default View2

// this.props.places.
// import data view2

// class View2 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {

//     }
//   }
//   render() {
//     const location = { // location variable, passing this as a center property to the Map ∨∨∨ 
//       lat: - 41.296772,
//       lng: 174.773787
//     }

//     return (
//       <div className='mapContainerDiv'>
//         <h2>Map will go below this</h2>
//         <div style={{ width: 300, height: 600, background: 'red' }}>
//           <Map center={location} />
//         </div>
//       </div >
//     )
//   } // setting up size of div that map goes in ^^^
// }
