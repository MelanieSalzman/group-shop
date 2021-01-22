import dayjs from 'dayjs'

const useProductList = () => {
  return [
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
}

export default useProductList
