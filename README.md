# fetch-cron

## Summary

This project was to explore scheduling a daily job to send me a daily email. Currently, it pulls top stories from NPR, FreeCodeCamp, the History Channel's Today In History, weather data for 3 cities, and stock data for a few stocks.

## Commands

Render a preview of your email and open it in the browser:

```
npm run preview
```

Install dependencies, build, and start the app

```
npm start
```

Transpile the templates to `target:node` (output in `/lib`)

```
npm run build
```

## Future Ideas

I think there is a potential evolution of this where I spin up a server in parallel to serve the html. Email clients limit CSS and a level of user interaction that I would like to have (embedded podcasts/js).
