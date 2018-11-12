import React, { Component } from 'react'
import Validator from '../validators/Index'
import TextInput from '../inputs/Text'
import TextAreaInput from '../inputs/TextArea'
import CharCounter from '../inputs/CharacterCounter'
import Button from '../elements/Button'

let form = {
  email: '',
  subject: '',
  contact_type: -1,
  message: ''
},
validation = {
  isValid: 0,
  messages: []
}

class ContactForm extends Component {

  constructor(props) {

    super(props)

    this.state = {
      form: {
        ...form,
        subject: props.subject,
        contact_type: props.contactType
      },
      validation
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
    const messages = [],
      inputs = [this.input1, this.input2]

    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i]

      if (input.props.value === '') {

        validation.isValid = -1
        validation.messages.push(`${input.props.name} ${input.props.message}`)

      } else {
        validation.isValid = 1
        validation.messages = []
      }
    }

    let newState = {...this.state, validation }

    this.setState(newState, () => {

      const { validation } = this.state

      if (validation.isValid === -1) return

      if (cb instanceof Function) {
        cb()
      }

    })

  }

  handleSubmit(e) {

    const { actions = {}, callback = () => {}, contactType, subject } = this.props

    e.preventDefault()

    const promise = actions.contact ? actions.contact.send(this.state.form) : new Promise((resolve, reject) => resolve('empty promise'))

    const cb = promise.then(() => this.setState({
          form,
          validation
        }))
      .then(() => callback())

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
