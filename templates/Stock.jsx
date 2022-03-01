
/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as styles from './styles'
import React from 'react'

const Stock = (stock) => {
  const isUp = stock.data.twoHundredDayAverage < stock.data.previousClose
  const percentChange = Math.round(100 * (stock.data.stockData.previousClose.fmt - stock.data.stockData.twoHundredDayAverage.fmt)/stock.data.stockData.twoHundredDayAverage.fmt)
  return (
      <p>
        <strong css={styles.ticker}>{stock.ticker} <span css={[styles.delta, isUp ? styles.up : styles.down]}>({isUp ? <React.Fragment>&#8593;</React.Fragment> : <React.Fragment>&#8595;</React.Fragment>}{percentChange}% 200 day avg)</span></strong>
        <br></br>
        <span css={styles.price}>{stock.data.previousClose}</span>
      </p>
  )
}

export default Stock