import React from 'react'
import './styles.css'

const IconDiscount = ({ product }) => {
  const { discount } = product

  return (
    <div className='discount'>
      <h6>Hasta un</h6>
      <h4>{discount} %</h4>
    </div>
  )
}

export default IconDiscount
