import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import BannerLanding from '../components/BannerLanding'
import pic08 from '../assets/images/pic08.jpg'

class ProjectPostTemplate extends React.Component {
  render() {
    const projectName = this.props.data.contentfulProject.name
    const summary = this.props.data.contentfulProject.summary
    const description = this.props.data.contentfulProject.description.childMarkdownRemark.html
    const userScreen = this.props.data.contentfulProject.userScreen.file.url
    const repoURL = this.props.data.contentfulProject.repoURL
    
    return <div>
        <Helmet>
          <title>{projectName}</title>
          <meta name={projectName} content="Landing Page" />
        </Helmet>

        <BannerLanding title={projectName} summary={summary} />

        <div id="main">
          <section id="one" className="spotlights">
            <section>
              <img className="fullSize" src={userScreen} alt={pic08} />
              <div className="content">
                <div className="inner">
                  <header className="major">
                    <h3>About {projectName}</h3>
                  </header>
                  <div dangerouslySetInnerHTML={{ __html: description }} />
                  <ul className="actions">
                    <li>
                      <a href={repoURL} className="button icon fa-github">
                        Learn more at GitHub
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
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
      userScreen {
        file {
          url
          fileName
        }
      }
    }
  }
`
