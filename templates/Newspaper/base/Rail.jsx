/** @jsx jsx */
import { jsx } from '@emotion/react'
import Forecast from './Forecast'
import LargeArticle from './LargeArticle'
import Stock from './Stock'

const container = {
    width: '100%',
    background: 'white',
    position: 'relative'
}

const smallRailContainer = {
    verticalAlign: 'top',
    display: 'inline-block',
}

const largeRailContainer = {
    borderLeft: '1px solid lightgray',
    display: 'inline-block',
    maxWidth: '90%',
    position: 'absolute'
}

const smallRailItem = {
    padding: '5px 15px 5px 30px',
}

const largeRailItem = {
    minHeight: 200,
    padding: '10px 40px',
}

const Rail = ({ largeRailArticles, stockData, weatherData }) => {
    // TODO: expand content beyond history channel
    console.log(weatherData)
    const article = largeRailArticles[0]
    const tslaStockData = stockData['TSLA']
    const vtsaxStockData = stockData['VTSAX']
    const appleStockData = stockData['AAPL']
    const dollarTreeStockData = stockData['DLTR']
    return (
        <tr>
            <td style={container}>
                <div style={smallRailContainer}>
                    {vtsaxStockData && 
                        <div css={smallRailItem}> 
                            <Stock 
                                previousClose={vtsaxStockData?.c} 
                                open={vtsaxStockData?.o}
                                ticker='VTSAX'
                            />
                        </div>
                    }
                    {tslaStockData && 
                        <div css={smallRailItem}> 
                            <Stock 
                                previousClose={tslaStockData?.c} 
                                open={tslaStockData?.o}
                                ticker='TSLA'
                            />
                        </div>
                    }
                    {dollarTreeStockData && 
                        <div css={smallRailItem}> 
                            <Stock 
                                previousClose={dollarTreeStockData?.c} 
                                open={dollarTreeStockData?.o}
                                ticker='DLTR'
                            />
                        </div>
                    }
                    {appleStockData && 
                        <div css={smallRailItem}> 
                            <Stock 
                                previousClose={appleStockData?.c} 
                                open={appleStockData?.o}
                                ticker='AAPL'
                            />
                        </div>
                    }
                    {weatherData[0] && 
                        <div css={smallRailItem}> 
                            <Forecast
                                data={weatherData[0]}
                            />
                        </div>
                    }
                    {weatherData[1] && 
                        <div css={smallRailItem}> 
                            <Forecast
                                data={weatherData[1]}
                            />
                        </div>
                    }
                    {weatherData[2] && 
                        <div css={smallRailItem}> 
                            <Forecast
                                data={weatherData[2]}
                            />
                        </div>
                    }
                </div>
                <div align='center' style={largeRailContainer}>
                    <div align='left' key={article.title} css={largeRailItem}>
                        <LargeArticle 
                            title={article.title}
                            summary={article['content:encoded']}
                            link={article.link}
                            sectionTitle={article.sectionTitle}
                        />
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default Rail