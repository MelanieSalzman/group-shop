import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

const CountdownTimer = ({ timeLeft }) => {
  return (
    <div className={classes.timer}>
      {timeLeft}
    </div>
  )
}

CountdownTimer.propTypes = {
  expirationDate: PropTypes.string
}

export default CountdownTimer
