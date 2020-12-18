import React from 'react'
import './styles.css'

const GroupOccupancy = ({ product }) => {
  const { occupancyPercent, occupancy, groupQty } = product

  return (
    <div>
      <h5>{occupancyPercent}</h5>
      <h5>{occupancy}</h5>
      <h5>{groupQty}</h5>
    </div>
  )
}

export default GroupOccupancy
