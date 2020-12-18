import React from 'react'
import './styles.css'

const IconTimer = ({ product }) => {
  const { availableDate } = product

  return (
    <div className='timer'>
      <img src='https://placehold.co/15x15' alt='clock' className='clock' />
      <h4>{availableDate}</h4>
    </div>
  )
}

export default IconTimer
