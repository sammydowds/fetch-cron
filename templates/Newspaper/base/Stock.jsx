/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as styles from './styles'
import React from 'react'

const Stock = ({ ticker, previousClose, open}) => {
  const isUp = open < previousClose
  const percentChange = Math.round(10 * 100 * (previousClose - open)/(open))/10
  return (
      <p css={styles.stockContainer}>
        <strong css={styles.ticker}>
          {ticker}
        </strong>
        <br />
        <span css={styles.price}>${previousClose}</span>
        <span css={[styles.delta, isUp ? styles.up : styles.down]}>
            {isUp ? <React.Fragment>&#8593;</React.Fragment> : <React.Fragment>&#8595;</React.Fragment>}{percentChange}%
        </span>
      </p>
  )
}

export default Stock