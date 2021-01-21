import React, { Fragment } from 'react'

import ProductListContainer from '../ProductListContainer'

import './styles.module.css'

const fakeCategoryList = [
  {
    categoryTitle: 'Última Chance!',
    productIds: ['2', '3', '4', '5']
  },
  {
    categoryTitle: 'Los más populares',
    productIds: ['1', '2', '3', '4']
  },
  {
    categoryTitle: 'Compra en dúo',
    productIds: ['2', '3', '4', '5']
  },
  {
    categoryTitle: 'Grupos pequeños',
    productIds: ['1', '2', '3', '4']
  },
  {
    categoryTitle: 'Grupos grandes',
    productIds: ['1', '2', '3', '4']
  }
]

const CategoryListContainer = () => {
  return (
    <div>
      {
        fakeCategoryList.map(({ categoryTitle, productIds }, index) => {
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
