import React from 'react'
import GroupOccupancy from '../GroupOccupancy'
import IconDiscount from '../IconDiscount'
import IconTimer from '../IconTimer'
import ProductDetails from '../ProductDetails'
import './styles.css'

const ProductCard = ({ product }) => {
  const { img } = product
  console.log(product)
  return (
    <div>
      <img src={img} alt='ProductCard' />
      <IconTimer product={product} />
      <IconDiscount product={product} />
      <ProductDetails product={product} />
      <GroupOccupancy product={product} />
    </div>
  )
}

export default ProductCard
