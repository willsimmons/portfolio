import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

class BlogPostTemplate extends React.Component {
  render() {
    const project = this.props.data;
    console.log('contentful data on individual product site', post);
    const siteTitle = get(this.props, 'data.name')

    return (
      <div>
        <Helmet title={`${post.name.title} | ${siteTitle}`} />
        <h1>{post.name.title}</h1>
        <hr/>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query projectByName($name: contentfulProjectNameQueryString_2) {
    contentfulProject(name: $name) {
      name
      summary
      description {
        childMarkdownRemark {
          html
        }
      }
      repoURL
      titleScreen {
        file {
          url
          fileName
        }
      }
      screens {
        file {
          url
          fileName
        }
      }
    }
  }
`;
