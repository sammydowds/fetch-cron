import React from 'react'
import Stock from './Stock'

export const Email = (data) => {
  return (
    <div> 
      <h1>Good Morning Samuel</h1>
      <h2>Stocks</h2>
      <Stock ticker={'TSLA'} data={data.tslaData} />
      <Stock ticker={'VTSAX'} data={data.vtsaxData} />
      <h2>NPR Top Stories</h2>
      <p>
        <strong>{data.nprTopStories.items[0].title}</strong>
        <br></br>
        {data.nprTopStories.items[0].content}
        <br></br>
        <a href={data.nprTopStories.items[0].link}>Read Here</a>
      </p>
      <p>
        <strong>{data.nprTopStories.items[1].title}</strong>
        <br></br>
        {data.nprTopStories.items[1].content}
        <br></br>
        <a href={data.nprTopStories.items[1].link}>Read Here</a>
      </p>
    </div>
  )
}
