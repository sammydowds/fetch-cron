const CacheProvider = require('@emotion/react').CacheProvider
const renderToString = require('react-dom/server').renderToString
const createEmotionServer = require('@emotion/server/create-instance').default
const createCache = require('@emotion/cache').default
const Newspaper = require('../lib/Newspaper/Newspaper').Newspaper
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
            Newspaper({ ...data})
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
        <title>Email Preview</title>
        ${styles}
    </head>
    <body style="margin:0;padding:0;word-spacing:normal;background-color:#939297;">
        <div id="root">${html}</div>

        <script src="./bundle.js"></script>
    </body>
    </html>`
}