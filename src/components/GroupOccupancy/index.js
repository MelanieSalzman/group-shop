import React from 'react'
import './styles.css'
import PropTypes from 'prop-types'
import personFilled from '../../assets/images/person-filled.svg'
import personOutlined from '../../assets/images/person-outlined.svg'

const GroupOccupancy = ({
  occupancyPercentage,
  groupCapacity,
  suscriptorsNumber
}) => {
  const suscriptorsNumberArray = new Array(suscriptorsNumber)
  for (let index = 0; index < suscriptorsNumber; index++) {
    suscriptorsNumberArray.push(0)
  }

  const remainingSuscriptorsArray = new Array(groupCapacity - suscriptorsNumber)
  for (let index = 0; index < (groupCapacity - suscriptorsNumber); index++) {
    remainingSuscriptorsArray.push(0)
  }

  return (
    <div>
      <div>
        {
          suscriptorsNumberArray.map((suscriptor, index) => {
            return (<img key={index} src={personFilled} alt='person' className='peopleImage' />)
          })
        }
        {
          remainingSuscriptorsArray.map((suscriptor, index) => {
            return (<img key={index} src={personOutlined} alt='personOutlined' className='peopleImage' />)
          })
        }
      </div>
      <div className='occupancyStatus'>
        <p className='occupancyPercentage'>{occupancyPercentage} %</p>
        <p className='suscriptorStatus'>{suscriptorsNumber}/{groupCapacity} agrupados</p>
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
