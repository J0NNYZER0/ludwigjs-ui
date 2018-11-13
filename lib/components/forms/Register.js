import React, { Component } from 'react'
import Validator from '../validators/Index'
import TextInput from '../inputs/Text'
import Button from '../elements/Button'

class RegisterForm extends Component {

  constructor(props) {

    super(props)

    this.state = {
      form: {
        email: '',
        first_name: '',
        user_name: ''
      },
      validation: {
        isValid: 0,
        messages: []
      }
    }

    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleStateReset = this.handleStateReset.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleValidation = this.handleValidation.bind(this)

    this.input1 = React.createRef()
    this.input2 = React.createRef()
    this.input3 = React.createRef()
  }

  componentDidMount() {
    this.handleStateReset()
  }

  handleOnChange(e) {

    const { form } = this.state

    form[e.target.name] = e.target.value

    this.setState({...this.state, form: form})

  }

  handleStateReset() {
    this.setState({
      form: {
        email: '',
        first_name: '',
        user_name: ''
      },
      validation: {
        isValid: 0,
        messages: []
      }
    })
  }

  handleSubmit(e) {

    e.preventDefault()

    const { actions = {} } = this.props,
      cb = form => actions.account.register(form)

    this.handleValidation(cb)

  }


  handleValidation(cb) {

    let isValid
    const inputs = [this.input1.current, this.input2.current, this.input3.current],
      { callback = () => {} } = this.props,
      { validation } = this.state,
      messages = []

    validation.messages = []

    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i]

      if (input.props.value === '') {

        isValid = -1
        messages.push(`${input.props.name} ${input.props.message}`)

      } else {
        isValid = 1
      }
    }

    let newState = {
      ...this.state,
      validation: {
        isValid: isValid,
        messages: messages
      }
    }

    this.setState(newState, () => {

      const { form, validation } = this.state,
        { subject, contactType } = this.props

      if (validation.isValid === -1) return

      if (cb instanceof Function) {

        cb(form)
        .then(() => this.handleStateReset())
        .then(() => callback())
      }

    })

  }


  render() {

    const { form, validation } = this.state

    return (
      <Validator validation={validation}>
        <form>
        <TextInput
          message='field is empty'
          name='email'
          onChange={this.handleOnChange}
          placeholder='Email'
          ref={this.input1}
          value={form.email} /><br/>
        <TextInput
          message='field is empty'
          name='first_name'
          onChange={this.handleOnChange}
          placeholder='First Name'
          ref={this.input2}
          value={form.first_name} /><br/>
        <TextInput
          message='field is empty'
          name='user_name'
          onChange={this.handleOnChange}
          placeholder='Username'
          ref={this.input3}
          value={form.user_name} /><br/>
          <Button buttonText={`Submit`} classNames='btn' click={this.handleSubmit} />
        </form>
      </Validator>
    )
  }
}

export default RegisterForm
