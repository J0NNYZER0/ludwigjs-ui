import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Logo extends Component {

  constructor(props) {
    super(props)

  }

  render() {
    return (
      <NavLink exact activeStyle={{fontWeight: 'bold'}} to='/'>
        <span className='logo' id='top' />
      </NavLink>)
  }
}

export default Logo
