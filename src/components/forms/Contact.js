import React, { Component } from 'react'
import Button from '../elements/Button'
import TextInput from '../inputs/Text'
import TextAreaInput from '../inputs/TextArea'
import CharacterCounter from '../inputs/CharacterCounter'

let defaultState = {
  email: '',
  subject: '',
  contact_type: -1,
  message: ''
}

class ContactForm extends Component {

  constructor(props) {

    super(props)

    this.state = {
      form: {
        ...defaultState,
        subject: props.subject,
        contact_type: props.contactType
      }
    }

    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleOnChange(e) {

    this.state.form[e.target.name] = e.target.value

    this.setState({form: this.state.form})

  }

  handleSubmit(e) {

    const { actions, callback = () => {}, contactType, subject } = this.props

    e.preventDefault()

    actions.contact.send(this.state.form)
    .then(() => this.setState({
        form: { ...defaultState }
      }))
    .then(() => callback())
    
  }

  render() {

    const { formTitle, formData } = this.props

    return [
      <h1 key='title'>{formTitle}</h1>,
      <form key='contact-form'>
        <TextInput
          name='email'
          onChange={this.handleOnChange}
          placeholder='Email'
          value={this.state.form.email} /><br/>
        <CharacterCounter C={TextAreaInput} ct={250} ctType='max' name='message'
          onChange={this.handleOnChange}
          placeholder='Message (optional)'
          value={this.state.form.message} />
        <br/>
        <Button buttonText={`Submit`} classNames='btn' click={this.handleSubmit} />
      </form>
    ]
  }
}

export default ContactForm
