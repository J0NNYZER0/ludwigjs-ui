import React, { Component } from 'react'

class ProgressBar extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    const { children, current } = this.props

    return (
      <ul className='progress-bar'>
        {
          children.map((val, idx) => {

            if (idx === 0 || idx <= current) {

              return <li key={idx} className='complete' />

            }

            else return <li key={idx} />

          })
        }
      </ul>
    )
  }
}

export default ProgressBar
