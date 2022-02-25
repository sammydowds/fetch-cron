import React from 'react'
import Stock from './Stock'
import NewsArticle from './NewsArticle'

export const Email = (data) => {
  return (
    <div> 
      <h1>Good Morning Samuel</h1>
      <h2>Stocks</h2>
      <Stock ticker={'TSLA'} data={data.tslaData} />
      <Stock ticker={'VTSAX'} data={data.vtsaxData} />
      <h2>NPR Top Stories</h2>
      <small>Top Stories</small>
      <NewsArticle article={data.nprTopStories.items[0]} />
      <small>Architecture</small>
      <NewsArticle article={data.nprArchitectureStories.items[0]} />
      <small>Tech</small>
      <NewsArticle article={data.nprTechStories.items[0]} />
      <small>World</small>
      <NewsArticle article={data.nprWorldStories.items[0]} />
    </div>
  )
}
