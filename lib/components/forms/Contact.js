import React, { Component } from 'react'
import Validator from '../validators/Index'
import TextInput from '../inputs/Text'
import TextAreaInput from '../inputs/TextArea'
import CharCounter from '../inputs/CharacterCounter'
import Button from '../elements/Button'

class ContactForm extends Component {

  constructor(props) {

    super(props)

    this.state = {
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

    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleValidation = this.handleValidation.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleStateReset = this.handleStateReset.bind(this)

    this.input1 = React.createRef()
    this.input2 = React.createRef()
  }

  componentDidMount() {
    this.handleStateReset()
  }

  handleStateReset() {
    this.setState({
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
    })
  }

  handleOnChange(e) {

    const { form } = this.state

    form[e.target.name] = e.target.value

    this.setState({...this.state, form: form})

  }

  handleValidation(cb) {

    let isValid
    const inputs = [this.input1.current, this.input2.current],
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

        cb({...form, subject: subject, contact_type: contactType})
        .then(() => this.handleStateReset())
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
            <CharCounter ct={250} ctType='max'>
            <TextAreaInput
              message='field is empty'
              name='message'
              onChange={this.handleOnChange}
              placeholder='Message (optional)'
              ref={this.input2}
              value={form.message} />
          </CharCounter><br/>
          <Button buttonText={`Submit`} classNames='btn' click={this.handleSubmit} />
        </form>
      </Validator>
    )
  }
}

export default ContactForm
