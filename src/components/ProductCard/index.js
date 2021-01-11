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
    <div className='productCard'>
      <div className='imageContainer'>
        <img src={productPhotoURL} alt='Product' className='productImage' />
        <div className='timerContainer'>
          <Timer expirationDate={expirationDate} />
        </div>
        <div className='discountBadge'>
          <p className='discountText'>Hasta un</p>
          <p className='discountPercentage'>{discountPercentage} %</p>
        </div>
      </div>
      <div className='productDetails'>
        <div className='cost'>
          <p className='discountedPrice'>${discountedPrice}</p>
          <p className='listPrice'>${listPrice}</p>
        </div>
        <p>{description}</p>
        <p className='colors'>Color: {colors}</p>
        <GroupOccupancy groupCapacity={groupCapacity} suscriptorsNumber={suscriptorsNumber} occupancyPercentage={occupancyPercentage} />
      </div>
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
