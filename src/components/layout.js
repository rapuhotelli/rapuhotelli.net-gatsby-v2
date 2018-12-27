import React from 'react'
import Helmet from 'react-helmet'
// import { Container } from 'react-responsive-grid'
import get from 'lodash/get'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import { rhythm, scale } from '../utils/typography'
import debounce from 'lodash/debounce'
import styled from 'styled-components'
// import Expanded from '../components/Expanded'
import { Link, graphql, StaticQuery } from 'gatsby'

import './layout.css'

const Layout = styled.div`
  max-width: 1080px;
  padding-top: 0;
  box-shadow: 0 0 10px rgba(50, 50, 50, 0.17);
  margin: 0 auto;

  display: grid;
  grid-template-areas:
    'header header'
    'content side'
    'footer footer';
  grid-template-columns: 7fr 4fr;
  grid-template-rows: 1fr auto;
  background-color: white;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'header'
      'content'
      'side'
      'footer';
  }
`

export default ({ location, children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `}
    render={data => {
      return <Template data={data} children={children} location={location} />
    }}
  />
)

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.onResize = this.onResize.bind(this)
    this.state = {
      layout: 'desktop',
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', debounce(this.onResize, 300))
    }
  }

  onResize() {
    if (typeof window !== `undefined`) {
      this.setState({
        layout: window.innerWidth < 800 ? 'mobile' : 'desktop',
      })
    }
  }

  detectSeries() {}

  render() {
    const { location, children } = this.props
    const metaData = get(this, 'props.data.site.siteMetadata')
    //const posts = get(this, 'props.data.allMarkdownRemark.edges')
    //const newestSlug = get(posts[0], 'node.fields.slug')
    /*
    const currentSlug =
      location.pathname === '/' ? newestSlug : location.pathname
    const series = get(this, 'props.data.allMarkdownRemark.series')
    */
    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }
    //<Expanded />
    return (
      <Layout>
        <Helmet
          defaultTitle={`${metaData.title}.net`}
          titleTemplate={`%s | ${metaData.title}.net`}
        >
          <meta name="og:type" content="website" />
          <meta name="og:site_name" content={`${metaData.title}`} />
          <meta name="og:description" content={`${metaData.description}`} />
          <link rel="canonical" href={`${metaData.siteUrl}${location}`} />
          <html lang="en" />
        </Helmet>
        <Header />
        <Sidebar />
        <div style={{ padding: '0 1rem 1rem 1rem' }}>{children}</div>
        <Footer />
      </Layout>
    )
  }
}

// export default Template
/*
const pageQuery = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      series: distinct(field: frontmatter___series)
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            series
          }
        }
      }
    }
  }
`

export default ({ children }) => (
  <StaticQuery
    query={pageQuery}
    render={data => <Template data={data}>{children}</Template>}
  />
)
*/
/*
{
	allMarkdownRemark {
	  distinct(field: frontmatter___series)
	}
}

*/
