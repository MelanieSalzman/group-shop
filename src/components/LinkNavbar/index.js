import React from 'react'
import './styles.css'
import { useHistory } from 'react-router-dom'

const LinkNavbar = ({ text, img, path }) => {
  const history = useHistory()

  return (
    <button onClick={() => history.push(path)}>
      {text ? text : null}
      {img ? <img src={img} alt='Imagen' /> : null}
    </button>
  )
}

export default LinkNavbar
