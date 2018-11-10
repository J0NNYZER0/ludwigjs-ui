import React, { Component } from 'react'

class DangerousHtml extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    const { children, classNames = '' } = this.props,
      createMarkup = () => ({__html: children.toString() })

    return (
      <p className={classNames} dangerouslySetInnerHTML={createMarkup()} />
    )
  }
}

export default DangerousHtml
