import React, { Component } from 'react'

class Accordion extends Component {

  constructor(props) {
    super(props)

    this.state = {
      show: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({show: !this.state.show})
  }

  render() {

    const { children, title } = this.props,
      { show } = this.state

    return (
      <div className={show === false ? `accordion` : `accordion active`}>
        <div onClick={this.toggle}>
          <h2>{title}</h2>
        </div>
        <div>
          {children}
        </div>
      </div>
    )
  }
}

export default Accordion
