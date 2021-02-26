import React from 'react'

import targetIcon from '../../assets/images/target-icon.svg'
import peopleIcon from '../../assets/images/people-icon.svg'
import socialIcon from '../../assets/images/social-cart-icon.svg'
import packageIcon from '../../assets/images/package-icon.svg'

import classes from './styles.module.scss'

const Banner = () => {
  return (
    <div className={classes.banner}>
      <h1>¡Hay equipo!</h1>
      <h2>¿Cómo funciona?</h2>
      <ul className={classes.featuresList}>
        <li>
          <img src={targetIcon} alt='' className={classes.iconList} />
          <p>
            Elegí el producto <br /> que más te guste
          </p>
        </li>
        <li>
          <img src={peopleIcon} alt='' className={classes.iconList} />
          <p>
            Sumate al grupo <br /> de compra
          </p>
        </li>
        <li>
          <img src={socialIcon} alt='' className={classes.iconList} />
          <p>
            Compartí y suma más <br /> compradores para completar el <br /> grupo y obtener el descuento
          </p>
        </li>
        <li>
          <img src={packageIcon} alt='' className={classes.iconList} />
          <p>
            Una vez completo, tu compra <br /> se hace efectiva y recibís <br /> el producto en tu casa
          </p>
        </li>
      </ul>

      <div className={classes.smallFeaturesList}>
        <ul>
          <li>
            <img src={targetIcon} alt='' className={classes.smallIconList} />
            <p>Elegí lo que quieras</p>
          </li>
          <li>
            <img src={peopleIcon} alt='' className={classes.smallIconList} />
            <p>Sumate al grupo</p>
          </li>
        </ul>
        <ul>
          <li>
            <img src={socialIcon} alt='' className={classes.smallIconList} />
            <p>Compartí en tus redes</p>
          </li>
          <li>
            <img src={packageIcon} alt='' className={classes.iconList} />
            <p>Recibí tu producto</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Banner
