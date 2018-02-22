const _ = require("lodash")
const Promise = require("bluebird")
const path = require("path")
const select = require(`unist-util-select`)
const fs = require(`fs-extra`)
const fetch = require('node-fetch')
const slash = require('slash')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const pages = []
    const blogPost = path.resolve("./src/templates/blog-post.js")
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

        // Create blog posts pages.
        _.each(result.data.allContentfulProject.edges, edge => {
          console.log(edge)
          createPage({
            path: `/projects/${edge.node.id}/`,
            component: blogPost,
            context: {
              path: edge.node.id,
            },
          })
        })
      }))
  })
}
