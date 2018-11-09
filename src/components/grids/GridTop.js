import React, { Component } from 'react'
import DangerousHtml from '../DangerousHtml'

class GridTop extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    const { children, title } = this.props
    return [
      <div key='grid-top-header' className='grid-header'>{title}</div>,
      <DangerousHtml key='grid-top-content' classNames='description'>
        {children}
      </DangerousHtml>
    ]
  }
}

export default GridTop
