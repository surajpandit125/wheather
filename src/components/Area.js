import React from 'react'
import Sarea from './Sarea'

const Area = () => {
  return (
    <div className='area' >
    <div className='plus'> +</div>
    <p className='new'>New York, USA</p>
    <p className='feb'>Today 25 feb</p>
    <h1 className='deg'>  27 </h1>
        <h4 className="sunny">Sunny</h4>
    <img  className="build" src='./bulding.jpg'/>
         <Sarea/>
    </div>
  )
}

export default Area