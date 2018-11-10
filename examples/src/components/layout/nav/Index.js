import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Constants as constants } from '../../../constants/index'
import DropDown from '../DropDown'

class Navbar extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    const { account, logout } = this.props,
      activeStyle = {fontWeight: 'bold'}
    return (
      <nav>
        <ul>
          <li>
            <NavLink exact activeStyle={activeStyle} to='/product'>
              Product
            </NavLink>
          </li>
          <li className='dd'>
            <DropDown {...this.props} btnTitle='Plans' />
          </li>
          <li>
            <NavLink activeStyle={activeStyle} to='/contact'>
              Contact
            </NavLink>
          </li>
          {account.status !== constants.ACCOUNT_STATUS.LOGGED_IN && <li>
            <NavLink activeStyle={activeStyle} to='/register'>
              Register
            </NavLink>
          </li>}
          {account.status === constants.ACCOUNT_STATUS.LOGGED_IN && <li>
            <NavLink activeStyle={activeStyle} to='/account'>
              Account
            </NavLink>
          </li>}
          <li>
            {account.status !== constants.ACCOUNT_STATUS.LOGGED_IN
              ? <NavLink activeStyle={activeStyle} to='/login'>Login</NavLink>
              : <div className='logout' onClick={logout}>Logout</div>}
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
