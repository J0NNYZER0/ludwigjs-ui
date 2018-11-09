import React, { Component } from 'react'

class Top extends Component {

  constructor(props) {

    super(props)

  }

  render() {

    const { children } = this.props

    return (<div className='h-top'>
      {children}
    </div>)
  }
}

export default Top
