const CacheProvider = require('@emotion/react').CacheProvider
const renderToString = require('react-dom/server').renderToString
const createEmotionServer = require('@emotion/server/create-instance').default
const createCache = require('@emotion/cache').default
const Email = require('../lib/email').Email
const React = require('react')

// NOTE: web versions of gmail may not be compatible  

module.exports = (data) => {
    const key = 'custom'
    const cache = createCache({ key })
    const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache)

    const html = renderToString(
        React.createElement(
            CacheProvider,
            {value: cache},
            Email(
                { 
                    tslaData: data.tslaStockData, 
                    vtsaxData: data.vtsaxStockData, 
                    nprTopStories: data.nprTopStories,
                    nprArchitectureStories: data.nprArchitectureStories,
                    nprTechStories: data.nprTechStories,
                    nprWorldStories: data.nprWorldStories,
                    cmuSeiRssFeed: data.cmuSeiRssFeed,
                    mechEngRssFeed: data.mechEngRssFeed,
                    histChannelFeed: data.histChannelFeed,
                    nprPodcasts: data.nprPodcasts,
                    mitMechE: data.mitMechE,
                    mitUrbanP: data.mitUrbanP,
                    hackerNews: data.hackerNews,
                    nerdFitnessFeed: data.nerdFitnessFeed,
                    muscleAndFitnessFeed: data.muscleAndFitnessFeed
                  }
             )
        )
    )

    const chunks = extractCriticalToChunks(html)
    const styles = constructStyleTagsFromChunks(chunks)

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My site</title>
        ${styles}
    </head>
    <body>
        <div id="root">${html}</div>

        <script src="./bundle.js"></script>
    </body>
    </html>`
}