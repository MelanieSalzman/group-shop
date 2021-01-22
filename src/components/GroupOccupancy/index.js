import React from 'react'
import PropTypes from 'prop-types'

import './styles.module.css'

const GroupOccupancy = ({
  occupancyPercentage,
  groupCapacity,
  suscriptorsNumber
}) => {
  return (
    <div>
      <h5>{occupancyPercentage} %</h5>
      <h5>{suscriptorsNumber}/{groupCapacity} agrupados</h5>
    </div>
  )
}

GroupOccupancy.propTypes = {
  occupancyPercentage: PropTypes.number,
  groupCapacity: PropTypes.number,
  suscriptorsNumber: PropTypes.number
}

export default GroupOccupancy
