import React from 'react'
import PropTypes from 'prop-types'

import ProductCard from '../ProductCard'
import useProductList from '../../hooks/useProductList'

import classes from './styles.module.scss'

const ProductListContainer = ({ productIds, featuredProductId }) => {
  const productList = useProductList()

  const getProductsFilteredById = (productIds) => {
    return productList.filter(product => productIds.includes(product.id))
  }
  return (
    <div className={classes.cards}>
      {

        getProductsFilteredById(productIds).map(({
          id,
          productPhotoURL,
          listPrice,
          discountedPrice,
          description,
          colors,
          occupancyPercentage,
          groupCapacity,
          suscriptorsNumber,
          expirationDate,
          discountPercentage
        }) => (
          <ProductCard
            key={id}
            productPhotoURL={productPhotoURL}
            listPrice={listPrice}
            discountedPrice={discountedPrice}
            description={description}
            colors={colors}
            occupancyPercentage={occupancyPercentage}
            groupCapacity={groupCapacity}
            suscriptorsNumber={suscriptorsNumber}
            expirationDate={expirationDate}
            discountPercentage={discountPercentage}
            extended={id === featuredProductId}
            className={classes.productCard}
          />))
      }
    </div>
  )
}

ProductListContainer.propTypes = {
  productIds: PropTypes.arrayOf(PropTypes.string),
  featuredProductId: PropTypes.number
}

export default ProductListContainer
