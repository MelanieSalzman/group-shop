import React from 'react'
import './styles.css'
import PropTypes from 'prop-types'

const CountdownTimer = ({ timeLeft }) => {
  return (
    <div className='timer'>
      {timeLeft}
    </div>
  )
}

CountdownTimer.propTypes = {
  expirationDate: PropTypes.string
}

export default CountdownTimer
