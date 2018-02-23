import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import BannerLanding from '../components/BannerLanding'
import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'


class ProjectPostTemplate extends React.Component {
  render() {
    const projectName = this.props.data.contentfulProject.name
    const summary = this.props.data.contentfulProject.summary
    const description = this.props.data.contentfulProject.description.childMarkdownRemark.html
    const titleScreenURL = this.props.data.contentfulProject.titleScreen.file.url
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
              <img className="fullSize" src={titleScreenURL} alt={pic08} />
              <div className="content">
                <div className="inner">
                  <header className="major">
                    <h3>About the Project</h3>
                  </header>
                  <p>
                    Nullam et orci eu lorem consequat tincidunt vivamus et
                    sagittis magna sed nunc rhoncus condimentum sem. In
                    efficitur ligula tate urna. Maecenas massa sed magna
                    lacinia magna pellentesque lorem ipsum dolor. Nullam et
                    orci eu lorem consequat tincidunt. Vivamus et sagittis
                    tempus.
                  </p>
                  <ul className="actions">
                    <li>
                      <a href={repoURL} className="button">
                        Learn more at GitHub
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section>
              <Link to="/generic" className="image">
                <img src={pic09} alt="" />
              </Link>
              <div className="content">
                <div className="inner">
                  <header className="major">
                    <h3>Rhoncus magna</h3>
                  </header>
                  <p>
                    Nullam et orci eu lorem consequat tincidunt vivamus et
                    sagittis magna sed nunc rhoncus condimentum sem. In
                    efficitur ligula tate urna. Maecenas massa sed magna
                    lacinia magna pellentesque lorem ipsum dolor. Nullam et
                    orci eu lorem consequat tincidunt. Vivamus et sagittis
                    tempus.
                  </p>
                  <ul className="actions">
                    <li>
                      <Link to="/generic" className="button">
                        Learn more
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section>
              <Link to="/generic" className="image">
                <img src={pic10} alt="" />
              </Link>
              <div className="content">
                <div className="inner">
                  <header className="major">
                    <h3>Sed nunc ligula</h3>
                  </header>
                  <p>
                    Nullam et orci eu lorem consequat tincidunt vivamus et
                    sagittis magna sed nunc rhoncus condimentum sem. In
                    efficitur ligula tate urna. Maecenas massa sed magna
                    lacinia magna pellentesque lorem ipsum dolor. Nullam et
                    orci eu lorem consequat tincidunt. Vivamus et sagittis
                    tempus.
                  </p>
                  <ul className="actions">
                    <li>
                      <Link to="/generic" className="button">
                        Learn more
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <ul className="icons">
              <li>
                <a href={repoURL} className="icon alt fa-github">
                  <span className="label">GitHub</span>
                </a>
              </li>
            </ul>
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
