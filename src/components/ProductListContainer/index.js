import React from 'react'
import ProductCard from '../ProductCard'
import './styles.css'
import PropTypes from 'prop-types'
import firstProductUrl from '../../assets/images/product1.svg'
import secondProductUrl from '../../assets/images/product2.svg'
import thirdProductUrl from '../../assets/images/product3.svg'
import fourProductUrl from '../../assets/images/product4.svg'

const fakeProductList = [
  {
    id: 1,
    productPhotoURL: firstProductUrl,
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
    productPhotoURL: secondProductUrl,
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
    productPhotoURL: thirdProductUrl,
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
    productPhotoURL: fourProductUrl,
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
    id: 5,
    productPhotoURL: fourProductUrl,
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
    id: 6,
    productPhotoURL: fourProductUrl,
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
    id: 7,
    productPhotoURL: fourProductUrl,
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
            className='productCard'
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
