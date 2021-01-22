import React, { useState, Fragment } from 'react'

import DropDown from '../DropDown'
import NavbarLink from '../NavbarLink'
import Logo from '../Logo'

import classes from './styles.module.css'

const Navbar = () => {
  const [logged] = useState(false)

  return (
    <nav className={classes.navbar}>
      <Logo />
      {logged
        ? <LoggedInLinks />
        : <Links />}
    </nav>
  )
}

const Links = () => (
  <Fragment className={classes.links}>
    <NavbarLink text='Creá tu cuenta' path='#' />
    <NavbarLink text='Ingresá a tu cuenta' path='#' />
    <NavbarLink path='#' iconSrc='https://placehold.co/22x22' />
  </Fragment>
)

const LoggedInLinks = () => (
  <Fragment className={classes.links}>
    <NavbarLink text='Quiero Vender' path='#' />
    <DropDown text='Usuario' path='#' />
    <NavbarLink text='Notificaciones' path='#' />
    <NavbarLink text='Carrito' path='#' />
  </Fragment>
)

export default Navbar
