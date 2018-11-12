import React, { Component } from 'react'
class Validator extends Component {

  constructor(props) {

    super(props)

  }

  render() {

    const { children, validation } = this.props

    return [
      validation && validation.isValid === -1 && validation.messages.length > 0
      && <div key='validator' className='validation'><ul>
        {validation.messages.map((message, i) => <li key={i}>{`${message}`}</li>)}
      </ul></div>,
      children
    ]
  }
}

export default Validator
