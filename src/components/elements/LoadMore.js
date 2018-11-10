import React, { Component } from 'react'

class LoadMore extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loaded: 3,
      load: 3
    }

    this.loadMore = this.loadMore.bind(this)
  }

  loadMore() {

    const { load } = this.state

    this.setState(prev => ({
      ...this.state,
      loaded: prev.loaded + load
    }))

  }

  render() {

    const { children } = this.props,
      { loaded } = this.state

    return [
      children.slice(0, loaded),
      loaded < children.length &&
      <div key='load-more'
        className='load-more'
        onClick={this.loadMore}>
        {`view more...`}
      </div>
    ]
  }
}

export default LoadMore
