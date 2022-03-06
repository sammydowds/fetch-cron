
/** @jsx jsx */
import { jsx } from '@emotion/react'
import Stock from './Stock'
import RssNewsArticle from './RssNewsArticle'
import Podcast from './Podcast'
import * as styles from './styles'
import Newspaper from './Newspaper/Newspaper'

export const Email = (data) => {
  return (
    <div> 
      <h3 css={styles.sectionHeader}>PODCASTS</h3>
      <div css={styles.sectionContainer}>
        <Podcast podcast={data.nprPodcasts.items[0]} sectionTitle={data.nprPodcasts.items[0].title} />
        <Podcast podcast={data.nprPodcasts.items[1]} sectionTitle={data.nprPodcasts.items[1].title} />
      </div>

      <h3 css={styles.sectionHeader}>THIS DAY IN HISTORY</h3>
      <div css={styles.sectionContainer}>
        <RssNewsArticle article={data.histChannelFeed.items[0]} />
        <RssNewsArticle article={data.histChannelFeed.items[1]} />
        <RssNewsArticle article={data.histChannelFeed.items[2]} />
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
        <RssNewsArticle article={data.mitMechE.items[0]} sectionTitle='MIT Mechanical Engineering'/>
        <RssNewsArticle article={data.mitUrbanP.items[0]} sectionTitle='MIT Urban Planning'/>
        <RssNewsArticle article={data.hackerNews.items[0]} sectionTitle='Hacker News'/>
        <RssNewsArticle article={data.cmuSeiRssFeed.items[0]} sectionTitle='CMU Software Engineering Insights'/>
      </div>

      <h3 css={styles.sectionHeader}>FITNESS</h3>
      <div css={styles.sectionContainer}>
        <RssNewsArticle article={data.nerdFitnessFeed.items[0]} sectionTitle='Nerd Fitness Blog'/>
        <RssNewsArticle article={data.muscleAndFitnessFeed.items[0]} sectionTitle='Muscle And Fitness Blog'/>
      </div>

      <Newspaper data={data} />

    </div>
  )
}
