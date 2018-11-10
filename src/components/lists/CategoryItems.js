import React, { Component } from 'react'

class CategoryItems extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { items } = this.props

    return (
      <ul className='category-items'>
        {items
          .map((el,idx) => (
            <li key={idx}>{el.name}</li>
          ))}
      </ul>
    )
  }
}

export default CategoryItems
