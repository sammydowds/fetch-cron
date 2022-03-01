/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react'
import * as styles from './styles'

const Podcast = ({ podcast, sectionTitle, showContent }) => {
  return (
    <div css={styles.podcastContainer}>
      {sectionTitle &&
        <p css={styles.title}>{sectionTitle}</p>
      }
      <p css={styles.subTitle}>{podcast.pubDate}</p>
      {showContent &&
        <p>{podcast.content}</p>
      }
      <a css={styles.podcastLink} href={podcast.link}>Listen Now &#8599;</a>
    </div>
  )
}

export default Podcast