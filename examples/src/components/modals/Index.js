import React, { Component } from 'react'
import MenuIcon from '../elements/MenuIcon'

class Modal extends Component {

  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
  }

  toggle() {

    const { actions } = this.props

    actions.ui.modal(false)

  }

  render() {

    const { ui, children } = this.props

    return (
      <div className={ui.modal === true ? `modal show` : `modal`}>
        <div className='m-header'>
          <span onClick={this.toggle} className='close' />
        </div>
        <div className='m-body'>
          {children}
        </div>
      </div>
    )
  }
}

export default Modal
