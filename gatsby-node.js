const _ = require("lodash")
const Promise = require("bluebird")
const path = require("path")
const select = require(`unist-util-select`)
const fs = require(`fs-extra`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const pages = []
    const projectPost = path.resolve("./src/templates/project-post.js")
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
                screens {
                  file {
                    url
                    fileName
                  }
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        _.each(result.data.allContentfulProject.edges, edge => {
          createPage({
            path: `/projects/${edge.node.name}/`,
            component: projectPost,
            context: {
              name: `${edge.node.name}`,
            },
          })
        })
      })
    )
  })
}
