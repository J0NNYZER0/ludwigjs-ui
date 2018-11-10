import React, { Component } from 'react'

class Grid extends Component {

  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)

  }

  handleClick() {

    const { click } = this.props

    click()

  }

  render() {

    const { children, classNames = '', title = '' } = this.props

    return (
      <div className={`grid ${classNames}`}>
        {children}
      </div>
    )
  }
}

export default Grid
