import React, { Component } from 'react'

class CharacterCounter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: props.ct
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { ct, children } = this.props,
      { props } = children

    let count = ct - props.value.length

    if (count !== prevState.count) {

      this.setState({count: count})

    }
  }

  render() {

    const { children, ctType } = this.props,
      { count } = this.state

    return (
      <div>
        {children}
        <div className={count < 0 ? `character-counter red` : `character-counter`}>
          {`${count} ${ctType}`}
        </div>
      </div>
    )
  }
}

export default CharacterCounter
