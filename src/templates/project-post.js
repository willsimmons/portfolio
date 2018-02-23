import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

class ProjectPostTemplate extends React.Component {
  render() {
    console.log(this.props);
    const project = this.props.data.contentfulProject
    const summary = this.props.data.contentfulProject.description.childMarkdownRemark.html

    return (
      <div>
        <Helmet title={`${project.title}`} />
        <h1>{project.name}</h1>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
        <hr />
      </div>
    )
  }
}

export default ProjectPostTemplate

export const pageQuery = graphql`
  query projectByName($name: String) {
    contentfulProject(name: {eq: $name}) {
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
`
