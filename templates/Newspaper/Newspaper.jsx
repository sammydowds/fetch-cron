/** @jsx jsx */
import { jsx } from '@emotion/react'
import ThreeArticleSection from './base/ThreeArticleSection'
import FourArticleSection from './base/FourArticleSection'
import Paper from './base/Paper'
import Header from './base/Header'
import Footer from './base/Footer'
import Headline from './base/Headline'
import Rail from './base/Rail'

// TODO: create indicators for daily throughput of
// tsa checkpoints, hotel occupancy, box office movie sales (box office mojo), resturant (open table data), public transport (apple)

export const Newspaper = (data) => {
  return (
    <Paper>
        <Header />
        <Headline article={data.nprTopStories.items[0]} />
        <FourArticleSection 
          articles={
            [
              { ...data.nprTopStories.items[1], sectionTitle: 'NPR Top Story' },
              { ...data.nprTopStories.items[2], sectionTitle: 'NPR Top Story'},
              { ...data.nprTopStories.items[3], sectionTitle: 'NPR Top Story'},
              { ...data.nprTopStories.items[4], sectionTitle: 'NPR Top Story'}
            ]
          } 
        />
        <Rail 
          largeRailArticles={
            [
              { ...data.histChannelFeed.items[0], sectionTitle: 'This Day In History' }
            ]
          }
          stockData={data.processedPolygonGroupData}
          weatherData={
            [ 
              { ...data.chicagoWeatherData, city: 'Chicago' }, 
              { ...data.okcWeatherData, city: 'OKC'},
              { ...data.lasVegasWeatherData, city: 'Las Vegas'},
            ]
          }
        />
        <FourArticleSection 
          articles={
            [
              { ...data.cmuSeiRssFeed.items[0], sectionTitle: 'CMU software' },
              { ...data.mitMechE.items[0], sectionTitle: 'MIT Mech E' },
              { ...data.hackerNews.items[0], sectionTitle: 'Hacker News' },
              { ...data.hackerNews.items[1], sectionTitle: 'Hacker News' }
            ]
          } 
        />
        <ThreeArticleSection 
          articles={
            [
              { ...data.nprWorldStories.items[0], sectionTitle: 'NPR World News' },
              { ...data.nprArchitectureStories.items[0], sectionTitle: 'NPR Architecture'},
              { ...data.nprTechStories.items[0], sectionTitle: 'NPR Tech'}
            ]
          } 
          isLastSection
        />
        <Footer />
    </Paper>
  )
}