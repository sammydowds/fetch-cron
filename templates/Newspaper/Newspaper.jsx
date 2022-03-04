/** @jsx jsx */
import { jsx } from '@emotion/react'
import ThreeArticleSection from './base/ThreeArticleSection'
import FourArticleSection from './base/FourArticleSection'
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
        />
        <ThreeArticleSection 
          articles={
            [
              { ...data.nprWorldStories.items[0], sectionTitle: 'NPR World News' },
              { ...data.nprArchitectureStories.items[0], sectionTitle: 'NPR Architecture'},
              { ...data.nprTechStories.items[0], sectionTitle: 'NPR Tech'}
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
              { ...data.muscleAndFitnessFeed.items[0], sectionTitle: 'Muscle and Fitness' },
              { ...data.mitMechE.items[0], sectionTitle: 'MIT Mech E' },
              { ...data.nerdFitnessFeed.items[0], sectionTitle: 'Nerd Fitness' }
            ]
          } 
          isLastSection
        />
        <Footer />
    </Paper>
  )
}