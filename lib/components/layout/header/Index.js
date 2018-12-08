import React, { Component } from 'react'
import Logo from '../Logo'
import MenuIcon from '../../elements/MenuIcon'
import NavBar from '../nav/Index'

class Header extends Component {

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
      window.scrollTo(0,0)
    }
  }

  toggle() {
    this.setState({show: !this.state.show})
  }

  render() {

    const { show } = this.state

    return (
      <header className={show ? `show` : ``}>
        <div className='h-left'>
          <div>
            <Logo />
          </div>
          <div>
            <MenuIcon toggle={this.toggle} show={show} />
          </div>
        </div>
        <div className='h-right'>
          <NavBar {...this.props} />
        </div>
      </header>
    )
  }
}

export default Header
