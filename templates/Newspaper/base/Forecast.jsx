/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as styles from './styles'
import React from 'react'

const Forecast = ({ data }) => {
  const day = Math.round(data.daily[0].temp.day)
  const night = Math.round(data.daily[0].temp.night)
  const city = data.city
  const descr = data.daily[0].weather[0].main
  const iconCode = data.daily[0].weather[0].icon
  return (
      <div align='center' css={styles.forecastContainer}>
        <h3 css={[styles.forecastCity, styles.noSpacing]}>
          {city.toUpperCase()}
        </h3>
        <p css={styles.noSpacing}>
          <img height='40px' width='40px' alt={descr} src={`https://openweathermap.org/img/wn/${iconCode}.png`} />
        </p>
        <p css={styles.noSpacing}>
          <span css={styles.highTemp}>
            {day}&#8457;
          </span>
          /
          <span css={styles.lowTemp}>
            {night}&#8457;
          </span>
        </p>
      </div>
  )
}

export default Forecast