import React from 'react'
import PropTypes from 'prop-types'
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
          Array(10).fill(0).map((val, i) => (
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
        <p className={classes.occupancyPercentage}>{occupancyPercentage} %</p>
        <p className={classes.suscriptorStatus}>{suscriptorsNumber}/{groupCapacity} agrupados</p>
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
