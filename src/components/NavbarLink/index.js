import React from 'react'
import './styles.css'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

const NavbarLink = ({ path, text, iconSrc }) => {
  const history = useHistory()

  return (
    <button onClick={() => history.push(path)} className='link'>
      {text || null}
      {iconSrc ? <img src={iconSrc} alt='Imagen' /> : null}
    </button>
  )
}

NavbarLink.propTypes = {
  path: PropTypes.string,
  text: PropTypes.string,
  iconSrc: PropTypes.string
}

export default NavbarLink
