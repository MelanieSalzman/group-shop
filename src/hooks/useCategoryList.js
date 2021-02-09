const useCategoryList = () => {
  return [
    {
      categoryTitle: 'Última Chance!',
      productIds: ['2', '3', '4', '5', '6', '7'],
      extended: false
    },
    {
      categoryTitle: 'Los más populares',
      productIds: ['1', '2', '3', '4', '6', '7'],
      extended: false
    },
    {
      categoryTitle: 'Compra en dúo',
      productIds: ['1', '2', '3', '4', '6', '7'],
      extended: true
    },
    {
      categoryTitle: 'Grupos pequeños',
      productIds: ['1', '2', '3', '4', '6', '7'],
      extended: true
    },
    {
      categoryTitle: 'Grupos grandes',
      productIds: ['1', '2', '3', '4', '6', '7'],
      extended: true
    }
  ]
}

export default useCategoryList
