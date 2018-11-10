import React, { Component } from 'react'
import { Viddy as v } from '../lib/examples'

export default class App extends Component {
  render () {
    return (
      <div>
        <v.Forms.Contact formTitle={`Request a Demo`}
            subject='Demo Request' contactType={1} />
      </div>
    )
  }
}
