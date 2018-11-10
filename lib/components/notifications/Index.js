import React, { Component } from 'react'
import MenuIcon from '../elements/MenuIcon'

class Notifications extends Component {

  constructor(props) {
    super(props)

    this.state = {
      show: false
    }

    this.toggle = this.toggle.bind(this)
  }

  componentDidUpdate(prevProps) {

    const { messages } = this.props

    if (messages !== prevProps.messages) {

      if (messages.length > 0) {

        this.setState({show: true})

      }

    }

  }

  toggle() {
    this.setState({show: !this.state.show})
  }

  render() {

    const { messages } = this.props,
      { show } = this.state

    return (
      <div className={show === true ? `notifications show` : `notifications`}>
        <div>
          <p>
            <span onClick={this.toggle} className='close' />
          </p>
        </div>
        <div>
          {messages.map((el, i) => (<p key={i}>{el.message}</p>))}
        </div>
      </div>
    )
  }
}

export default Notifications
