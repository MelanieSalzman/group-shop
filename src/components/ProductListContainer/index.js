import React from 'react'
import ProductCard from '../ProductCard'
import './styles.css'
import PropTypes from 'prop-types'

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
    expirationDate: new Date().toLocaleTimeString(),
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
    expirationDate: new Date().toLocaleTimeString(),
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
    expirationDate: new Date().toLocaleTimeString(),
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
    expirationDate: new Date().toLocaleTimeString(),
    discountPercentage: 20
  }
]

const ProductListContainer = ({ productIds, featuredProductId }) => {
  return (
    <div className='cards'>
      {
        fakeProductList.map(({
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
