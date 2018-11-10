import React, { Component } from 'react'

class TextInput extends Component {

  render() {

    const { autocomplete = 'off', cols = '50', name, onChange, placeholder, rows = '3', value } = this.props

    return (
      <textarea
        autoComplete={autocomplete}
        cols={cols}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        value={value} />
    )
  }
}

export default TextInput
