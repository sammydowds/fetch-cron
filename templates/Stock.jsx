
/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as styles from './styles'
import React from 'react'

const Stock = (stock) => {
  const isUp = stock.data.twoHundredDayAverage < stock.data.previousClose
  const percentChange = Math.round(100 * (stock.data.stockData.previousClose.fmt - stock.data.stockData.twoHundredDayAverage.fmt)/stock.data.stockData.twoHundredDayAverage.fmt)
  return (
      <p>
        <strong css={styles.ticker}>{stock.ticker}</strong>
        <br></br>
        The 200 day average is {stock.data.twoHundredDayAverage}. It previously closed at {stock.data.previousClose} <span css={[styles.delta, isUp ? styles.up : styles.down]}>({isUp ? <React.Fragment>&#8593;</React.Fragment> : <React.Fragment>&#8595;</React.Fragment>}{percentChange}%)</span>, and opened today at {stock.data.currentOpen}. 
      </p>
  )
}

export default Stock