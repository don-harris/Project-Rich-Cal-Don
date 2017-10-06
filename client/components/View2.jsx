import React from 'react'

import Map from './Map'

const View2 = (props) => {
  console.log({ props })
  console.log('This is placeName', props.placeName)
  return (
    <div className='mapContainerDiv container has-text-centered'>
      <h1 className='title'>{props.shoutee.name}'s shout! Woohoo!!</h1>
      <div style={{ width: '40vh', height: '40vh', background: 'black' }}>
        <Map center={props.places.location} />
      </div>

      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={props.places.img} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src="http://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{props.places.placeName}</p>
              <p className="subtitle is-6"><a href={props.places.url}>Website</a></p>
            </div>
          </div>

          <div className="content">{props.places.info}
            <br />
            <p>{props.places.address}</p>
          </div>
        </div>
      </div>

      <button className='button' onClick={props.closeMap}>Close</button>
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
