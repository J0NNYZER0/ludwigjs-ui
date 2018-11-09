import React, { Component } from 'react'

class Slideshow extends Component {

  constructor(props) {
    super(props)

    this.state = {
      idx: 0
    }

    this.slide = this.slide.bind(this)
  }

  slide(ct,i) {

    const { idx } = this.state,
      { progress = () => {} } = this.props

    if (i < 0) {

      this.setState({ idx: ct - 1 })
    }

    else if (i > ct - 1) {

      this.setState({ idx: 0 })
    }

    else {

      this.setState({ idx: i })
    }

    progress(i)
  }

  render() {

    const { children } = this.props,
      { idx } = this.state

    return (
      <div className='slideshow'>
        {React.Children.map(children, (child, i) => {
          if (idx === i) return child
        })}
        <div className='ss-btn lft arrow l' onClick={() => {this.slide(children.length, idx - 1)}} />
        <div className='ss-btn rt arrow' onClick={() => {this.slide(children.length, idx + 1)}} />
      </div>)
  }
}

export default Slideshow
