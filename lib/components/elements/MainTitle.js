import React, { Component } from 'react'

class MainTitle extends Component {

  render() {
    const { titleText = '', classNames = ''} = this.props

    return (
      <h1 className={`main-title ${classNames}`}>{`${titleText}`}</h1>
    )
  }
}

export default MainTitle
