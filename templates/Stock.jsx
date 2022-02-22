import React from 'react'

const Stock = (stock) => {
  return (
      <p>
        <strong>{stock.ticker}</strong>
        <br></br>
        The 200 day average is {stock.data.twoHundredDayAverage}. It opened today at {stock.data.currentOpen} and previously closed at {stock.data.previousClose}.
      </p>
  )
}

export default Stock