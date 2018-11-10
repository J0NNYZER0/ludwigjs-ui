import React, { Component } from 'react'

class CompanyName extends Component {

  constructor(props) {
    super(props)

  }

  render() {
    let today = new Date(),
      year = today.getFullYear()

    return (
      <span className='company-name'>
        Ludwig
      </span>
    )
  }
}

export default CompanyName
