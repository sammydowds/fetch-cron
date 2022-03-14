/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as styles from './styles'
import React from 'react'

const SmallStock = ({ ticker, previousClose, open}) => {
  const isUp = open < previousClose
  const percentChange = Math.round(10 * 100 * (previousClose - open)/(open))/10
  return (
      <div align='center' css={styles.stockContainer}>
        <strong css={styles.smallTicker}>
          {ticker}
        </strong>
        <span css={styles.smallPrice}>${previousClose}</span>
        <span css={[styles.smallDelta, isUp ? styles.up : styles.down]}>
            {isUp ? <React.Fragment>&#8593;</React.Fragment> : <React.Fragment>&#8595;</React.Fragment>}{percentChange}%
        </span>
      </div>
  )
}

export default SmallStock