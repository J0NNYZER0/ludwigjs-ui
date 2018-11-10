import React, { Component } from 'react'

class GridFooter extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    const { children } = this.props

    return (
      <div className='grid-footer'>
        {children}
      </div>
    )
  }
}

export default GridFooter
