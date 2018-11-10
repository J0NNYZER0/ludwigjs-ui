import React, { Component } from 'react'
import Hero from './Index'
import Modal from '../modals/Index'

class HeroWithModal extends Component {

  constructor(props) {
    super(props)

  }

  render() {

    const { children } = this.props

    return [
      <Modal key='modal' {...this.props}>
        {children}
      </Modal>,
      <Hero key='hero' {...this.props}>
        <div className='banner ludwig' />
      </Hero>
    ]
  }
}

export default HeroWithModal
