import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.scss'

const CountdownTimer = ({ timeLeft }) => {
  return (
    <div className={classes.timer}>
      <i className='far fa-clock' />
      {timeLeft}
    </div>
  )
}

CountdownTimer.propTypes = {
  timeLeft: PropTypes.string
}

export default CountdownTimer
