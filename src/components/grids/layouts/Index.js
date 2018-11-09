import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Grid from '../Index'
import GridHeader from '../Header'
import GridBody from '../Body'
import GridFooter from '../Footer'
import LoadMore from '../../elements/LoadMore'
import CategoryList from '../../lists/Category'

class Grids extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {

    const { items, actions } = this.props,
      { products } = actions

    if (items.length === 0) {

      products.get()

    }

  }

  render() {

    const { items } = this.props

    return (
      <div className="grids">
        {items.map(el => <Grid {...this.props} key={el.name}>
            <GridHeader title={el.name}>
              {el.description}
            </GridHeader>
            <GridBody>
              <LoadMore>
                {el.features.map((el,i) => <CategoryList key={i} item={el} />)}
              </LoadMore>
            </GridBody>
            <GridFooter>
              <NavLink className='link-button xl' to={`/plan/${el.id}`}>
                {`View ${el.name}`}
              </NavLink>
            </GridFooter>
          </Grid>
        )}
      </div>
    )

  }
}

export default Grids
