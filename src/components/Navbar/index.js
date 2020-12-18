import React, { useState } from "react"
import DropDownButton from "../DropDownButton";
import LinkNavbar from "../LinkNavbar";

const Navbar = () => {
  const [logged, setLogged] = useState(false)
  return (
    <div className='navbar'>
      <img src='https://placehold.co/205x34' alt='logo' className='logo' />
      <nav className='links'>
        {!logged ?
          renderLinks()
          :
          renderLoggedInLinks()
        }
      </nav>
    </div>

  );
}

const renderLinks = () =>
  <>
    <LinkNavbar text='Creá tu cuenta' path='#' />
    <LinkNavbar text='Ingresá a tu cuenta' path='#' />
    <LinkNavbar path='#' img='https://placehold.co/22x22' />
  </>

const renderLoggedInLinks = () =>
  <>
    <LinkNavbar text='Quiero Vender' path='#' />
    <DropDownButton text='Usuario' path='#' />
    <LinkNavbar text='Notificaciones' path='#' />
    <LinkNavbar text='Carrito' path='#' />
  </>


export default Navbar
