import dayjs from 'dayjs'

import firstProductUrl from '../assets/images/fake_products/product1.svg'
import secondProductUrl from '../assets/images/fake_products/product2.svg'
import thirdProductUrl from '../assets/images/fake_products/product3.svg'
import fourProductUrl from '../assets/images/fake_products/product4.svg'

const useProductList = () => {
  return [
    {
      id: '1',
      productPhotoURL: firstProductUrl,
      listPrice: 100,
      discountedPrice: 80,
      description: 'Ornare quam tellus sit sed lobortis eu, vulputate. Consectetur.',
      colors: 'rojo, verde, negro',
      occupancyPercentage: 50,
      groupCapacity: 10,
      suscriptorsNumber: 5,
      expirationDate: dayjs().add(7, 'day').toISOString(),
      discountPercentage: 20
    },
    {
      id: '2',
      productPhotoURL: secondProductUrl,
      listPrice: 100,
      discountedPrice: 80,
      description: 'Libero porttitor pretium urna, molestie ut lorem pharetra. Lacus.',
      colors: 'rojo, verde, negro',
      occupancyPercentage: 50,
      groupCapacity: 10,
      suscriptorsNumber: 5,
      expirationDate: dayjs().add(1, 'minute').toISOString(),
      discountPercentage: 20
    },
    {
      id: '3',
      productPhotoURL: thirdProductUrl,
      listPrice: 100,
      discountedPrice: 80,
      description: 'Quis placerat sollicitudin dui, malesuada. Ullamcorper ut arcu et.',
      colors: 'rojo, verde, negro',
      occupancyPercentage: 50,
      groupCapacity: 10,
      suscriptorsNumber: 5,
      expirationDate: dayjs().add(1, 'day').toISOString(),
      discountPercentage: 20
    },
    {
      id: '4',
      productPhotoURL: fourProductUrl,
      listPrice: 100,
      discountedPrice: 80,
      description: 'Vel eu consequat, aliquet dolor sodales. Purus nunc in duis diam.',
      colors: 'rojo, verde, negro',
      occupancyPercentage: 50,
      groupCapacity: 10,
      suscriptorsNumber: 5,
      expirationDate: dayjs().add(2, 'day').toISOString(),
      discountPercentage: 20
    },
    {
      id: '5',
      productPhotoURL: fourProductUrl,
      listPrice: 100,
      discountedPrice: 80,
      description: 'Vel eu consequat, aliquet dolor sodales. Purus nunc in duis diam.',
      colors: 'rojo, verde, negro',
      occupancyPercentage: 50,
      groupCapacity: 10,
      suscriptorsNumber: 5,
      expirationDate: dayjs().add(1, 'month').toISOString(),
      discountPercentage: 20
    },
    {
      id: '6',
      productPhotoURL: fourProductUrl,
      listPrice: 100,
      discountedPrice: 80,
      description: 'Vel eu consequat, aliquet dolor sodales. Purus nunc in duis diam.',
      colors: 'rojo, verde, negro',
      occupancyPercentage: 50,
      groupCapacity: 10,
      suscriptorsNumber: 5,
      expirationDate: dayjs().add(1, 'month').toISOString(),
      discountPercentage: 20
    },
    {
      id: '7',
      productPhotoURL: fourProductUrl,
      listPrice: 100,
      discountedPrice: 80,
      description: 'Vel eu consequat, aliquet dolor sodales. Purus nunc in duis diam.',
      colors: 'rojo, verde, negro',
      occupancyPercentage: 50,
      groupCapacity: 10,
      suscriptorsNumber: 5,
      expirationDate: dayjs().add(1, 'month').toISOString(),
      discountPercentage: 20
    }
  ]
}

export default useProductList
