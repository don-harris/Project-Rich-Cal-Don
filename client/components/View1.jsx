import React from 'react'

class View1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMapVisible: false
    }
   //  this.handleClick = this.handleClick.bind(this)
  }

  render () {
    return (
      <div>
        <h1>EDA Treatometer! Whose turn is it to shout?</h1>
        <button onclick={this.seeMap}>Start !</button>
        {
          this.state.isMapVisible
            ? <Home />
            : <Map />
        }
      </div> 
    )
  }
}

export default View1
