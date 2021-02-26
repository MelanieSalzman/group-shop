import React from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

import classes from './styles.module.scss'

const NavbarLink = ({ path, text, iconSrc }) => {
  const history = useHistory()

  return (
    <button onClick={() => history.push(path)} className={classes.link}>
      {text}
      {iconSrc && <img src={iconSrc} alt='' />}
    </button>
  )
}

NavbarLink.propTypes = {
  path: PropTypes.string,
  text: PropTypes.string,
  iconSrc: PropTypes.string
}

export default NavbarLink
