import React from 'react'
import ProductCard from '../ProductCard'
import './styles.css'
import PropTypes from 'prop-types'
// new Date().toLocaleTimeString()

const fakeProductList = [
  {
    id: 1,
    productPhotoURL: 'https://placehold.co/308x210',
    listPrice: 100,
    discountedPrice: 80,
    description: 'Este es un producto',
    colors: 'rojo, verde, negro',
    occupancyPercentage: 50,
    groupCapacity: 10,
    suscriptorsNumber: 5,
    expirationDate: '2021-04-04T16:00:00.000Z',
    discountPercentage: 20
  },
  {
    id: 2,
    productPhotoURL: 'https://placehold.co/308x210',
    listPrice: 100,
    discountedPrice: 80,
    description: 'Este es un producto',
    colors: 'rojo, verde, negro',
    occupancyPercentage: 50,
    groupCapacity: 10,
    suscriptorsNumber: 5,
    expirationDate: '2021-04-04T16:00:00.000Z',
    discountPercentage: 20
  },
  {
    id: 3,
    productPhotoURL: 'https://placehold.co/308x210',
    listPrice: 100,
    discountedPrice: 80,
    description: 'Este es un producto',
    colors: 'rojo, verde, negro',
    occupancyPercentage: 50,
    groupCapacity: 10,
    suscriptorsNumber: 5,
    expirationDate: '2021-01-20T16:00:00.000Z',
    discountPercentage: 20
  },
  {
    id: 4,
    productPhotoURL: 'https://placehold.co/308x210',
    listPrice: 100,
    discountedPrice: 80,
    description: 'Este es un producto',
    colors: 'rojo, verde, negro',
    occupancyPercentage: 50,
    groupCapacity: 10,
    suscriptorsNumber: 5,
    expirationDate: '2021-04-04T16:00:00.000Z',
    discountPercentage: 20
  },
  {
    id: 5,
    productPhotoURL: 'https://placehold.co/308x210',
    listPrice: 100,
    discountedPrice: 80,
    description: 'Deberia aparecer en la primer lista y tercera',
    colors: 'rojo, verde, negro',
    occupancyPercentage: 50,
    groupCapacity: 10,
    suscriptorsNumber: 5,
    expirationDate: '2021-01-19T16:00:00.000Z',
    discountPercentage: 20
  }
]

const getProductsFilteredById = (productIds) => {
  return fakeProductList.filter(product => productIds.includes(product.id))
}

const ProductListContainer = ({ productIds, featuredProductId }) => {
  return (
    <div className='cards'>
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
  productIds: PropTypes.arrayOf(PropTypes.number),
  featuredProductId: PropTypes.number
}

export default ProductListContainer
