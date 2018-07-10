import React from 'react'
import { StaticQuery, Link } from 'gatsby'

import { colors } from '../utils/constants'
/*
class Header extends React.Component {
  render() {
    return (
      <div
        style={{
          gridArea: 'header',
          display: 'flex',
          flexFlow: 'row wrap',
          padding: '1rem 1rem 0 1rem',
          borderBottom: `5px solid ${colors.orange}`,
        }}
      >
        <div style={{ flex: '1 1 50%' }}>
          <Link to={'/'}>
            <h1 style={{ marginTop: '0', flexBasis: '100%' }}>
              {this.props.metaData.title}
              <span style={{ color: colors.gray }}>.net</span>
            </h1>
            <p style={{ color: 'black' }}>{this.props.metaData.description}</p>
          </Link>
        </div>

        <div style={{ flex: '1 1 50%', textAlign: 'right', display: 'flex' }}>
          <div style={{ padding: '1rem', fontSize: '14px' }}>
            <p>
              yours truly calls himself a web developer and an unqualified
              pseudointellectual pubphilosopher
            </p>
          </div>
          <div>
            <div
              style={{
                boxShadow: 'black 1px 1px 5px',
                width: '100px',
                height: '100px',
              }}
            >
              <img
                style={{
                  position: 'relative',
                  top: '5px',
                  left: '5px',
                  transform: 'rotate(5deg)',
                }}
                src="http://place.manatee.lc/100/100.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
*/

// export default Header

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => {
      return (
        <div
          style={{
            gridArea: 'header',
            display: 'flex',
            flexFlow: 'row wrap',
            padding: '1rem 1rem 0 1rem',
            borderBottom: `5px solid ${colors.orange}`,
          }}
        >
          <div style={{ flex: '1 1 50%' }}>
            <Link to={'/'}>
              <h1 style={{ marginTop: '0', flexBasis: '100%' }}>
                {data.site.siteMetadata.title}
                <span style={{ color: colors.gray }}>.net</span>
              </h1>
              <p style={{ color: 'black' }}>
                {data.site.siteMetadata.description}
              </p>
            </Link>
          </div>

          <div style={{ flex: '1 1 50%', textAlign: 'right', display: 'flex' }}>
            <div style={{ padding: '1rem', fontSize: '14px' }}>
              <p>
                yours truly calls himself a web developer and an unqualified
                pseudointellectual pubphilosopher
              </p>
            </div>
            <div>
              <div
                style={{
                  boxShadow: 'black 1px 1px 5px',
                  width: '100px',
                  height: '100px',
                }}
              >
                <img
                  style={{
                    position: 'relative',
                    top: '5px',
                    left: '5px',
                    transform: 'rotate(5deg)',
                  }}
                  src="http://place.manatee.lc/100/100.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      )
    }}
  />
)
