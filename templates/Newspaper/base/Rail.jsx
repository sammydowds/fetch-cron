/** @jsx jsx */
import { jsx } from '@emotion/react'
import Forecast from './Forecast'
import LargeArticle from './LargeArticle'
import Stock from './Stock'

const largeRail = {
    borderRight: '1px solid lightgray'
}

const railTable = {
    width: '100%'
}

const newspaperTd = {
    position: 'relative'
}

const laregRailTd = {
    padding: 10
}

const smallRailTd = {
    padding: '5px 10px'
}

const Rail = ({ largeRailArticles, stockData, weatherData }) => {
    const article = largeRailArticles[0]
    return (
        <tr>
            <td style={newspaperTd}>
                <table style={railTable}>
                    <tr>
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
                        <td valign='top' align='center'>
                            <table align='center'>
                                {
                                    weatherData.map((city) => {
                                        return (
                                            <tr key={city.name}>
                                                <td key={`${city.name}-td`} style={smallRailTd}>
                                                    <Forecast
                                                        data={city}
                                                    />
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                {
                                    Object.keys(stockData).map((ticker) => {
                                        return(
                                            <tr key={ticker}>
                                                <td key={`${ticker}-td`} style={smallRailTd}>
                                                    <Stock 
                                                        previousClose={stockData[ticker].c}
                                                        open={stockData[ticker].o}
                                                        ticker={ticker}
                                                    />
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    )
}

export default Rail