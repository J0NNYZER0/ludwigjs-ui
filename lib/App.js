import React, { Component } from 'react'
import { Rockstar as R } from './examples'

export default class App extends Component {
  render () {
    return (
      <div>
        <section>
          <h1>Forms</h1>
        </section>
        <section>
          <h2>Contact</h2>
          <R.Forms.Contact subject='Demo Request' contactType={1} />
          <h2>Login</h2>
          <R.Forms.Login />
          <h2>Reconfirm</h2>
          <R.Forms.Reconfirm />
          <h2>Register</h2>
          <R.Forms.Register />
        </section>
      </div>
    )
  }
}
