import React, { Component } from 'react'

class Button extends Component {
  constructor(props) {

    super(props)

    this.click = this.click.bind(this)

  }

  click() {

    const { click = () => { console.log('default button click') } } = this.props

    click()

  }

  render() {
    const { buttonText = '', classNames = ''} = this.props

    return (
      <button className={`btn ${classNames}`}
        onClick={this.click}>{buttonText}</button>
    )
  }
}

export default Button
