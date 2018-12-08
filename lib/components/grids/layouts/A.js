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

    const { items } = this.props

    return [
      items && items.length > 0 && <Grid {...this.props}
        classNames={`lyt-100`} key={items[0].name}>
        <GridHeader title={items[0].name}>
          {items[0].description}
        </GridHeader>
        <GridBody>
          {items[0].features.map((el,i) => <CategoryList key={i} item={el} />)}
        </GridBody>
        <GridFooter>
          <NavLink className='link-button xl' to={`/plan/${items[0].id}`}>
            {`View ${items[0].name}`}
          </NavLink>
        </GridFooter>
      </Grid>,
      items && <Grids key='grid-layout-b' items={items.filter(el => el.id !== 0)} {...this.props} />
    ]
  }
}

export default GridLayoutA
