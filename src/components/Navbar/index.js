import React, { useState, Fragment } from 'react'

import DropDown from '../DropDown'
import NavbarLink from '../NavbarLink'
import Logo from '../Logo'
import shoppingCart from '../../assets/images/shopping-cart.svg'

import classes from './styles.module.scss'

const Navbar = () => {
  const [logged] = useState(false)

  return (
    <nav className={classes.navbar}>
      <Logo className={classes.logo} />
      <div className={classes.links}>
        {logged
          ? <LoggedInLinks />
          : <Links />}
      </div>
    </nav>
  )
}

const Links = () => (
  <>
    <NavbarLink text='Creá tu cuenta' path='#' className={classes.link} />
    <NavbarLink text='Ingresá a tu cuenta' path='#' className={classes.link} />
    <NavbarLink path='#' iconSrc={shoppingCart} className={classes.link} />
  </>
)

const LoggedInLinks = () => (
  <>
    <NavbarLink text='Quiero Vender' path='#' className={classes.link} />
    <DropDown text='Usuario' path='#' className={classes.link} />
    <NavbarLink text='Notificaciones' path='#' className={classes.link} />
    <NavbarLink text='Carrito' path='#' className={classes.link} />
  </>
)

export default Navbar
