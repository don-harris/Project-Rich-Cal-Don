import React from 'react'
import View2 from './View2'

class View1 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isMapVisible: false
    }
  }

  render (props) {
    console.log('this is props:', this.props)
    return (
      <div>
        <h1>EDA Treatometer! Whose turn is it to shout?</h1>
        <button onClick={() => this.props.seeMap()}>Start !</button>
        
      </div>
    )
  }
}

export default View1
