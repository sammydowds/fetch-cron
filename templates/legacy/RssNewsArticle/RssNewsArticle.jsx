/** @jsx jsx */
import { jsx } from '@emotion/react'

import * as styles from './styles'

const RssNewsArticle = ({ article, sectionTitle }) => {
  return (
    <div>
      {sectionTitle && <small css={styles.title}>{sectionTitle}</small>}
      <p css={styles.mainContainer}>
        <strong>{article.title}</strong>
        <br></br>
        <a css={styles.articleLink} href={article.link}>Read More &#8599;</a>
      </p>
    </div>
  )
}

export default RssNewsArticle