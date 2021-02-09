import React, { Fragment } from 'react'

import ProductListContainer from '../ProductListContainer'
import useCategoryList from '../../hooks/useCategoryList'

import classes from './styles.module.scss'

const CategoryListContainer = () => {
  const categoryList = useCategoryList()

  return (
    <div className={classes.categoryListContainer}>
      {
        categoryList.map(({ categoryTitle, productIds, extended }, index) => {
          return (
            <Fragment key={index}>
              <h2>{categoryTitle}</h2>
              <ProductListContainer productIds={productIds} extended={extended} />
            </Fragment>
          )
        })
      }
    </div>
  )
}

export default CategoryListContainer
