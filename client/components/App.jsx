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
      shoutee: null,
      isSpinning: false,
      countDown: null
    }
    this.seeMap = this.seeMap.bind(this)
    this.closeMap = this.closeMap.bind(this)
  }

  seeMap () {
    this.setState({isSpinning: true, countDown: 5})
    let handle
    handle = setInterval(() => {
      if (this.state.countDown == null) return
      else if (this.state.countDown > 0 ) this.setState({countDown: this.state.countDown - 1})
      else {
        this.setState({
          isMapVisible: true,
          isSpinning: false,
          countDown: null,
          shoutee: users[Math.round(Math.random() * users.length -1)],
          places: places[Math.round(Math.random() * places.length -1)]
        })
        clearInterval(handle)
      }
    }, 1000)
  }

  closeMap () {
    this.setState({
      isMapVisible: false,
      shoutee:null
    })
  }

  render () {
    return (
      <div className="section has-text-centered">
        {
          this.state.isMapVisible
            ? <View2 closeMap={this.closeMap} shoutee={this.state.shoutee} places={this.state.places}/>
            : <View1 isSpinning={this.state.isSpinning} seeMap={this.seeMap} users={users} places={places}/>
        }
        {this.state.isSpinning && <h1>{this.state.countDown}</h1>}
      </div>
    )
  }
}

export default App
