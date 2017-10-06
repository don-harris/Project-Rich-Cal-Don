import React from 'react'

export default class SpinningImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      deg: 0,
      isSpinning: false
    }
  }
  startSpinning() {
    setInterval(() => {
      if (this.state.isSpinning) this.setState({ deg: (this.state.deg >= 360) ? 0 : this.state.deg + 1 })
    }, 1)
  }
  toggleSpinning() {
    this.setState({ isSpinning: !this.state.isSpinning })
  }
  componentDidMount() {
    this.startSpinning()
  }
  render() {
    const { deg } = this.state
    return (
      <img onClick={this.toggleSpinning.bind(this)} alt="not working" src="./charlottes-web.png" style={{ transform: `rotate(${deg}deg)` }} />
    )
  }
}