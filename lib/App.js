import React, { Component } from 'react'
import { Ludwig as lud } from './examples'

export default class App extends Component {
  render () {
    return (
      <div>
        <section>
          <h1>Forms</h1>
        </section>
        <section>
          <h2>Contacts</h2>
          <lud.Forms.Contact subject='Demo Request' contactType={1} />
          <h2>Login</h2>
          <lud.Forms.Login />
          <h2>Reconfirm</h2>
          <lud.Forms.Reconfirm />
          <h2>Register</h2>
          <lud.Forms.Register />
        </section>
      </div>
    )
  }
}
