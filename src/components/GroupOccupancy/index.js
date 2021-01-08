import React from 'react'
import './styles.css'
import PropTypes from 'prop-types'

const GroupOccupancy = ({
  occupancyPercentage,
  groupCapacity,
  suscriptorsNumber
}) => {
  return (
    <div className='occupancyStatus'>
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
