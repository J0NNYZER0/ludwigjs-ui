import React, { Component } from 'react'
import Button from '../elements/Button'
import Top from './Top'
import Bottom from './Bottom'

class Hero extends Component {

  constructor(props) {

    super(props)

  }

  render() {

    const { buttonText, children, classNames = '', click } = this.props

    return (<div className={`hero ${classNames}`}>
        <Top>
          {children}
        </Top>
        <Bottom {...this.props}>
          {buttonText && <Button
            buttonText={buttonText}
            click={click}
            classNames='lt xl' />}
        </Bottom>
      </div>)
  }
}

export default Hero
