import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class DropDown extends Component {

  constructor(props) {

    super(props)

    this.state = {
        show: false
    }

    this.toggle = this.toggle.bind(this)
  }

  componentDidUpdate(prevProps) {

    const { location } = this.props

    if (location.pathname !== prevProps.location.pathname) {
      this.setState({show: false})
    }
  }

  toggle() {

    const { show } = this.state

    this.setState({ show: !show })

  }

  render() {

    const { btnTitle = '', children } = this.props,
      { show } = this.state,
      activeStyle = {fontWeight: 'bold'}

    return [
      <span key='dd-btn' className={show ? 'ddm-btn minus' : 'ddm-btn plus'} onClick={this.toggle}>{btnTitle}</span>,
      <ul key='dd-mnu' className={`${show ? 'ddm show' : 'ddm'}`}>
        {children}
      </ul>
    ]
  }
}

export default DropDown
