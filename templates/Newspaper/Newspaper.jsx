/** @jsx jsx */
import { jsx } from '@emotion/react'
import MultiSmallArticleSection from './base/MultiSmallArticleSection'
import Paper from './base/Paper'
import Header from './base/Header'
import Footer from './base/Footer'
import Headline from './base/Headline'
import SmallStock from './base/SmallStock'
import LargeArticle from './base/LargeArticle'
import Forecast from './base/Forecast'

const container = {
  textSizeAdjust:'100%',
  backgroundColor: '#939297',
  padding: '10px 0px',
}

const forecastPain = {
  display: 'inline-block',
  width: '15%',
}

const forecastContainer = {
  position: 'relative',
  paddingTop: 30,
}

const stock = {
  display: 'inline-block',
  padding: '0px 4px'
}

const stockContainer = {
  borderTop: '1px solid lightgray',
  borderBottom: '1px solid lightgray',
  marginTop: 30,
}

export const Newspaper = (data) => {
  return (
    <div align='center' role="article" aria-roledescription="email" lang="en" style={container}>
      <Paper>
          <Header />
          <Headline article={data.nprTopStories.items[0]} />
          <tr>
            <td align='center'>
              <div style={stockContainer}>
                {
                  Object.keys(data.processedPolygonGroupData).map((ticker) => {
                    return(
                      <div style={stock}>
                        <SmallStock
                          ticker={ticker}
                          previousClose={data.processedPolygonGroupData[ticker].c}
                          open={data.processedPolygonGroupData[ticker].o}
                        />
                      </div>
                    )
                  })
                }
              </div>
            </td>
          </tr>
          {/* forecast section */}
          <tr>
            <td align='center'>
              <div style={forecastContainer}>
                <div style={forecastPain}>
                  <Forecast
                    data={data.chicagoWeatherData}
                    dayIndex={0}
                  />
                </div>
                <div style={forecastPain}>
                  <Forecast
                    data={data.chicagoWeatherData}
                    dayIndex={1}
                  />
                </div>
                <div style={forecastPain}>
                  <Forecast
                    data={data.chicagoWeatherData}
                    dayIndex={2}
                  />
                </div>
                <div style={forecastPain}>
                  <Forecast
                    data={data.chicagoWeatherData}
                    dayIndex={3}
                  />
                </div>
                <div style={forecastPain}>
                  <Forecast
                    data={data.chicagoWeatherData}
                    dayIndex={4}
                  />
                </div>
              </div>
            </td>
          </tr>
          <MultiSmallArticleSection
            articles={
              [
                { ...data.nprTopStories.items[1], sectionTitle: 'NPR Top Story' },
                { ...data.nprTopStories.items[2], sectionTitle: 'NPR Top Story'},
              ]
            } 
          />
          <tr>
            <td style={{ padding: 20 }}>
              <LargeArticle 
                title={data.histChannelFeed.items[0].title}
                summary={data.histChannelFeed.items[0]['content:encoded']}
                link={data.histChannelFeed.items[0].link}
                sectionTitle={'This Day In History'}
              />
            </td>
          </tr>
          <MultiSmallArticleSection
            articles={
              [
                { ...data.fiveThirtyEight.items[0], sectionTitle: 'FiveThirtyEight' },
                { ...data.investopedia.items[1], sectionTitle: 'Investopedia'},
              ]
            } 
            isLastSection
          />
          <Footer />
      </Paper>

      <div style={{ paddingTop: 20 }}></div>
      
      <Paper>
        <tr>
          <td style={{ padding: 20 }}>
            <LargeArticle 
              title={data.mitEngineering.items[0].title}
              summary={data.mitEngineering.items[0]['content:encoded']}
              link={data.mitEngineering.items[0].link}
              sectionTitle={'MIT Engineering'}
            />
          </td>
        </tr>
        <MultiSmallArticleSection
          articles={
            [
              { ...data.freeCodeCamp.items[0], sectionTitle: 'Free Code Camp' },
              { ...data.freeCodeCamp.items[1], sectionTitle: 'Free Code Camp'},
            ]
          } 
          isLastSection
        />
        <Footer pageNumber={2}/>
      </Paper>
    </div>
  )
}