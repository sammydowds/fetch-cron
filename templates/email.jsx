
/** @jsx jsx */
import { jsx } from '@emotion/react'
import Stock from './Stock'
import RssNewsArticle from './RssNewsArticle'
import Podcast from './Podcast'
import * as styles from './styles'

export const Email = (data) => {
  let upFirst = data.nprPodcasts.items.filter((podcast) => podcast.link.includes('1082036799'))[0]
  return (
    <div> 
      <h3 css={styles.sectionHeader}>PODCASTS</h3>
      <div css={styles.sectionContainer}>
        {upFirst && 
          <Podcast podcast={upFirst} sectionTitle={`Up First - ${upFirst.title}`} />
        }
      </div>

      <h3 css={styles.sectionHeader}>THIS DAY IN HISTORY</h3>
      <div css={styles.sectionContainer}>
        <RssNewsArticle article={data.histChannelFeed.items[0]} />
        <RssNewsArticle article={data.histChannelFeed.items[1]} />
      </div>
      
      <h3 css={styles.sectionHeader}>STOCKS</h3>
      <div css={styles.sectionContainer}>
        <Stock ticker={'TSLA'} data={data.tslaData} />
        <Stock ticker={'VTSAX'} data={data.vtsaxData} />
      </div>
      
      <h3 css={styles.sectionHeader}>NPR NEWS</h3>
      <div css={styles.sectionContainer}>
        <RssNewsArticle article={data.nprTopStories.items[0]} sectionTitle='Top Stories'/>
        <RssNewsArticle article={data.nprArchitectureStories.items[0]} sectionTitle='Architecture' />
        <RssNewsArticle article={data.nprTechStories.items[0]} sectionTitle='Tech' />
        <RssNewsArticle article={data.nprWorldStories.items[0]} sectionTitle='World' />
      </div>

      <h3 css={styles.sectionHeader}>ENGINEERING</h3>
      <div css={styles.sectionContainer}>
        <RssNewsArticle article={data.cmuSeiRssFeed.items[0]} sectionTitle='CMU Software Engineering Insights'/>
        <RssNewsArticle article={data.mechEngRssFeed.items[0]} sectionTitle='Mechanical Engineering Notes'/>
      </div>

    </div>
  )
}
