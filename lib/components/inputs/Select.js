import React, { Component } from 'react'

class SelectInput extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    const { defaultText = '', onChange, options = [], selectedOption } = this.props

    return (
      <select className='select-input' onChange={onChange}>
        <option value=''>{defaultText}</option>
        {options.map((el,idx) => <option key={idx} value={el.value}>{el.name}</option>)}
      </select>
    )
  }
}

export default SelectInput
