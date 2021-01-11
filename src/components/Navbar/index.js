import React, { useState } from 'react'
import DropDown from '../DropDown'
import NavbarLink from '../NavbarLink'
import Logo from '../Logo'
import './styles.css'
import shoppingCart from '../../assets/images/shopping-cart.svg'

const Navbar = () => {
  const [logged] = useState(false)

  return (
    <nav className='navbar'>
      <div className='logo'>
        <Logo />
      </div>
      <div className='links'>
        {logged
          ? renderLoggedInLinks()
          : renderLinks()}
      </div>
    </nav>
  )
}

const renderLinks = () =>
  <>
    <NavbarLink text='Creá tu cuenta' path='#' />
    <NavbarLink text='Ingresá' path='#' />
    <NavbarLink path='#' iconSrc={shoppingCart} />
  </>

const renderLoggedInLinks = () =>
  <>
    <NavbarLink text='Quiero Vender' path='#' />
    <DropDown text='Usuario' path='#' />
    <NavbarLink text='Notificaciones' path='#' />
    <NavbarLink text='Carrito' path='#' />
  </>

export default Navbar
