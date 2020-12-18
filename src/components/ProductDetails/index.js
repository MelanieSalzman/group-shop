import React from 'react'
import './styles.css'

const ProductDetails = ({ product }) => {
  const { price, description, colors } = product
  return (
    <div>
      <h3>{price}</h3>
      <p>{description}</p>
      {
        colors.map((color, index) => <p key={index}>{color}</p>)
      }
    </div>
  )
}

export default ProductDetails
