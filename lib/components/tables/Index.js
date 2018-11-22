import React, { Component } from 'react'
import debounce from 'lodash/debounce'
import Ellipses from '../elements/Ellipses'
import ToolTip from '../elements/ToolTip'
import MultiSelectInput from '../inputs/MultiSelect'

class Table extends Component {

  constructor(props) {

    super(props)

    this.updateRole = debounce(this.updateRole.bind(this), 1000)

  }

  updateRole(userId, scope) {

    const { actions } = this.props

    actions.account.updateRole({id: userId, scope: scope })
  }

  render() {

    const { accounts } = this.props

    return (
      <div className='tblgrp'>
        {
          accounts.map((el, idx) => {
            const status = `${!!el.is_confirmed ? `Active` : `Inactive`} | ${!!el.is_in_session ? `Logged In` : `Logged Out`}`,
              options = [
                { name: 'User', value: 'user' },
                { name: 'Admin', value: 'admin' },
                { name: 'Super Admin', value: 'super-admin' }
              ],
              selectedOptions = el.scope.length > 0 ? el.scope.split(',') : []

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
                  <MultiSelectInput
                    callback={this.updateRole}
                    defaultText={`Select Roles`}
                    options={options}
                    selectedOptions={selectedOptions}
                    userId={el.id} />
                </li>
              </ul>
            </div>})
        }
      </div>
    )
  }
}

export default Table
