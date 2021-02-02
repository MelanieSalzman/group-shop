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
    <NavbarLink text='Creá tu cuenta' path='#' />
    <NavbarLink text='Ingresá a tu cuenta' path='#' />
    <NavbarLink path='#' iconSrc={shoppingCart} />
  </>
)

const LoggedInLinks = () => (
  <>
    <NavbarLink text='Quiero Vender' path='#' />
    <DropDown text='Usuario' path='#' />
    <NavbarLink text='Notificaciones' path='#' />
    <NavbarLink text='Carrito' path='#' />
  </>
)

export default Navbar
