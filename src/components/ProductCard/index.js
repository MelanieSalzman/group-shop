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
          Hasta un
          <p className={classes.discountPercentage}>{discountPercentage} %</p>
        </div>
      </div>
      <div className={classes.productDetails}>
        <div className={classes.cost}>
          <p className={classes.discountedPrice}>${discountedPrice}</p>
          <p className={classes.listPrice}>${listPrice}</p>
        </div>
        <p>{description}</p>
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
  exteded: PropTypes.bool
}

export default ProductCard
