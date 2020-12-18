import React from 'react'
import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import CategoryList from '../../components/CategoryList'
import './styles.css'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <CategoryList />
        </div>
    )
}

export default Home
