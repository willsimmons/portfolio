import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Banner from '../components/Banner';

class HomeIndex extends React.Component {
    render() {
        const siteMetadata = this.props.data.site.siteMetadata;
        const siteTitle = siteMetadata.title;
        const siteDescription = siteMetadata.description;
        const projects = this.props.data.allContentfulProject.edges;
        return (
            <div>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>
                <Banner />
                <div id="main">
                    <section id="one" className="tiles"> 
                    {
                        projects.map((projectNode, index) => {
                            let project = projectNode.node;
                            let landing = `projects/${project.name}`;
                            let screenShot = `${project.titleScreen.file.url}`;
                            return (
                                <article key={index} style={{backgroundImage: `url(${screenShot})`}}>
                                    <header className="major">
                                        <h3>{project.name}</h3>
                                        <p> {project.summary} </p>
                                    </header>
                                <Link to= {landing} className="link primary"></Link>
                                </article>
                            )
                        })
                    } 
                    </section>
                </div>
            </div>
        );
            
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
      site{
        siteMetadata{                   
          title
          description
        }
      }
      allContentfulProject{
        edges{
          node{
            name
            summary
            titleScreen{
              file{
                url
              }
            }
          }   
        }
      }
    }
`;
