import React from 'react'
import GroupOccupancy from '../GroupOccupancy'
import Timer from '../Timer'
import './styles.css'
import PropTypes from 'prop-types'

const ProductCard = ({
  productPhotoURL,
  listPrice,
  discountedPrice,
  description,
  colors,
  occupancyPercentage,
  groupCapacity,
  suscriptorsNumber,
  expirationDate,
  discountPercentage,
  extended
}) => {
  return (
    <div>
      <img src={productPhotoURL} alt='Product' />
      <Timer expirationDate={expirationDate} />
      <div className='discountBadge'>
        <h6>Hasta un</h6>
        <h4>{discountPercentage} %</h4>
      </div>
      <div className='price'>
        <p className='priceWithDiscount'>${discountedPrice}</p>
        <h2>${listPrice}</h2>
      </div>
      <p>{description}</p>
      Color: {colors}
      <GroupOccupancy groupCapacity={groupCapacity} suscriptorsNumber={suscriptorsNumber} occupancyPercentage={occupancyPercentage} />
    </div>
  )
}

ProductCard.propTypes = {
  productPhotoURL: PropTypes.string,
  listPrice: PropTypes.number,
  discountedPrice: PropTypes.number,
  description: PropTypes.string,
  colors: PropTypes.string,
  percentageOccupancy: PropTypes.number,
  groupCapacity: PropTypes.number,
  suscriptorsNumber: PropTypes.number,
  expirationDate: PropTypes.string,
  discountPercentage: PropTypes.number,
  exteded: PropTypes.bool
}

export default ProductCard
