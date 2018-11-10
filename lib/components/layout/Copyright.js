import React, { Component } from 'react'

class Copyright extends Component {

  constructor(props) {
    super(props)

  }

  render() {
    let today = new Date(),
      year = today.getFullYear()

    return (
      <span className='copyright'>
        &copy; {year}
      </span>
    )
  }
}

export default Copyright
