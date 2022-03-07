/** @jsx jsx */
import { jsx } from '@emotion/react'
import SmallArticle from './SmallArticle'

const container = {
    width: '100%',
    background: 'white',
    padding: '30px 0px'
}

const lastSectionContainer = {
    width: '100%',
    padding: '30px 0px 10px 0px'
}

const articleContainer = (numberArticles) => {
    return {
        display: 'inline-block',
        padding: 10,
        width: `${80/numberArticles}%`,
        textAlign: 'left',
        verticalAlign: 'top'
    }
}

const sectionContainer = {
    borderTop: '1px solid lightgray',
    borderBottom: '1px solid lightgray',
    position: 'relative'
}

const FourArticleSection = ({ articles, isLastSection }) => {
    const numArticles = articles.length
    const articleContainerStyle = articleContainer(numArticles)
  return (
    <tr>
        <td style={isLastSection ? lastSectionContainer : container}>
            <div style={sectionContainer}>
                <div align="center">
                    {
                        articles.map((article) => {
                            return (
                                <div key={article.title} css={articleContainerStyle}>
                                    <SmallArticle 
                                        title={article.title}
                                        link={article.link}
                                        sectionTitle={article.sectionTitle}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </td>
    </tr>
  )
}

export default FourArticleSection