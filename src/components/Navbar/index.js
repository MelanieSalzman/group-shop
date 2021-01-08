import React, { useState, Fragment } from 'react'
import DropDown from '../DropDown'
import NavbarLink from '../NavbarLink'
import Logo from '../Logo'

const Navbar = () => {
  const [logged] = useState(false)

  return (
    <nav className='navbar'>
      <Logo />
      {logged
        ? renderLoggedInLinks()
        : renderLinks()}
    </nav>
  )
}

const renderLinks = () =>
  <Fragment className='links'>
    <NavbarLink text='Creá tu cuenta' path='#' />
    <NavbarLink text='Ingresá a tu cuenta' path='#' />
    <NavbarLink path='#' iconSrc='https://placehold.co/22x22' />
  </Fragment>

const renderLoggedInLinks = () =>
  <Fragment className='links'>
    <NavbarLink text='Quiero Vender' path='#' />
    <DropDown text='Usuario' path='#' />
    <NavbarLink text='Notificaciones' path='#' />
    <NavbarLink text='Carrito' path='#' />
  </Fragment>

export default Navbar
