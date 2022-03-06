/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react'

const sectionTitleText = {
  color: 'grey',
  fontSize: '10px',
}

const header = {
  marginTop: 5
}

const Article = ({ sectionTitle, title, summary, link }) => {
  return (
    <React.Fragment>
        {sectionTitle && <span style={sectionTitleText}>{sectionTitle}</span>}
        <h2 style={header}>{title}</h2>
        <p>{summary.split('<')[0]}</p>
        <a href={link}>Read More</a>
    </React.Fragment>
  )
}

export default Article