import React, { Component } from 'react'
import Button from '../elements/Button'
import TextInput from '../inputs/Text'

let defaultState = {
  email: '',
  first_name: '',
  user_name: ''
}

class RegisterForm extends Component {

  constructor(props) {

    super(props)

    this.state = {
      form: {
        ...defaultState
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

    actions.account.register(this.state.form)
    .then(() => this.setState({
      form: {
        ...defaultState
      }
    }))
  }

  render() {
    const { formData } = this.props

    return (
      <form>
        <TextInput
          name='email'
          onChange={this.handleOnChange}
          placeholder='Email'
          value={this.state.form.email} /><br/>
        <TextInput
          name='first_name'
          onChange={this.handleOnChange}
          placeholder='First Name'
          value={this.state.form.first_name} /><br/>
        <TextInput
          name='user_name'
          onChange={this.handleOnChange}
          placeholder='Username'
          value={this.state.form.user_name} /><br/>
        <Button buttonText={`Submit`} classNames='btn' click={this.handleSubmit} />
      </form>
    )
  }
}

export default RegisterForm
