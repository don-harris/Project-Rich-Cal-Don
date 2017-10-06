import React from 'react'
import View2 from './View2'
import SpinningImage from './SpinningImage'

class View1 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isMapVisible: false
    }
  }

  render () {
    console.log('this is props:', this.props)
    return (
      <div className="container has-text-centered">
        <h1 className="title is-1">EDA Treatometer!</h1>
        <h1 className="subtitle is-1" >Whose turn is it to shout?</h1>
        <button className="button is-large" onClick={() => this.props.seeMap()}>Start !</button>
        <section className="section">
          <SpinningImage isSpinning={this.props.isSpinning}/>
        </section>
      </div>
    )
  }
}

export default View1
