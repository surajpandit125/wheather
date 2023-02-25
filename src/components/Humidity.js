import React from 'react'

const Humidity = () => {
  return (
    <div className='humidity'>
    <div className='hum'>
       <p>Humidity</p>
       <h1>82% <span>bad</span></h1>
       <div className='container'>
       <div className='bar'>good</div>
       {/* <div className='normal'>normal</div> */}
       {/* <div className='bad'>bad</div> */}

       </div>
       </div>
    </div>
  )
}

export default Humidity