import React from 'react'
import './styles.css'
import { useHistory } from 'react-router-dom'

const DropDownButton = ({ text }) => {
  const history = useHistory()

  return (
    <button onClick={() => history.push('/')}>{text}</button>
  )
}

export default DropDownButton
