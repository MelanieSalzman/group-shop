import React from 'react'
import ProductCard from '../ProductCard'
import './styles.css'

const fakeProductList = [
  {
    id: 1,
    img: 'https://placehold.co/308x210',
    price: '$100',
    description: 'Este es un producto',
    colors: ['red', 'blue', 'green'],
    occupancyPercent: 10,
    groupQty: 10,
    occupancy: 1,
    discount: 20,
    availableDate: new Date().toLocaleTimeString()
  },
  {
    id: 2,
    img: 'https://placehold.co/308x210',
    price: '$100',
    description: 'Este es un producto',
    colors: ['red', 'blue', 'green'],
    occupancyPercent: 10,
    groupQty: 10,
    occupancy: 1,
    discount: 20,
    availableDate: new Date().toLocaleTimeString()
  },
  {
    id: 3,
    img: 'https://placehold.co/308x210',
    price: '$100',
    description: 'Este es un producto',
    colors: ['red', 'blue', 'green'],
    occupancyPercent: 10,
    groupQty: 10,
    occupancy: 1,
    discount: 20,
    availableDate: new Date().toLocaleTimeString()
  },
  {
    id: 4,
    img: 'https://placehold.co/308x210',
    price: '$100',
    description: 'Este es un producto',
    colors: ['red', 'blue', 'green'],
    occupancyPercent: 10,
    groupQty: 10,
    occupancy: 1,
    discount: 20,
    availableDate: new Date().toLocaleTimeString()
  },
]

const ProductList = ({ listTitle }) => {
  return (
    <div>
      <h3>{listTitle}</h3>
      <div className='cards'>
        {
          fakeProductList.map(product => <ProductCard key={product.id} product={product} />)
        }
      </div>
    </div>
  )
}

export default ProductList
