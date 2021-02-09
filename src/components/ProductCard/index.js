import React from 'react'
import PropTypes from 'prop-types'

import GroupOccupancy from '../GroupOccupancy'
import CountdownTimerContainer from '../CountdownTimerContainer'

import classes from './styles.module.scss'

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
    <div className={classes.productCard}>
      <div className={classes.imageContainer}>
        <img src={productPhotoURL} alt='Product' className={classes.productImage} />
        <div className={classes.timerContainer}>
          <CountdownTimerContainer expirationDate={expirationDate} />
        </div>
        <div className={classes.discountBadge}>
          <span className={classes.discountText}>Hasta un</span>
          <span className={classes.discountPercentage}>{discountPercentage} %</span>
        </div>
      </div>
      <div className={classes.productDetails}>
        <div className={classes.cost}>
          <span className={classes.discountedPrice}>${discountedPrice}</span>
          <span className={classes.listPrice}>${listPrice}</span>
        </div>
        <p className={classes.description}>{description}</p>
        <p className={classes.colors}>Color: {colors}</p>
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
  extended: PropTypes.bool
}

export default ProductCard
