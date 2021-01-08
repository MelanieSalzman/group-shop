import React from 'react'
import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import CategoryListContainer from '../../components/CategoryListContainer'
import './styles.css'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <CategoryListContainer />
    </div>
  )
}

export default Home
