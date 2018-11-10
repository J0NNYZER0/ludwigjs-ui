import React, { Component } from 'react'
import Button from '../elements/Button'
import TextInput from '../inputs/Text'

class ReconfirmForm extends Component {

  constructor(props) {

    super(props)

    this.state = {
      form: {
        email: ''
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange(e) {

    this.state.form[e.target.name] = e.target.value

    this.setState({form: this.state.form})

  }

  handleSubmit(e) {
    const { actions } = this.props

    e.preventDefault()

    actions.account.reconfirm(this.state.form)
    .then(() => this.setState({
      form: { email: '' }
    }))

  }

  render() {
    const { formData } = this.props

    return (
      <form>
        <TextInput
          name='email'
          onChange={this.handleOnChange}
          placeholder='email'
          value={this.state.form.email} />
        <br/>
        <Button buttonText={`Submit`} classNames='btn' click={this.handleSubmit} />
      </form>
    )
  }
}

export default ReconfirmForm
