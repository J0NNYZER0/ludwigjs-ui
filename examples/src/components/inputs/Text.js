import React, { Component } from 'react'

class TextInput extends Component {

  render() {

    const { autocomplete = 'off', name, onChange, placeholder, value } = this.props

    return (
      <input
        autoComplete={autocomplete}
        className='text-input'
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type='text'
        value={value} />
    )
  }
}

export default TextInput
