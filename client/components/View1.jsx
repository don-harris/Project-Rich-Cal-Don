import React from 'react'
import View2 from './View2'

class View1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMapVisible: false
    }
  }

  render () {
    return (
      <div>
        <h1>EDA Treatometer! Whose turn is it to shout?</h1>
        <button onClick={this.seeMap}>Start !</button>
        {
          this.state.isMapVisible
            ? <View1 />
            : <View2 />
        }
      </div> 
    )
  }
}

export default View1
