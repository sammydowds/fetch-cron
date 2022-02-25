import React from 'react'
import Stock from './Stock'
import RssNewsArticle from './RssNewsArticle'

export const Email = (data) => {
  return (
    <div> 
      <h1>Good Morning</h1>

      <h2>Stocks</h2>
      <Stock ticker={'TSLA'} data={data.tslaData} />
      <Stock ticker={'VTSAX'} data={data.vtsaxData} />

      <h2>NPR News</h2>
      <small>Top Stories</small>
      <RssNewsArticle article={data.nprTopStories.items[0]} />
      <small>Architecture</small>
      <RssNewsArticle article={data.nprArchitectureStories.items[0]} />
      <small>Tech</small>
      <RssNewsArticle article={data.nprTechStories.items[0]} />
      <small>World</small>
      <RssNewsArticle article={data.nprWorldStories.items[0]} />

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
