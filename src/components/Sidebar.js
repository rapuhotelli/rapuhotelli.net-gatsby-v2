import React from 'react'
import { connect } from 'react-redux'
import { StaticQuery, graphql, Link } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'

import ArchiveItem from './ArchiveItem'
import { rhythm } from '../utils/typography'
import { colors } from '../utils/constants'

import { setFilter } from '../utils/actions'

const StyledSidebar = styled.div`
  grid-area: side;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 0;
  .archive-header {
    border-bottom: 5px solid #e64946;
    display: flex;
    /* margin-top: 2.175rem; */
    margin-bottom: 0.725rem;
    h2 {
      /* margin: 0; */
      margin-bottom: 0;
    }
    .archive-browse {
      text-align: right;
      flex-grow: 1;
    }
  }

  ul {
    list-style-type: none;
    margin-left: 0;
    display: flex;
    flex-flow: row wrap;
    li {
      flex: 1 0 100%;
    }
  }
  .archive-browse {
    @media (max-width: 800px) {
      font-size: 24px;
    }
  }

  @media (max-width: 800px) {
    .archive-items {
      text-align: center;
      ul {
        display: inline-block;
        text-align: left;
        li {
          margin-bottom: 10px;
        }
      }
    }
  }

  .series-select {
    font-size: 14px;
    margin-bottom: 5px;
    h4 {
      margin: 0;
    }
    .serie-container {
      color: #e64946;
      cursor: pointer;
      display: inline;
    }
    .active {
      text-decoration: underline;
    }
  }

  .selection-arrow {
    color: ${colors.gray};
  }
`

const navListStyles = {
  listStyleType: 'none',
  marginLeft: '0',
}

/*
  series={series}
  layout={this.state.layout}
  posts={posts}
  currentPost={currentSlug}
*/

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query SidebarQuery {
        site {
          siteMetadata {
            title
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
    `}
    render={data => {
      const posts = get(data, 'allMarkdownRemark.edges', [])
      const series = get(data, 'allMarkdownRemark.series', [])
      return <ConnectedSidebar posts={posts} series={series} />
    }}
  />
)
/**
 * postsPerPage unused
 */
class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.props = props
  }

  getFilteredPosts() {
    if (this.props.filter === 'all') return this.props.posts
    return this.props.posts.filter(post =>
      post.node.frontmatter.series.includes(this.props.filter)
    )
  }

  setFilter(filter) {
    this.props.dispatch(setFilter(filter))
  }

  render() {
    const { series } = this.props
    return (
      <StyledSidebar>
        <div className="archive-header">
          <h2>Archive</h2>
        </div>
        <div className="series-select">
          <h4>Filter by series</h4>
          <div className="serie-container">
            <span
              className={this.props.filter === 'all' ? 'active' : ''}
              onClick={() => this.setFilter('all')}
            >
              ALL
            </span>
          </div>
          {series.map((serie, i) => {
            return (
              <div key={serie} className="serie-container">
                {', '}
                <span
                  className={this.props.filter === serie ? 'active' : ''}
                  onClick={() => this.setFilter(serie)}
                >
                  {serie}
                </span>
              </div>
            )
          })}
        </div>

        <ul>
          {this.getFilteredPosts().map(({ node }) => (
            <ArchiveItem key={node.fields.slug} node={node} />
          ))}
        </ul>
      </StyledSidebar>
    )
  }
}

const ConnectedSidebar = connect(
  function mapStateToProps(state) {
    return state
  },
  function mapDispatchToProps(dispatch) {
    return {
      dispatch,
    }
  }
)(Sidebar)

// Graveyard / todo
/*
    this.postsPerPage = 3

    this.nextPage = this.nextPage.bind(this)
    this.prevPage = this.prevPage.bind(this)

  //this.getPostsRange().map(({ node }) => <ArchiveItem key={node.fields.slug} node={node} />)

  filterPosts(filter) {
    if (filter === 'all') return this.props.posts
    return this.props.posts.filter(post =>
      post.node.frontmatter.series.includes(filter)
    )
  }
  getPostsRange(pageId) {
    const start = this.state.currentPage * this.postsPerPage
    return this.getFilteredPosts().slice(start, start + this.postsPerPage)
  }

  lastPage() {
    const lastPage =
      Math.ceil(this.getFilteredPosts().length / this.postsPerPage) - 1
    return lastPage
  }

  nextPage() {
    this.setState({
      currentPage: this.state.currentPage + 1,
    })
    // GTM event
    if (dataLayer) {
      dataLayer.push({
        event: 'archive-browse',
        toPage: this.state.currentPage + 1 + '', // state not updated yet
      })
    }
  }
  prevPage() {
    this.setState({
      currentPage: this.state.currentPage - 1,
    })
    if (dataLayer) {
      dataLayer.push({
        event: 'archive-browse',
        toPage: this.state.currentPage - 1 + '', // state not updated yet
      })
    }
  }
*/
/*
                  (this.props.currentSlug !== node.fields.slug) 
                  ? (<Link style={{ boxShadow: 'none', fontSize: '14px'}} to={node.fields.slug}>
                      <span style={{color: 'black'}}>{node.frontmatter.date} » </span>{title}
                    </Link>)
                  : <div className="archive-item" style={{ boxShadow: 'none', fontSize: '14px'}}>
                      {node.frontmatter.date} » 
                    </div>
                    <div>
                      {title}
                    </div>
*/
