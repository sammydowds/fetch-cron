/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as styles from './styles'
import React from 'react'

const Forecast = ({ data }) => {
  const high = Math.round(data.daily[0].temp.max)
  const low = Math.round(data.daily[0].temp.min)
  const city = data.city
  const descr = data.daily[0].weather[0].main
  return (
      <p css={styles.forecastContainer}>
        <span css={styles.forecastCity}>{city.toUpperCase()}</span>
        <br />
        <span css={styles.lowTemp}>
          {low}&#8457;
        </span>
        <span css={styles.highTemp}>
          {high}&#8457;
        </span>
        <br />
        <span css={styles.forecastDescr}>
          {descr.toUpperCase()}
        </span>
      </p>
  )
}

export default Forecast