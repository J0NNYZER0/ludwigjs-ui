import React, { Component } from 'react'

class Ellipses extends Component {

  constructor(props) {
    super(props)

    this.state = {
      ellipsed: ''
    }
  }

  componentDidMount() {

    const { end, text } = this.props

    this.setState({ ellipsed: text.substring(0, end) })
  }

  render() {

    const { ellipsed } = this.state

    return (
      <span className='ellipsed'>
        {`${ellipsed}...`}
      </span>
    )
  }
}

export default Ellipses
