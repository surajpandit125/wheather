import React from 'react'
import Degree from './Degree'
import Humidity from './Humidity'
import Wind from './Wind'
import Precipitation from './Precipitation'
import UV from './UV'
import Fees from './Fees'
import Rain from './Rain'

const Sarea = () => {
  return (
    <div className='sArea'>
      <h3>Welcome back!</h3>
      <p>Check out today's weather information</p>
      <Degree />
      <p className='detail'>More details of today's weather</p>
      <Humidity />
      <Wind />
      <Precipitation />
      <UV />
      <Fees />
      <Rain />

    </div>
  )
}

export default Sarea