
import React, { Component } from 'react'

class StatusMessage extends Component {

  render() {

    const { title, message } = this.props

    return [
      <h1 key='title'>{title}</h1>,
      <p key='message'>
        {message}
      </p>
    ]
  }
}

export default StatusMessage
