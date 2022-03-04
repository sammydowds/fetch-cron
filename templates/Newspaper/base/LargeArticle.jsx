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

const LargeArticle = ({ sectionTitle, title, summary, link }) => {
  return (
    <React.Fragment>
        {sectionTitle && <span style={sectionTitleText}>{sectionTitle}</span>}
        <h2 style={header}>{title}</h2>
        <p dangerouslySetInnerHTML={{__html: summary}} />
        <a href={link}>Read More</a>
    </React.Fragment>
  )
}

export default LargeArticle