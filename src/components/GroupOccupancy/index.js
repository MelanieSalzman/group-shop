import React from 'react'
import PropTypes from 'prop-types'
import { times } from 'lodash'

import personFilled from '../../assets/images/person-filled.svg'
import personOutlined from '../../assets/images/person-outlined.svg'

import classes from './styles.module.scss'

const GroupOccupancy = ({
  occupancyPercentage,
  groupCapacity,
  suscriptorsNumber
}) => {
  return (
    <div>
      <div>
        {
          times(10).map((val, i) => (
            <img
              key={i}
              src={i < suscriptorsNumber ? personFilled : personOutlined}
              alt=''
              className={classes.peopleImage}
            />
          ))
        }
      </div>
      <div className={classes.occupancyStatus}>
        <p>{occupancyPercentage} %</p>
        <p>{suscriptorsNumber}/{groupCapacity} agrupados</p>
      </div>
    </div>
  )
}

GroupOccupancy.propTypes = {
  occupancyPercentage: PropTypes.number,
  groupCapacity: PropTypes.number,
  suscriptorsNumber: PropTypes.number
}

export default GroupOccupancy
