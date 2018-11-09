import React, { Component } from 'react'

class GridBody extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    const { children } = this.props

    return (
      <div className='grid-body'>
        {children}
      </div>
    )
  }
}

export default GridBody
