import React, { Component } from 'react'

class Bottom extends Component {

  constructor(props) {

    super(props)

  }

  render() {

    const { children, text = '', title = '' } = this.props

    return (<div className='h-btm'>
      <div className='hero-text'>
        <h1>{title}</h1>
        <p>
          {text}
          {children}
        </p>
      </div>
    </div>)
  }
}

export default Bottom
