import React from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'

import ProductCard from '../ProductCard'

import classes from './styles.module.css'

const fakeProductList = [
  {
    id: '1',
    productPhotoURL: 'https://placehold.co/308x210',
    listPrice: 100,
    discountedPrice: 80,
    description: 'Este es un producto',
    colors: 'rojo, verde, negro',
    occupancyPercentage: 50,
    groupCapacity: 10,
    suscriptorsNumber: 5,
    expirationDate: dayjs().add(7, 'day').toISOString(),
    discountPercentage: 20
  },
  {
    id: '2',
    productPhotoURL: 'https://placehold.co/308x210',
    listPrice: 100,
    discountedPrice: 80,
    description: 'Este es un producto',
    colors: 'rojo, verde, negro',
    occupancyPercentage: 50,
    groupCapacity: 10,
    suscriptorsNumber: 5,
    expirationDate: dayjs().add(1, 'minute').toISOString(),
    discountPercentage: 20
  },
  {
    id: '3',
    productPhotoURL: 'https://placehold.co/308x210',
    listPrice: 100,
    discountedPrice: 80,
    description: 'Este es un producto',
    colors: 'rojo, verde, negro',
    occupancyPercentage: 50,
    groupCapacity: 10,
    suscriptorsNumber: 5,
    expirationDate: dayjs().add(1, 'day').toISOString(),
    discountPercentage: 20
  },
  {
    id: '4',
    productPhotoURL: 'https://placehold.co/308x210',
    listPrice: 100,
    discountedPrice: 80,
    description: 'Este es un producto',
    colors: 'rojo, verde, negro',
    occupancyPercentage: 50,
    groupCapacity: 10,
    suscriptorsNumber: 5,
    expirationDate: dayjs().add(2, 'day').toISOString(),
    discountPercentage: 20
  },
  {
    id: '5',
    productPhotoURL: 'https://placehold.co/308x210',
    listPrice: 100,
    discountedPrice: 80,
    description: 'Deberia aparecer en la primer lista y tercera',
    colors: 'rojo, verde, negro',
    occupancyPercentage: 50,
    groupCapacity: 10,
    suscriptorsNumber: 5,
    expirationDate: dayjs().add(1, 'month').toISOString(),
    discountPercentage: 20
  }
]

const getProductsFilteredById = (productIds) => {
  return fakeProductList.filter(product => productIds.includes(product.id))
}

const ProductListContainer = ({ productIds, featuredProductId }) => {
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
