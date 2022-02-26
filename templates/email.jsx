
/** @jsx jsx */
import { jsx } from '@emotion/react'
import Stock from './Stock'
import RssNewsArticle from './RssNewsArticle'
import * as styles from './styles'

export const Email = (data) => {
  return (
    <div> 
      <h1>Good Morning</h1>

      <h2>Stocks</h2>
      <Stock ticker={'TSLA'} data={data.tslaData} />
      <Stock ticker={'VTSAX'} data={data.vtsaxData} />
      
      <div css={styles.cardContainer}>
        <h2>NPR News</h2>
        <RssNewsArticle article={data.nprTopStories.items[0]} sectionTitle='Top Stories'/>
        <RssNewsArticle article={data.nprArchitectureStories.items[0]} sectionTitle='Architecture' />
        <RssNewsArticle article={data.nprTechStories.items[0]} sectionTitle='Tech' />
        <RssNewsArticle article={data.nprWorldStories.items[0]} sectionTitle='World' />
      </div>

      <h2>Engineering</h2>
      <small>CMU Software Engineering Insights</small>
      <RssNewsArticle article={data.cmuSeiRssFeed.items[0]} />
      <RssNewsArticle article={data.cmuSeiRssFeed.items[1]} />
      <RssNewsArticle article={data.cmuSeiRssFeed.items[2]} />
      <small>Mechanical Engineering Notes</small>
      <RssNewsArticle article={data.mechEngRssFeed.items[0]} />
      <RssNewsArticle article={data.mechEngRssFeed.items[1]} />
      <RssNewsArticle article={data.mechEngRssFeed.items[2]} />

      <h2>History</h2>
      <small>History Channel</small>
      <RssNewsArticle article={data.histChannelFeed.items[0]} />
      <RssNewsArticle article={data.histChannelFeed.items[1]} />

    </div>
  )
}
