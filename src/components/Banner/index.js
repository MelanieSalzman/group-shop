import React from 'react'

import peopleBanner from '../../assets/images/people-banner.svg'

import classes from './styles.module.scss'

const Banner = () => {
  return (
    <div className={classes.banner}>
      <h1>¡Hay equipo!</h1>
      <h2>¿Cómo funciona?</h2>
      <ul className={classes.featuresList}>
        <li>Elegí el producto <br /> que más te guste </li>
        <li>Sumate al grupo <br /> de compra</li>
        <li>Compartí y suma más <br /> compradores para completar el <br /> grupo y obtener el descuento</li>
        <li>Una vez completo, tu compra <br /> se hace efectiva y recibís <br /> el producto en tu casa</li>
      </ul>
      <img src={peopleBanner} alt='banner' className={classes.peopleBanner} />
    </div>
  )
}

export default Banner
