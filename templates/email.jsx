import React from 'react'
import Stock from './Stock'

export const Email = (data) => {
  return (
    <div> 
      <h1>Good Morning Samuel</h1>
      <h2>Stocks</h2>
      <Stock ticker={'TSLA'} data={data.tslaData} />
      <Stock ticker={'VTSAX'} data={data.vtsaxData} />
    </div>
  )
}
