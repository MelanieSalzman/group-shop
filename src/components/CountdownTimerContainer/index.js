import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'

import CountdownTimer from '../CountdownTimer'

import './styles.module.css'

const getFormattedTimeLeft = (expirationDate) => {
  const timeLeftInDuration = getTimeLeftInDuration(expirationDate)
  if (timeLeftInDuration.asMilliseconds() <= 0) return '00:00:00'
  if (timeLeftInDuration.asDays() > 1) return getRelativeTimeToExpirationTime(expirationDate)

  return getDurationTimeInHHMMSSFormat(timeLeftInDuration)
}

const CountdownTimerContainer = ({ expirationDate }) => {
  const [timeLeft, setTimeLeft] = useState(() => getFormattedTimeLeft(expirationDate))

  useEffect(() => {
    const calculateAndSetTimeLeft = () => setTimeLeft(getFormattedTimeLeft(expirationDate))
    const intervalID = setInterval(calculateAndSetTimeLeft, 1000)

    return () => clearInterval(intervalID)
  }, [expirationDate])

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
