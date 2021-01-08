import React, { Fragment } from 'react'
import './styles.css'
import ProductListContainer from '../ProductListContainer'

const fakeCategoryList = [
  {
    categoryTitle: 'Ultima Chance!',
    productIds: [1, 2, 3, 4]
  },
  {
    categoryTitle: 'Los mas populares',
    productIds: [1, 2, 3, 4]
  },
  {
    categoryTitle: 'Compra en dúo',
    productIds: [1, 2, 3, 4]
  },
  {
    categoryTitle: 'Grupos pequeños',
    productIds: [1, 2, 3, 4]
  },
  {
    categoryTitle: 'Grupos grandes',
    productIds: [1, 2, 3, 4]
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
