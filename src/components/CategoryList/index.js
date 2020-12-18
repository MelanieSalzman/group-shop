import React from 'react'
import './styles.css'
import ProductList from '../ProductList'

const fakeCategoryList = [
  'Ultima Chance!',
  'Los mas populares',
  'Compra en dúo',
  'Grupos pequeños',
  'Grupos grandes'
]

const CategoryList = () => {
  return (
    fakeCategoryList.map((title, index) => <ProductList key={index} listTitle={title} />)
  )
}

export default CategoryList
