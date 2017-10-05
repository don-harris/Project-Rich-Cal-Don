import React from 'react'

// import { BrowserRouter as Router, Route } from 'react-router-dom'

// import ReactDOM from 'react-dom'

import users from '../../seeds/users.js'
import places from '../../seeds/places.js'

import View1 from './View1'
import View2 from './View2'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      users: users,
      places: places,
      isMapVisible: false,
      shoutee: null
    }
    this.seeMap = this.seeMap.bind(this)
    this.closeMap = this.closeMap.bind(this)
  }

  seeMap () {
    // console.log('this is this.state:', this.state)
    // console.log('this is isMapvis', isMapVisible)
    console.log({users})
    this.setState({
      isMapVisible: true,
      shoutee: users[Math.round(Math.random() * users.length)],
      places: places[Math.round(Math.random() * places.length)]
    })
  }

  closeMap () {
    this.setState({
      isMapVisible: false,
      shoutee:null
    })
  }

  render () {
    console.log(this.state)
    return (
      <div>
        {
          this.state.isMapVisible
            ? <View2 closeMap={this.closeMap} shoutee={this.state.shoutee} places={this.state.places}/>
            : <View1 seeMap={this.seeMap} users={users} places={places}/>
        }
      </div>
    )
  }
}

export default App
