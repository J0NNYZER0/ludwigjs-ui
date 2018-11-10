import React, { Component } from 'react'

class MenuIcon extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { show, toggle } = this.props

    return (<div onClick={toggle} id='nav-icon'
      className={show ? `close` : ``}>
      <span />
      <span />
      <span />
      <span />
    </div>)
  }
}

export default MenuIcon
