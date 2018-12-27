import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import BlogPost from '../templates/blog-post'
import Layout from '../components/Layout'
import { rhythm } from '../utils/typography'
import { colors } from '../utils/constants'

class BlogIndex extends React.Component {
  render() {
    //const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    //const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const location = get(
      this,
      'props.data.allMarkdownRemark.edges[0].node.fields.slug'
    )
    const data = get(this, 'props.data')
    return (
      <Layout location={location}>
        <h2 style={{ borderBottom: `5px solid ${colors.orange}` }}>
          Latest post
        </h2>
        <BlogPost {...data} isFrontPage />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            series
          }
          fields {
            slug
          }
          html
        }
      }
    }
  }
`
