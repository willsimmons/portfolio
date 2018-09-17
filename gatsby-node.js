const _ = require("lodash");
const Promise = require("bluebird");
const path = require("path");

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const projectPost = path.resolve("./src/templates/project-post.js");
    //const sampleElements = path.resolve(`./src/templates/elements.js`);

    //JSON preview of projects found on Contentful
    resolve(graphql(`
        { 
          allContentfulProject(limit: 1000) {
            edges {
              node {
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
                userScreen {
                  file {
                    url
                    fileName
                  }
                }
                technology
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        //sample components for theme
        // createPage({
        //   path: `/components`,
        //   component: sampleComponents,
        //   context: {
        //       name: `Sample Components`,
        //   }
        // });

        _.each(result.data.allContentfulProject.edges, edge => {
          createPage({
            path: `/projects/${edge.node.name}/`,
            component: projectPost,
            context: {
              name: `${edge.node.name}`,
            },
          });
        })
      })
    )
  })
}
