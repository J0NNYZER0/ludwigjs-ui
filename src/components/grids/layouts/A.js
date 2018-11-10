import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Grid from '../Index'
import GridHeader from '../Header'
import GridBody from '../Body'
import GridFooter from '../Footer'
import CategoryList from '../../lists/Category'
import Grids from './Index'


class GridLayoutA extends Component {

  constructor(props) {
    super(props)

  }

  render() {

    const { products } = this.props

    return [
      products.length > 0 && <Grid {...this.props}
        classNames={`lyt-100`} key={products[0].name}>
        <GridHeader title={products[0].name}>
          {products[0].description}
        </GridHeader>
        <GridBody>
          {products[0].features.map((el,i) => <CategoryList key={i} item={el} />)}
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

export default GridLayoutA
