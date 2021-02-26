import React from 'react'
import PropTypes from 'prop-types'

import GroupOccupancy from '../GroupOccupancy'
import CountdownTimerContainer from '../CountdownTimerContainer'

import classes from './styles.module.scss'
import classnames from 'classnames'

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
    <div className={classnames({
      [classes.extendedProductCard]: extended,
      [classes.productCard]: !extended
    })}
    >
      <div className={classes.imageContainer}>
        <img src={productPhotoURL} alt='Product' className={classes.productImage} />
        <div className={classes.timerContainer}>
          <CountdownTimerContainer expirationDate={expirationDate} />
        </div>
        <div className={classes.discountBadge}>
          <span>Hasta un</span>
          <span>{discountPercentage} %</span>
        </div>
      </div>
      <div className={classes.productDetails}>
        <div className={classes.cost}>
          <span>${discountedPrice}</span>
          <span>${listPrice}</span>
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
