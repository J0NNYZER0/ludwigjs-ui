import React, { Component } from 'react'

class Checkbox extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    const { children, classNames = '', isChecked, onChange } = this.props

    return (
      <label className={`checkbox-input ${classNames}`}>{children}
        <input checked={isChecked}
          onChange={onChange}
          type='checkbox'
          value={children} />
        <span className='checkmark' />
      </label>
    )
  }
}

export default Checkbox
