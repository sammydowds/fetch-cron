/** @jsx jsx */
import { jsx } from '@emotion/react'
import Forecast from './Forecast'
import LargeArticle from './LargeArticle'
import Stock from './Stock'

const smallRail = {
    width: '15%'
}

const largeRail = {
    width: '85%',
    borderLeft: '1px solid lightgray'
}

const railTable = {
    width: '100%'
}

const smallRailTable = {
    width: '100%',
}

const newspaperTd = {
    position: 'relative'
}

const laregRailTd = {
    padding: 10
}

const smallRailTd = {
    padding: '0px 5px'
}

const Rail = ({ largeRailArticles, stockData, weatherData }) => {
    // TODO: expand content beyond history channel
    console.log(weatherData)
    const article = largeRailArticles[0]
    const tslaStockData = stockData['TSLA']
    const appleStockData = stockData['AAPL']
    const dollarTreeStockData = stockData['DLTR']
    return (
        <tr>
            <td style={newspaperTd}>
                <table style={railTable}>
                    <tr>
                        <td valign='top' align='center' style={smallRail}>
                            <table style={smallRailTable}>
                                { tslaStockData && appleStockData && 
                                    <tr valign='top'>
                                        <td style={smallRailTd}>
                                            <Stock 
                                                previousClose={tslaStockData?.c} 
                                                open={tslaStockData?.o}
                                                ticker='VTSAX'
                                            />
                                        </td>
                                        <td style={smallRailTd}>
                                            <Stock 
                                                previousClose={appleStockData?.c} 
                                                open={appleStockData?.o}
                                                ticker='APPLE'
                                            />
                                        </td>
                                    </tr>
                                }
                                { dollarTreeStockData && weatherData[0] && 
                                    <tr valign='top'>
                                        <td style={smallRailTd}>
                                            <Stock 
                                                previousClose={dollarTreeStockData?.c} 
                                                open={dollarTreeStockData?.o}
                                                ticker='DLTR'
                                            />
                                        </td>
                                        <td style={smallRailTd}>
                                            <Forecast
                                                data={weatherData[0]}
                                            />
                                        </td>
                                    </tr>
                                }
                                { weatherData[1] && weatherData[2] && 
                                    <tr valign='top'>
                                        <td style={smallRailTd}>
                                            <Forecast
                                                data={weatherData[1]}
                                            />
                                        </td>
                                        <td style={smallRailTd}>
                                            <Forecast
                                                data={weatherData[2]}
                                            />
                                        </td>
                                    </tr>
                                }
                            </table>
                        </td>
                        <td align='center' style={largeRail}>
                            <table>
                                <tr>
                                    <td style={laregRailTd}>
                                        <LargeArticle 
                                            title={article.title}
                                            summary={article['content:encoded']}
                                            link={article.link}
                                            sectionTitle={article.sectionTitle}
                                        />
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    )
}

export default Rail