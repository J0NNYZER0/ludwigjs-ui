import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Grid from '../grid/Index'
import GridTop from '../grid/GridTop'
import GridBody from '../grid/GridBody'
import GridFooter from '../grid/GridFooter'
import Categories from '../lists/Categories'
import Grids from '../grids/Index'


class GridLayout extends Component {

  constructor(props) {
    super(props)

  }

  render() {

    const { products } = this.props

    return [
      products.length > 0 && <Grid {...this.props}
        classNames={`lyt-100`} key={products[0].name}>
        <GridTop title={products[0].name}>
          {products[0].description}
        </GridTop>
        <GridBody>
          {products[0].features.map((el,i) => <Categories key={i} item={el} />)}
        </GridBody>
        <GridFooter>
          <NavLink className='link-button xl' to={`/plan/${products[0].id}`}>
            {`View ${products[0].name}`}
          </NavLink>
        </GridFooter>
      </Grid>,
      <Grids key='grid-layout-b' items={products.filter(el => el.id !== 0)} {...this.props} />
    ]
  }
}

export default GridLayout


//to={`/plan/ ${el.id}`}
