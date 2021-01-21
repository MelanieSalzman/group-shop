import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'

import CountdownTimer from '../CountdownTimer'

import './styles.module.css'

const CountdownTimerContainer = ({ expirationDate }) => {
  const [timeLeft, setTimeLeft] = useState('00:00:00')

  const setTimeFormatted = (expirationDate) => {
    const timeLeftInDuration = getTimeLeftInDuration(expirationDate)
    let time = ''
    if (timeLeftInDuration.asDays() > 1) {
      time = getRelativeTimeToExpirationTime(expirationDate)
    } else {
      time = getDurationTimeInHHMMSSFormat(timeLeftInDuration)
    }

    return timeLeft !== 0 ? () => setTimeLeft(time) : finishTimer()
  }

  useEffect(() => {
    const timer = setInterval(setTimeFormatted(expirationDate), 1000)
    return () => clearInterval(timer)
  })

  return (
    <CountdownTimer timeLeft={timeLeft} />
  )
}

const getTimeLeftInDuration = (expirationDate) => {
  const expiration = dayjs(expirationDate)
  const now = dayjs()
  return dayjs.duration(expiration.diff(now))
}

const getDurationTimeInHHMMSSFormat = (timeLeftInDuration) => {
  return timeLeftInDuration.format('HH:mm:ss')
}

const getRelativeTimeToExpirationTime = (expirationTime) => {
  const now = dayjs()
  return dayjs(now).to(expirationTime)
}

const finishTimer = () => {
  return null
}

dayjs.extend(duration)
dayjs.extend(relativeTime)
dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  relativeTime: {
    future: '%s',
    past: 'Hace %s ago',
    s: 'unos segundos',
    m: 'un minuto',
    mm: '%d minutos',
    h: 'una hora',
    hh: '%d horas',
    d: 'Queda un día',
    dd: 'Quedan %d días',
    M: 'Queda un mes',
    MM: 'Quedan %d meses',
    y: 'un año',
    yy: '%d años'
  }
})

CountdownTimerContainer.propTypes = {
  expirationDate: PropTypes.string
}

export default CountdownTimerContainer
