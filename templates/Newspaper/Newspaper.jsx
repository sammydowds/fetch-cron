/** @jsx jsx */
import { jsx } from '@emotion/react'
import ThreeArticleSection from './base/ThreeArticleSection'
import Paper from './base/Paper'
import Header from './base/Header'
import Footer from './base/Footer'
import Headline from './base/Headline'
import Rail from './base/Rail'

const Newspaper = () => {
  return (
    <Paper>
        <Header />
        <Headline />
        <ThreeArticleSection />
        <Rail />
        <ThreeArticleSection />
        <Footer />
    </Paper>
  )
}

export default Newspaper