/** @jsx jsx */
import { jsx } from '@emotion/react'
import ThreeArticleSection from './base/ThreeArticleSection'
import Paper from './base/Paper'
import Header from './base/Header'
import Footer from './base/Footer'
import Headline from './base/Headline'
import Rail from './base/Rail'

export const Newspaper = (data) => {
  return (
    <Paper>
        <Header />
        <Headline article={data.nprTopStories.items[0]} />
        <ThreeArticleSection 
          articles={
            [
              data.nprWorldStories.items[0], 
              data.nprArchitectureStories.items[0], 
              data.nprTechStories.items[0]
            ]
          } 
        />
        <Rail 
          largeRailArticles={
            [
              data.histChannelFeed.items[0]
            ]
          } 
        />
        <ThreeArticleSection 
          articles={
            [
              data.muscleAndFitnessFeed.items[0],
              data.mitMechE.items[0],
              data.hackerNews.items[0]
            ]
          } 
        />
        <Footer />
    </Paper>
  )
}