import React, { Component } from 'react'

class CharacterCounter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: props.ct
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { ct, value } = this.props

    let count = ct - value.length

    if (count !== prevState.count) {

      this.setState({count: count})

    }
  }

  render() {

    const { autocomplete = 'off', cols = '50', C, ctType, name, onChange, placeholder, rows = '3', value } = this.props,
      { count } = this.state

    return (
      <div>
        <C {...this.props} />
        <div className={count < 0 ? `character-counter red` : `character-counter`}>
          {`${count} ${ctType}`}
        </div>
      </div>
    )
  }
}

export default CharacterCounter
