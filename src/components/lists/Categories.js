import React, { Component } from 'react'
import CategoryItems from './CategoryItems'

class Categories extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { item } = this.props

    return (
      <ul className='category'>
        <li>
          {item.name}
          <CategoryItems items={item.items} />
        </li>
      </ul>
    )
  }
}

export default Categories
