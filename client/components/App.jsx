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
      isMapVisible: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({
      isMapVisible: !this.state.isMapVisible
    })
  }


  render () {
    return (
      <div>
        <View1 seeMap={this.handleClick}/>
        <View2 />
      </div>
    )
  }
}

export default App
