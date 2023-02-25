import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';


const pdata = [
    {
      degree: '58%',
      weather: 13,
      fees: 10
    },
    {
      degree: '75%',
      weather: 15,
      fees: 12
    },
    {
      degree: '12%',
      weather: 5,
      fees: 10
    },
    {
      degree: '20%',
      weather: 10,
      fees: 5
    },
    {
      degree: '30%',
      weather: 9,
      fees: 4
    },
    {
      degree: '33%',
      weather: 10,
      fees: 8
    },
  ];

const Degree = () => {
  return (
    <div className="upcoming-hours">
   <h3 className="chart-heading">upcoming hours</h3>
   <p><span className='Rain'>Rain Precipitation</span></p>
   <p><span className='days'>Next days</span></p>

   <ResponsiveContainer className="chat" width="95%" aspect={3}>
        <AreaChart
          width={300}
          height={400}
          data={pdata}
          margin={{
            top: 29,
            right: 5,
            left: 20,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="degree" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monoton" dataKey="weather" stroke="#8b8bfa" fill="#8b8bfa" />
        </AreaChart>
      </ResponsiveContainer> 
          </div>

  )
}

export default Degree