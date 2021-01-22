import React, { Fragment } from 'react'

import ProductListContainer from '../ProductListContainer'
import useCategoryList from '../../hooks/useCategoryList'

import './styles.module.css'

const CategoryListContainer = () => {
  const categoryList = useCategoryList()

  return (
    <div>
      {
        categoryList.map(({ categoryTitle, productIds }, index) => {
          return (
            <Fragment key={index}>
              <h2>{categoryTitle}</h2>
              <ProductListContainer productIds={productIds} />
            </Fragment>
          )
        })
      }
    </div>
  )
}

export default CategoryListContainer
