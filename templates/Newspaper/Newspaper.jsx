/** @jsx jsx */
import { jsx } from '@emotion/react'
import ThreeArticleSection from './base/ThreeArticleSection'
import FourArticleSection from './base/FourArticleSection'
import MultiSmallArticleSection from './base/MultiSmallArticleSection'
import Paper from './base/Paper'
import Header from './base/Header'
import Footer from './base/Footer'
import Headline from './base/Headline'
import Rail from './base/Rail'

const container = {
  textSizeAdjust:'100%',
  backgroundColor: '#939297',
  padding: '10px 0px'
}

// TODO: create indicators for daily throughput of
// tsa checkpoints, hotel occupancy, box office movie sales (box office mojo), resturant (open table data), public transport (apple)
// TODO: create weather section and stock section
// TODO: break out "this day in history section"
// TODO: create more definitive sections 
export const Newspaper = (data) => {
  return (
    <div align='center' role="article" aria-roledescription="email" lang="en" style={container}>
      <Paper>
          <Header />
          <Headline article={data.nprTopStories.items[0]} />
          <MultiSmallArticleSection
            articles={
              [
                { ...data.nprTopStories.items[1], sectionTitle: 'NPR Top Story' },
                { ...data.nprTopStories.items[2], sectionTitle: 'NPR Top Story'},
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
                { ...data.lasVegasWeatherData, city: 'Vegas'},
              ]
            }
          />
          <MultiSmallArticleSection
            articles={
              [
                { ...data.freeCodeCamp.items[0], sectionTitle: 'Free Code Camp' },
                { ...data.freeCodeCamp.items[1], sectionTitle: 'Free Code Camp'},
              ]
            } 
            isLastSection
          />
          <Footer />
      </Paper>
    </div>
  )
}