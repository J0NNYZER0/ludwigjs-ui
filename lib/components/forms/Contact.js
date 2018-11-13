import React, { Component } from 'react'
import Validator from '../validators/Index'
import TextInput from '../inputs/Text'
import TextAreaInput from '../inputs/TextArea'
import CharCounter from '../inputs/CharacterCounter'
import Button from '../elements/Button'

let defaultState = {
  form: {
    email: '',
    subject: '',
    contact_type: -1,
    message: ''
  },
  validation: {
    isValid: 0,
    messages: []
  }
}

class ContactForm extends Component {

  constructor(props) {

    super(props)

    this.state = { ...defaultState,
      form: {
        ...defaultState.form,
        subject: props.subject,
        contact_type: props.contactType
      }
    }

    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleValidation = this.handleValidation.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.input1 = null
    this.input2 = null
  }

  handleOnChange(e) {

    this.state.form[e.target.name] = e.target.value

    this.setState({...this.state, form: this.state.form})

  }

  handleValidation(cb) {

    let isValid
    const inputs = [this.input1, this.input2],
      { callback = () => {} } = this.props

    defaultState.validation.messages = []

    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i]

      if (input.props.value === '') {

        defaultState.validation.isValid = -1
        defaultState.validation.messages.push(`${input.props.name} ${input.props.message}`)

      } else {
        defaultState.validation.isValid = 1
        defaultState.validation.messages = []
      }
    }

    let newState = {...this.state, validation: defaultState.validation }

    this.setState(newState, () => {

      const { form, validation } = this.state

      if (validation.isValid === -1) return

      if (cb instanceof Function) {

        cb(form)
        .then(() => this.setState(defaultState))
        .then(() => callback())
      }

    })

  }

  handleSubmit(e) {

    e.preventDefault()

    const { actions = {}, contactType, subject } = this.props,
      cb = form => actions.contact.send(form)

    this.handleValidation(cb)

  }

  render() {
    const { validation } = this.state
    return (
      <Validator validation={validation}>
        <form>
          <TextInput key='text-input'
            message='field is empty'
            name='email'
            onChange={this.handleOnChange}
            placeholder='Email'
            ref={el => this.input1 = el}
            value={this.state.form.email} /><br/>
            <CharCounter ct={250} ctType='max'>
            <TextAreaInput key='text-area-input'
              message='field is empty'
              name='message'
              onChange={this.handleOnChange}
              placeholder='Message (optional)'
              ref={el => this.input2 = el}
              value={this.state.form.message} />
          </CharCounter><br/>
          <Button buttonText={`Submit`} classNames='btn' click={this.handleSubmit} />
        </form>
      </Validator>
    )
  }
}

export default ContactForm
