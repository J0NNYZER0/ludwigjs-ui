import React, { Component } from 'react'
import Ellipses from '../elements/Ellipses'
import ToolTip from '../elements/ToolTip'

class Table extends Component {

  constructor(props) {

    super(props)

  }

  render() {

    const { accounts } = this.props

    return (
      <div className='tblgrp'>
        {
          accounts.map((el, idx) => {
            const status = `${!!el.is_confirmed ? `Active` : `Inactive`} | ${!!el.is_in_session ? `Logged In` : `Logged Out`}`,
              role = `${el.scope.length > 0 ? el.scope : `user`}`

            return <div key={idx} className='tbl'>
              <ul className='tbl-hdr'>
                <li>
                  User
                </li>
                <li>
                  Email
                </li>
                <li>
                  Status
                </li>
                <li>
                  Role
                </li>
              </ul>
              <ul className='tbl-bdy'>
                <li>
                  {el.user_name}
                </li>
                <li>
                  <ToolTip text={el.email}>
                    <Ellipses end={12} text={el.email} />
                  </ToolTip>
                </li>
                <li>
                  <ToolTip text={status}>
                    <Ellipses end={12} text={status} />
                  </ToolTip>
                </li>
                <li>
                  <ToolTip text={role}>
                    <Ellipses end={12} text={role} />
                  </ToolTip>
                </li>
              </ul>
            </div>})
        }
      </div>
    )
  }
}

export default Table
