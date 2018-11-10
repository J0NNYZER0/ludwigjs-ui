import React, { Component } from 'react'
import Slideshow from './Index'
import ProgressBar from '../elements/ProgressBar'

class SlideshowWithProgressBar extends Component {

  constructor(props) {
    super(props)

    this.state = {
      current: 0
    }

    this.progress = this.progress.bind(this)
  }

  progress(curr) {
    const { children } = this.props,
      { current } = this.state

    if (curr > children.length - 1) {

      this.setState({current: 0})
    }

    else {
      if (curr === -1) {
        this.setState({current: children.length - 1})
      }

      else if (curr < current) {

        this.setState({current: current - 1})

      }

      else {
        this.setState({current: current + 1})
      }

    }
  }

  render() {
    const { children } = this.props,
      { current } = this.state

    return [
      <Slideshow key='slideshow' progress={this.progress}>
        {children}
      </Slideshow>,
      <ProgressBar key='progress-bar' current={current}>
        {children}
      </ProgressBar>
    ]
  }
}

export default SlideshowWithProgressBar
