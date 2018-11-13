import React, { Component } from 'react'
import Validator from '../validators/Index'
import TextInput from '../inputs/Text'
import Button from '../elements/Button'

class ReconfirmForm extends Component {

  constructor(props) {

    super(props)

    this.state = {
      form: {
        email: ''
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
        email: ''
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
      cb = form => actions.account.reconfirm(form)

    this.handleValidation(cb)

  }


  handleValidation(cb) {

    let isValid
    const inputs = [this.input1.current],
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
            value={form.email} />
          <br/>
          <Button buttonText={`Submit`} classNames='btn' click={this.handleSubmit} />
        </form>
      </Validator>
    )
  }
}

export default ReconfirmForm
