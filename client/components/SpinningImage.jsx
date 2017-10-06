import React from 'react'

export default class SpinningImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      deg: 0,
      isSpinning: false
    }
  }
  componentWillUnmount() {
    // this.setState({isSpinning: false})
    clearInterval(2)
  }
  startSpinning() {
    const interval = setInterval(() => {
      if (this.props.isSpinning) this.setState({ deg: (this.state.deg >= 360) ? 0 : this.state.deg + 1 })
      // else clearInterval(2)
    }, 10)
  }
  componentDidMount () {
    this.startSpinning()
  }
  render() {
    const { deg } = this.state
    return (
      <img className="image" alt="not working" src="./images/dev-academy.png" style={{ transform: `rotate(${deg}deg)` }} />
    )
  }
}