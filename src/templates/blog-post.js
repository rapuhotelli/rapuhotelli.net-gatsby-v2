import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import rehypeReact from 'rehype-react'
import InlineImage from '../components/inline/InlineImage'
import Layout from '../components/Layout'

import { rhythm, scale } from '../utils/typography'
import { colors } from '../utils/constants'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { 'inline-image': InlineImage },
}).Compiler

// <Tag component="div" /> => <div></div>

class BlogPostTemplate extends React.Component {
  render() {
    let post = get(this.props, 'data.markdownRemark')
    if (!post) {
      post = get(this.props, 'allMarkdownRemark.edges[0].node')
    }
    const location = get(
      this,
      'props.data.allMarkdownRemark.edges[0].node.fields.slug'
    )
    const siteTitle = get(
      this.props,
      'data.site.siteMetadata.title',
      get(this.props, 'site.siteMetadata.title', 'rapuhotelli')
    )
    const series = get(
      this.props,
      'data.markdownRemark.frontmatter.series',
      get(this.props, 'allMarkdownRemark.edges[0].node.frontmatter.series', [])
    )
    const postContent = (
      <Fragment>
        <h1>{post.frontmatter.title}</h1>
        <div
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            color: '#c4c4c4',
          }}
        >
          <svg
            style={{ fill: '#c4c4c4', marginRight: '5px' }}
            height="14"
            viewBox="0 0 16 16"
            width="14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m8-.0000003c-4.4 0-8 3.6-8 8 0 4.4000003 3.6 8.0000003 8 8.0000003 4.4 0 8-3.6 8-8.0000003 0-4.4-3.6-8-8-8zm0 14.4000003c-3.52 0-6.4-2.88-6.4-6.4000003 0-3.52 2.88-6.4 6.4-6.4 3.52 0 6.4 2.88 6.4 6.4 0 3.5200003-2.88 6.4000003-6.4 6.4000003zm.4-10.4000003h-1.2v4.8l4.16 2.5600003.64-1.04-3.6-2.1600003z" />
          </svg>
          <time>{post.frontmatter.date}</time>
          <span>{' | ' + series.join(', ')}</span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        {post.frontmatter.PS && (
          <p style={{ color: colors.gray }}>
            <hr style={{ marginBottom: rhythm(1) }} />
            {post.frontmatter.PS}
          </p>
        )}
      </Fragment>
    )

    if (this.props.isFrontPage) return postContent
    return (
      <Layout location={location}>
        <Helmet>
          <title>{post.frontmatter.title}</title>
        </Helmet>
        {postContent}
      </Layout>
    )
  }
}

/*
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}.net`} />
        <h1>{post.frontmatter.title}</h1>
        <div
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            color: '#c4c4c4',
          }}
        >
          <svg
            style={{ fill: '#c4c4c4', marginRight: '5px' }}
            height="14"
            viewBox="0 0 16 16"
            width="14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m8-.0000003c-4.4 0-8 3.6-8 8 0 4.4000003 3.6 8.0000003 8 8.0000003 4.4 0 8-3.6 8-8.0000003 0-4.4-3.6-8-8-8zm0 14.4000003c-3.52 0-6.4-2.88-6.4-6.4000003 0-3.52 2.88-6.4 6.4-6.4 3.52 0 6.4 2.88 6.4 6.4 0 3.5200003-2.88 6.4000003-6.4 6.4000003zm.4-10.4000003h-1.2v4.8l4.16 2.5600003.64-1.04-3.6-2.1600003z" />
          </svg>
          <time>{post.frontmatter.date}</time>
          <span>{' | ' + series.join(', ')}</span>
        </div>
        {renderAst(post.htmlAst)}

        {post.frontmatter.PS ? (
          <p style={{ color: colors.gray }}>
            <hr style={{ marginBottom: rhythm(1) }} />
            {post.frontmatter.PS}
          </p>
        ) : (
          ''
        )}
*/
export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html

      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        series
      }
    }
  }
`
