import React from 'react'
import PropTypes from 'prop-types'

import './styles.module.css'

const DropDown = ({ onClick, className, text, children }) => {
  return (
    <button>{text}</button>
  )
}

DropDown.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default DropDown
