import React from 'react'

import banner from '../../assets/images/banner.svg'

import classes from './styles.module.scss'

const Banner = () => {
  return (
    <img src={banner} alt='banner' className={classes.banner} />
  )
}

export default Banner
