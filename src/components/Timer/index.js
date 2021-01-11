import React from 'react'
import './styles.css'
import PropTypes from 'prop-types'
import clock from '../../assets/images/clock.svg'

const Timer = ({ expirationDate }) => {
  return (
    <div className='timer'>
      <img src={clock} alt='clock' className='clock' />
      <p className='remainingTime'>{expirationDate}</p>
    </div>
  )
}

Timer.propTypes = {
  expirationDate: PropTypes.string
}

export default Timer
