import React from 'react'

import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import CategoryListContainer from '../../components/CategoryListContainer'

import './styles.module.scss'

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <CategoryListContainer />
    </>
  )
}

export default Home
