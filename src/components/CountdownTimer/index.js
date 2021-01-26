import React from 'react'
import PropTypes from 'prop-types'

import clock from '../../assets/images/clock.svg'

import classes from './styles.module.scss'

const CountdownTimer = ({ timeLeft }) => {
  return (
    <div className={classes.timer}>
      <img src={clock} alt='clock' className='clock' />
      <p className='remainingTime'>{timeLeft}</p>
    </div>
  )
}

CountdownTimer.propTypes = {
  timeLeft: PropTypes.string
}

export default CountdownTimer
