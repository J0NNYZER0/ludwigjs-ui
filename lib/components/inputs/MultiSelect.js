import React, { Component } from 'react'
import Checkbox from './Checkbox'

class MultiSelectInput extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selectedOptions: props.selectedOptions,
      show: false
    }

    this.toggle = this.toggle.bind(this)
    this.handleCheckboxInputChange = this.handleCheckboxInputChange.bind(this)

  }

  toggle() {

    const { show } = this.state

    this.setState({ ...this.state, show: !show })
  }

  handleCheckboxInputChange(event) {

    let scope = []

    const { callback, userId } = this.props,
      { selectedOptions } = this.state,
      target = event.target

    if (target.checked) {

      scope = [...selectedOptions, target.value]

    } else {

      const index = selectedOptions.indexOf(target.value)

      selectedOptions.splice(index, 1)

      scope = selectedOptions

    }

    this.setState({ ...this.state, selectedOptions: scope }, callback(userId, scope.toString()))

  }

  render() {

    const { defaultText = '', onChange, options = [] } = this.props,
      { selectedOptions, show } = this.state

    return (
      <div className='multi-select-input'>
        <div className={show !== true ? 'ddm-btn plus' : 'ddm-btn minus'} onClick={this.toggle}>{defaultText}</div>
        {show === true && <div className='menu'>
          {options.map((el,idx) => <Checkbox classNames=''
            key={idx} isChecked={selectedOptions.indexOf(el.value) > -1}
            onChange={this.handleCheckboxInputChange}>{el.value}</Checkbox>)}
        </div>}
      </div>
    )
  }
}

export default MultiSelectInput
