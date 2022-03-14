/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as styles from './styles'
import React from 'react'

const Forecast = ({ data, dayIndex = 0 }) => {
  const morn = Math.round(data.daily[dayIndex].feels_like.morn)
  const day = Math.round(data.daily[dayIndex].feels_like.day)
  const eve = Math.round(data.daily[dayIndex].feels_like.eve)
  const night = Math.round(data.daily[dayIndex].feels_like.night)
  const city = data.city
  const descr = data.daily[dayIndex].weather[0].main
  const iconCode = data.daily[dayIndex].weather[0].icon
  const dayOfWeek = new Date(data.daily[dayIndex].dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })
  return (
      <div align='center' css={styles.forecastContainer}>
        <h3 css={[styles.forecastCity, styles.noSpacing]}>
          {!!city && city.toUpperCase()}
          {!city && !!dayOfWeek && dayOfWeek}
        </h3>
        <p css={styles.noSpacing}>
          <img height='40px' width='40px' alt={descr} src={`https://openweathermap.org/img/wn/${iconCode}.png`} />
        </p>
        <p css={[styles.noSpacing, styles.tempLine]}>
          {descr}
        </p>
        <p css={[styles.noSpacing, styles.tempLine]}>
          Morning {morn}&#8457;
        </p>
        <p css={[styles.noSpacing, styles.tempLine]}>
          Day {day}&#8457;
        </p>
        <p css={[styles.noSpacing, styles.tempLine]}>
          Evening {eve}&#8457;
        </p>
        <p css={[styles.noSpacing, styles.tempLine]}>
          Night {night}&#8457;
        </p>
      </div>
  )
}

export default Forecast