import React, { Component } from 'react'
import ContactForm from './components/forms/Contact'

export default class App extends Component {
  render () {
    return (
      <div>
        <ContactForm formTitle={`Request a Demo`}
            subject='Demo Request' contactType={1} />
      </div>
    )
  }
}
