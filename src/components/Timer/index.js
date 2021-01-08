import React from 'react'
import './styles.css'
import PropTypes from 'prop-types'

const Timer = ({ expirationDate }) => {
  return (
    <div className='timer'>
      <img src='https://placehold.co/15x15' alt='clock' className='clock' />
      <h4>{expirationDate}</h4>
    </div>
  )
}

Timer.propTypes = {
  expirationDate: PropTypes.string
}

export default Timer
