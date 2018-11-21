import React, { Component } from 'react'

class ToolTip extends Component {

  constructor(props) {

    super(props)

  }

  render() {

    const { children, text } = this.props

    return (
      <div className="tooltip">
        {children}
        <span className="tooltiptext">{text}</span>
      </div>
    )
  }
}

export default ToolTip
